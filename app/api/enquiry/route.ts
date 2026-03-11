import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  trip: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().min(10),
});

const tripLabels: Record<string, string> = {
  "northwest-corridor": "The Untouched Coast — 4 Days",
  "round-the-island": "The Full Circle — 7 Days",
  unsure: "Not sure yet",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const tripLabel = tripLabels[data.trip] ?? data.trip;

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Harmonize Sri Lanka <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL!,
      replyTo: data.email,
      subject: `New enquiry from ${data.name} — ${tripLabel}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f6f8f6;">
          <h2 style="color:#102216;margin-bottom:24px;">New Enquiry — Harmonize Sri Lanka</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#64748b;width:130px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;color:#0f172a;font-weight:600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top;">Email</td>
              <td style="padding:10px 0;color:#0f172a;"><a href="mailto:${data.email}" style="color:#11d452;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top;">Trip</td>
              <td style="padding:10px 0;color:#0f172a;font-weight:600;">${tripLabel}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top;">Group size</td>
              <td style="padding:10px 0;color:#0f172a;">${data.groupSize}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top;">Message</td>
              <td style="padding:10px 0;color:#0f172a;white-space:pre-wrap;">${data.message}</td>
            </tr>
          </table>
          <p style="margin-top:32px;color:#94a3b8;font-size:12px;">Reply directly to this email to respond to ${data.name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("[Enquiry error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

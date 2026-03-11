/**
 * POST /api/enquiry
 *
 * Phase 2: Wire up Resend for transactional email delivery.
 *
 * Current state: placeholder — form handles submission on the client
 * and logs to console. Replace the body below with Resend integration
 * once RESEND_API_KEY is available in .env.local.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  trip: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO Phase 2: Send via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    console.log("[Enquiry received]", data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

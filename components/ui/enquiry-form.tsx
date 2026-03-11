"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EnquiryFormValues } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  trip: z.string().min(1, "Please select a trip"),
  groupSize: z.string().min(1, "Please tell us your group size"),
  message: z.string().min(10, "Please tell us a bit more"),
});

const inputClass =
  "w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: EnquiryFormValues) {
    // TODO Phase 2: POST to /api/enquiry
    console.log("Enquiry:", data);
    await new Promise((r) => setTimeout(r, 800)); // Simulate async
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="text-slate-900 text-3xl font-bold mb-4">
          We&apos;ve got your note.
        </p>
        <p className="text-slate-500">
          We&apos;ll be in touch within 48 hours with everything you need to
          know.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            {...register("name")}
            placeholder="Your name"
            className={cn(inputClass, errors.name && "border-red-500/50")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className={cn(inputClass, errors.email && "border-red-500/50")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <select
            {...register("trip")}
            className={cn(
              inputClass,
              "appearance-none",
              errors.trip && "border-red-500/50"
            )}
          >
            <option value="">Which trip?</option>
            <option value="northwest-corridor">
              Northwest Corridor — 4 Days
            </option>
            <option value="round-the-island">Full Circle — 7 Days</option>
            <option value="unsure">Not sure yet</option>
          </select>
          {errors.trip && (
            <p className="text-red-500 text-xs mt-1">{errors.trip.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("groupSize")}
            placeholder="Group size (e.g. 2, just me, 8)"
            className={cn(inputClass, errors.groupSize && "border-red-500/50")}
          />
          {errors.groupSize && (
            <p className="text-red-500 text-xs mt-1">
              {errors.groupSize.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Anything else we should know? Dates you're thinking, questions you have..."
          className={cn(
            inputClass,
            "resize-none",
            errors.message && "border-red-500/50"
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-primary text-bg-dark px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

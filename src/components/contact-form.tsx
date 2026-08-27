"use client";

import { useForm } from "@formspree/react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwpgyyw");

  if (state.succeeded) {
    return (
      <section className="md:pt-1">
        <h2 className="text-sm text-muted">Get in touch</h2>

        <div className="mt-6 min-h-[180px]">
          <p className="text-base text-foreground">
            Thanks — your message has been sent.
          </p>

          <p className="mt-2 text-sm leading-6 text-muted">
            I&apos;ll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="md:pt-1">
      <h2 className="text-sm text-muted">Get in touch</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-md space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm text-muted"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border-b border-subtle bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm text-muted"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-subtle bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm text-muted"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full resize-none border-b border-subtle bg-transparent py-2 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        {state.errors && (
          <p className="text-sm text-muted" role="alert">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {state.submitting ? "Sending..." : "Send"}
          {!state.submitting && (
            <ArrowRight size={15} strokeWidth={1.5} />
          )}
        </button>
      </form>
    </section>
  );
}
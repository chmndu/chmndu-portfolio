"use client";

import { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight, Check, Copy } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwpgyyw");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("chamindud.dahanayaka@gmail.com");

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  if (state.succeeded) {
    return (
      <section className="mt-12 lg:w-[380px] lg:justify-self-end">
        <h2 className="border-l-2 border-accent pl-4 text-base font-medium text-foreground">
          Get in touch
        </h2>

        <div className="mt-5 flex items-center gap-2">
          <a
            href="mailto:chamindud.dahanayaka@gmail.com"
            className="text-base font-medium text-foreground transition-colors hover:text-accent-deep active:text-accent"
          >
            chamindud.dahanayaka<wbr />@gmail.com
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className="cursor-pointer text-muted transition-colors hover:text-accent-deep active:text-accent"
          >
            {copied ? (
              <Check
                aria-hidden="true"
                size={15}
                strokeWidth={2}
              />
            ) : (
              <Copy
                aria-hidden="true"
                size={15}
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        <div className="mt-7 max-w-sm border border-border bg-accent-soft p-6 md:p-7">
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
    <section className="mt-12 lg:w-[380px] lg:justify-self-end">
      <h2 className="border-l-2 border-accent pl-4 text-base font-medium text-foreground">
        Get in touch
      </h2>

      <div className="mt-5 flex items-center gap-2">
        <a
          href="mailto:chamindud.dahanayaka@gmail.com"
          className="text-base font-medium text-foreground transition-colors hover:text-accent-deep active:text-accent"
        >
          chamindud.dahanayaka<wbr />@gmail.com
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="cursor-pointer text-muted transition-colors hover:text-accent-deep active:text-accent"
        >
          {copied ? (
            <Check
              aria-hidden="true"
              size={15}
              strokeWidth={2}
            />
          ) : (
            <Copy
              aria-hidden="true"
              size={15}
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-7 max-w-sm space-y-6 border border-border p-6 md:max-w-3xl md:p-7 md:space-y-8 lg:space-y-6"
      >
        <div className="grid gap-6 md:gap-12 md:grid-cols-2 lg:gap-6 lg:grid-cols-1">
          <div className="space-y-6">
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
        </div>

        {state.errors && (
          <p className="text-sm text-muted" role="alert">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="group cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent-deep active:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-foreground disabled:active:text-foreground"
        >
          {state.submitting ? "Sending..." : "Send"}

          {!state.submitting && (
            <ArrowRight
              aria-hidden="true"
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          )}
        </button>
      </form>
    </section>
  );
}
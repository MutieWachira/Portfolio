"use client";

import { FormEvent, useState } from "react";
import { contactInfo, socialLinks } from "@/data/contact";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Your message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);
    setSubmitted(false);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-surface-secondary/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" />
            Get in touch
          </p>

          <h2
            id="contact-heading"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Have a project or
            <span className="block text-primary">
              opportunity in mind?
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            I&apos;m interested in discussing software development,
            technology projects, and opportunities to learn and grow.
            Feel free to reach out.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-7 sm:p-9">
              <div aria-hidden="true" className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-primary/5 blur-3xl" />
              <h3 className="relative text-xl font-semibold tracking-tight text-foreground">
                Contact information
              </h3>

              <div className="relative mt-7 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-2 inline-block break-all text-base font-medium text-primary hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {contactInfo.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Availability
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {contactInfo.availability}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 border-t border-border pt-7">
                <p className="text-sm font-semibold text-foreground">
                  Find me online
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {link.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface p-7 sm:p-9">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              Send a message
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              Fill in the form below to prepare your message.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="Enter your name"
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="Tell me a little about what you have in mind..."
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Prepare message <span aria-hidden="true">↗</span>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-foreground"
                >
                  Your message passed validation. Email delivery has not
                  been configured yet.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
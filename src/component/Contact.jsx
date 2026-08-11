import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ email }) {
  const [status, setStatus] = useState("idle"); 
  // mail satus,  idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-display font-bold text-3xl mb-2 flex items-center gap-3">
        <span className="w-8 h-8 bg-yellow nb-border inline-block" />
        Let's Connect
      </h2>
      <p className="mb-8">
        Or email me directly at{" "}
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4 bg-white nb-border nb-shadow p-6"
      >
        <input
          name="name"
          required
          placeholder="Enter your name"
          className="w-full nb-border px-3 py-2 font-mono text-sm bg-bg"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full nb-border px-3 py-2 font-mono text-sm bg-bg"
        />
        <textarea
          name="message"
          required
          rows="4"
          placeholder="Type your message"
          className="w-full nb-border px-3 py-2 font-mono text-sm bg-bg"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-coral nb-border nb-shadow-sm nb-press px-6 py-2 font-mono font-medium disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="font-mono text-sm text-green-700">
            Message sent — thank you!
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-coral">
            Something went wrong. Try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}

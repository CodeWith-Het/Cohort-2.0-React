// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend / EmailJS / Formspree
    console.log(form);
    alert("Message sent (demo only)!");
  };

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl grid gap-10 md:grid-cols-2">
        {/* Info side */}
        <div className="text-neutral-100 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in touch
          </h1>
          <p className="text-sm text-neutral-400">
            Have a project idea, doubt, or collaboration? Drop a message
            and a reply will be sent as soon as possible.
          </p>

          <div className="space-y-3 text-sm text-neutral-300">
            <p>Email: <span className="text-neutral-100">youremail@gmail.com</span></p>
            <p>Location: Surat, Gujarat, India</p>
          </div>
        </div>

        {/* Form side */}
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-800 rounded-2xl shadow-xl p-6 md:p-8 space-y-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-neutral-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-neutral-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm text-neutral-200">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What’s this about?"
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 outline-none resize-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

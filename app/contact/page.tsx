"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import FadeIn from "../components/FadeIn";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send message.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <FadeIn>
          <section className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-4">
              Contact Me
            </h1>

            <p className="text-slate-400 mb-12">
              Interested in working together, discussing AI, or connecting professionally?
              Feel free to reach out.
            </p>

            <div className="card p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-2 text-sm text-slate-400">
                    Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-400">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-400">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-slate-200"
                >
                  Send Message
                </button>

                {status && (
                  <p className="text-sm text-slate-400">
                    {status}
                  </p>
                )}
              </form>
            </div>

            <div className="mt-12 card p-8">
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-slate-400">
                <p>📧 arshilpathan546@gmail.com</p>
                <p>💻 https://github.com/ArsilAi</p>
                <p>📍 Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}
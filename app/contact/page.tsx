import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        <section className="max-w-4xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-4">
            Contact Me
          </h1>

          <p className="text-slate-400 mb-12">
            Interested in working together, discussing AI, or connecting professionally?
            Feel free to reach out.
          </p>

          <div className="card p-8">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-slate-200"
              >
                Send Message
              </button>

            </form>

          </div>

          <div className="mt-12 card p-8">

            <h2 className="text-2xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-slate-400">

              <p>
                📧 arshilpathan546@gmail.com
              </p>

              <p>
                💻 https://github.com/ArsilAi
              </p>

              <p>
                📍 Ahmedabad, Gujarat, India
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
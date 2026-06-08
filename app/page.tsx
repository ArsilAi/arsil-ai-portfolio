import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
            AI • Machine Learning • Software Development
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Building
            <br />
            Intelligent
            <br />
            Software Systems.
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-slate-400 leading-9 mb-10">
            I build AI-powered applications using Python, Next.js,
            Large Language Models, and Retrieval-Augmented Generation.
            My focus is creating practical software that solves
            real-world problems and delivers meaningful results.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition"
            >
              View Projects

              
            </Link>

            <Link
              href="/about"
              className="border border-slate-700 px-6 py-3 rounded-xl hover:border-white transition"
            >
              About Me
            </Link>

          </div>

        </section>

        {/* Featured Projects */}
        <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-24">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300"
            >
              View All →
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">

              <h3 className="text-xl font-semibold mb-4">
                AI Portfolio Website
              </h3>

              <p className="text-slate-400 mb-6 leading-7">
                Professional portfolio built using Next.js,
                TypeScript and Tailwind CSS.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind</span>
              </div>

            </div>

            <div className="border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">

              <h3 className="text-xl font-semibold mb-4">
                Local LLM Chatbot
              </h3>

              <p className="text-slate-400 mb-6 leading-7">
                AI chatbot powered by Ollama and local language
                models running directly on local hardware.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Ollama</span>
                <span className="skill-tag">LLM</span>
              </div>

            </div>

            <div className="border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">

              <h3 className="text-xl font-semibold mb-4">
                PDF Q&A System
              </h3>

              <p className="text-slate-400 mb-6 leading-7">
                RAG-based application that answers questions
                from uploaded documents.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">RAG</span>
                <span className="skill-tag">ChromaDB</span>
              </div>

            </div>

          </div>

        </section>
        </FadeIn>

       
      </main>

      <Footer />
    </>
  );
}
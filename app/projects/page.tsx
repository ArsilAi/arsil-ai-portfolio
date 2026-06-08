import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import FadeIn from "../components/FadeIn";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-4">
            Projects
          </h1>

          <p className="text-neutral-400 mb-12">
            A collection of projects focused on AI, Machine Learning,
            and modern web development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <div className="card p-8">

              <h2 className="text-2xl font-bold mb-4">
                 Portfolio Website
              </h2>

              <p className="text-neutral-400 mb-6 leading-7">
                Personal portfolio built with Next.js, TypeScript,
                and Tailwind CSS featuring responsive design,
                project showcase, and professional presentation.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">GitHub</span>
              </div>

              <a
                href="https://github.com/ArsilAi/arsil-ai-portfolio"
                target="_blank"
                className="inline-block border border-neutral-800 px-5 py-2 rounded-lg hover:border-white"
              >
                View GitHub
              </a>

            </div>

            {/* Project 2 */}
            <div className="card p-8">

              <h2 className="text-2xl font-bold mb-4">
                Local LLM Chatbot
              </h2>

              <p className="text-neutral-400 mb-6 leading-7">
                Chat application powered by Ollama and local
                language models capable of running AI models
                directly on a local machine.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Ollama</span>
                <span className="skill-tag">LLM</span>
                <span className="skill-tag">AI</span>
              </div>

              <a
                href="https://github.com/ArsilAi/local-llm-chatbot"
                target="_blank"
                className="inline-block border border-neutral-800 px-5 py-2 rounded-lg hover:border-white"
              >
                View GitHub
              </a>

            </div>

            {/* Project 3 */}
            <div className="card p-8">

              <h2 className="text-2xl font-bold mb-4">
                PDF Question Answering System
              </h2>

              <p className="text-neutral-400 mb-6 leading-7">
                Retrieval-Augmented Generation (RAG) application
                that allows users to upload documents and ask
                questions based on document content.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">RAG</span>
                <span className="skill-tag">ChromaDB</span>
              </div>

              <a
                href="https://github.com/ArsilAi/pdf-question-answering-system"
                target="_blank"
                className="inline-block border border-neutral-800 px-5 py-2 rounded-lg hover:border-white"
              >
                View GitHub
              </a>

            </div>

          </div>

        </section>
        </FadeIn>

      </main>

      <Footer />
    </>
  );
}
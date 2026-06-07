import Image from "next/image";
import Navbar from "./components/Navbar";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "CS Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Database Design",
      "REST APIs",
    ],
  },
  {
    title: "Web Development",
    skills: ["Next.js", "FastAPI", "HTML", "CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "Bash", "Docker"],
  },
  {
    title: "Mathematics",
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
  },
  {
    title: "Machine Learning",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Feature Engineering",
      "Model Evaluation",
      "XGBoost",
    ],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "Neural Networks", "CNNs", "Transfer Learning"],
  },
  {
    title: "LLM & Generative AI",
    skills: [
      "Transformers",
      "Prompt Engineering",
      "Embeddings",
      "RAG",
      "Fine-Tuning",
      "LoRA",
    ],
  },
  {
    title: "Frameworks",
    skills: ["Hugging Face Transformers", "LangChain", "LlamaIndex"],
  },
  {
    title: "Vector Databases",
    skills: ["ChromaDB", "Pinecone"],
  },
  {
    title: "AI Agents",
    skills: ["LangGraph", "Tool Calling"],
  },
  {
    title: "Currently Learning",
    skills: [
      "Kubernetes",
      "AWS",
      "CrewAI",
      "QLoRA",
      "MLflow",
      "Apache Airflow",
      "Distributed Systems",
    ],
    featured: true,
  },
];

const projects = [
  {
    title: "AI Portfolio Assistant",
    description:
      "RAG-powered AI chatbot that answers questions about my projects, skills and experience.",
  },
  {
    title: "Local LLM Chatbot",
    description:
      "Chat application powered by Ollama and local language models.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/50 via-slate-950/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px] sm:h-[36rem] sm:w-[36rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-4xl text-center">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/25 hover:shadow-[0_12px_48px_rgba(59,130,246,0.18)] sm:p-12 md:p-16">
            <div className="mb-8 flex justify-center sm:mb-10">
              <div className="group relative shrink-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-[3px] shadow-[0_0_32px_rgba(59,130,246,0.55)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_56px_rgba(59,130,246,0.75)]">
                <div className="relative size-[180px] overflow-hidden rounded-full bg-slate-950 ring-2 ring-blue-400/40 sm:size-[220px]">
                  <Image
                    src="/profile.png"          
                    alt="Arshil Khan"
                    width={220}
                    height={220}
                    priority
                    className="size-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-blue-400 transition-colors duration-300 group-hover:text-blue-300 sm:mb-6 sm:text-sm">
              Welcome to my portfolio
            </p>

            <h1 className="mb-4 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl">
              Arshil Khan
            </h1>

            <h2 className="mb-8 text-lg font-light text-slate-400 sm:mb-10 sm:text-xl md:text-2xl lg:text-3xl">
              BCA Student • AI Engineer Aspirant
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:mb-12 sm:text-lg">
              Building AI-powered applications using Python, Next.js, Local LLMs,
              RAG Systems and modern web technologies.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="w-full rounded-full border border-blue-500/40 bg-blue-500/15 px-8 py-3 text-sm font-semibold text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/25 hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] sm:w-auto sm:text-base"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="w-full rounded-full border border-white/15 bg-white/[0.06] px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] hover:text-white sm:w-auto sm:text-base"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="w-full rounded-full border border-white/10 bg-transparent px-8 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-200 sm:w-auto sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="section-title text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
          About Me
        </h2>

        <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 md:p-10">
          <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
            Hi, I&apos;m Arshil Khan, a BCA student passionate about AI
            Engineering, LLMs, RAG systems, and modern web development. I enjoy
            building AI-powered applications and continuously learning new
            technologies.
          </p>
        </div>
      </section>

      {/* Knowledge & Technologies */}
      <section
        id="skills"
        className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mb-10 sm:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Expertise
          </p>
          <h2 className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Knowledge & Technologies
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className={`group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] sm:rounded-3xl sm:p-6 ${
                category.featured ? "lg:col-span-3" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(59,130,246,1)]" />
                <h3 className="text-base font-semibold text-blue-400 transition-colors duration-300 group-hover:text-blue-300 sm:text-lg">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-blue-400/35 group-hover:bg-blue-500/15 group-hover:text-blue-100 sm:text-sm">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      {/* Education */}
<section id="education" className="max-w-6xl mx-auto px-6 py-24">

<div className="mb-12">
  <p className="text-blue-400 uppercase tracking-widest text-sm">
    Academic Background
  </p>

  <h2 className="text-5xl font-bold mt-2">
    Education
  </h2>
</div>

<div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#081328] via-[#0a1020] to-[#111827] p-10 hover:border-blue-500 transition-all duration-500">

  {/* Glow */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

  <div className="relative z-10">

    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

      <div>
        <h3 className="text-3xl font-bold">
          Bachelor of Computer Applications
        </h3>

        <p className="text-blue-400 mt-2">
          Gujarat University
        </p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
        <span className="text-blue-300">
          Expected 2027
        </span>
      </div>

    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white/5 rounded-2xl p-5 border border-gray-800">
        <p className="text-gray-400 text-sm">
          Current CGPA
        </p>

        <h4 className="text-3xl font-bold mt-2">
          7.2
        </h4>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 border border-gray-800">
        <p className="text-gray-400 text-sm">
          Degree
        </p>

        <h4 className="text-xl font-semibold mt-2">
          BCA
        </h4>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 border border-gray-800">
        <p className="text-gray-400 text-sm">
          Focus Areas
        </p>

        <h4 className="text-xl font-semibold mt-2">
          AI • ML • Software Development
        </h4>
      </div>

    </div>

  </div>

</div>

</section>

     {/* Projects */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-24">

<div className="mb-12">
  <p className="text-blue-400 uppercase tracking-widest text-sm">
    Featured Work
  </p>

  <h2 className="text-5xl font-bold mt-2">
    Projects
  </h2>
</div>

<div className="grid md:grid-cols-2 gap-8">

  {/* Project 1 */}
  <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#081328] via-[#0a1020] to-[#111827] p-8 hover:border-blue-500 transition-all duration-500">

    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[100px]" />

    <div className="relative z-10">

      <div className="flex justify-between items-center mb-5">
        <h3 className="text-3xl font-bold">
          AI Portfolio Assistant
        </h3>

        <span className="text-blue-400">
          AI
        </span>
      </div>

      <p className="text-gray-400 leading-7 mb-6">
        RAG-powered chatbot that answers questions about
        projects, skills, education and experience using
        local LLMs and vector search.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Next.js
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Ollama
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          RAG
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Tailwind
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl">
          Live Demo
        </button>

        <button className="border border-gray-700 px-5 py-2 rounded-xl">
          GitHub
        </button>
      </div>

    </div>
  </div>

  {/* Project 2 */}
  <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#081328] via-[#0a1020] to-[#111827] p-8 hover:border-blue-500 transition-all duration-500">

    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[100px]" />

    <div className="relative z-10">

      <div className="flex justify-between items-center mb-5">
        <h3 className="text-3xl font-bold">
          Local LLM Chatbot
        </h3>

        <span className="text-blue-400">
          LLM
        </span>
      </div>

      <p className="text-gray-400 leading-7 mb-6">
        Private chatbot powered by Ollama and local models
        running entirely on personal hardware without cloud APIs.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Ollama
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          Llama
        </span>

        <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm">
          AI
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl">
          Live Demo
        </button>

        <button className="border border-gray-700 px-5 py-2 rounded-xl">
          GitHub
        </button>
      </div>

    </div>
  </div>

</div>

</section>

      {/* Contact */}
<section id="contact" className="max-w-6xl mx-auto px-6 py-24">

<div className="mb-12">
  <p className="text-blue-400 uppercase tracking-widest text-sm">
    Get In Touch
  </p>

  <h2 className="text-5xl font-bold mt-2">
    Contact
  </h2>
</div>

<div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#081328] via-[#0a1020] to-[#111827] p-10">

  <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

  <div className="relative z-10">

    <h3 className="text-3xl font-bold mb-4">
      Let's Build Something Amazing
    </h3>

    <p className="text-gray-400 max-w-2xl mb-10">
      I'm currently learning AI Engineering, Machine Learning,
      RAG Systems and modern web development. Feel free to connect
      with me for collaborations, projects, internships or networking.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Email */}
      <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

        <h4 className="text-lg font-semibold mb-2">
        📧 arshilpathan546@gmail.com
        </h4>

        <p className="text-gray-400">
        <a href="mailto:arshilpathan546@gmail.com">arshilpathan546@gmail.com</a>
        </p>

      </div>

      {/* GitHub */}
      <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

        <h4 className="text-lg font-semibold mb-2">
          GitHub
        </h4>

        <a
          href="https://github.com/ArsilAi"
          target="_blank"
          className="text-blue-400 hover:text-blue-300"
        >
          💻 GitHub - github.com/ArsilAi
        </a>

      </div>

      {/* LinkedIn */}
      <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

        <h4 className="text-lg font-semibold mb-2">
          LinkedIn
        </h4>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="text-blue-400 hover:text-blue-300"
        >
          linkedin.com/in/yourprofile
        </a>

      </div>

    </div>

    <div className="flex gap-4 mt-10">

      <a
        href="mailto:arshil@example.com"
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-medium transition"
      >
        Send Email
      </a>

      <a
        href="/resume.pdf"
        className="border border-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 transition"
      >
        Download Resume
      </a>

    </div>

  </div>

</div>

</section>

     {/* Footer */}
<footer className="border-t border-gray-800 mt-20">

<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">

  <div>
    <h3 className="text-xl font-bold">
      Arshil AI
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      AI Engineer Portfolio
    </p>
  </div>

  <div className="flex gap-6 mt-4 md:mt-0">

    <a
     href="https://github.com/ArsilAi"
      target="_blank"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      💻 GitHub - github.com/ArsilAi 
    </a>

    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      className="text-gray-400 hover:text-blue-400 transition"
    >
      LinkedIn
    </a>

    <a
     href="mailto:arshilpathan546@gmail.com"
      className="text-gray-400 hover:text-blue-400 transition"
    >
       📧 arshilpathan546@gmail.com
    </a>

  </div>

</div>

<div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
  © 2026 Arshil Khan • Built with Next.js, Tailwind CSS & AI
</div>

</footer>
    </main>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import FadeIn from "../components/FadeIn";

export default function SkillsPage() {
return (
<> <Navbar />


  <main className="max-w-6xl mx-auto px-6 py-20">

    <h1 className="text-6xl font-bold mb-8">
      Skills
    </h1>

    <p className="text-slate-400 text-lg max-w-3xl mb-24 leading-8">
      Technologies, tools, and concepts I use and continue to
      develop through projects, coursework, and hands-on learning.
    </p>

    {/* Frontend */}

    <FadeIn>
    <section className="grid md:grid-cols-3 gap-12 mb-24">

      <div>
        <h2 className="uppercase tracking-[0.3em] text-sm text-slate-500">
          Frontend
        </h2>

        <div className="w-12 h-px bg-slate-700 mt-4"></div>
      </div>

      <div className="md:col-span-2 space-y-10">

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Next.js
          </h3>

          <p className="text-slate-500">
            Building modern web applications with React,
            TypeScript and server-side rendering.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            React
          </h3>

          <p className="text-slate-500">
            Component-based frontend development.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Tailwind CSS
          </h3>

          <p className="text-slate-500">
            Utility-first styling and responsive design.
          </p>
        </div>

      </div>

    
    </section>
    </FadeIn>

    {/* Languages */}

    <FadeIn>
    <section className="grid md:grid-cols-3 gap-12 mb-24">

      <div>
        <h2 className="uppercase tracking-[0.3em] text-sm text-slate-500">
          Languages
        </h2>

        <div className="w-12 h-px bg-slate-700 mt-4"></div>
      </div>

      <div className="md:col-span-2 space-y-10">

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Python
          </h3>

          <p className="text-slate-500">
            Primary language for AI, automation,
            and backend development.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            JavaScript
          </h3>

          <p className="text-slate-500">
            Modern web application development.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            SQL
          </h3>

          <p className="text-slate-500">
            Database design and data querying.
          </p>
        </div>

      </div>

    </section>
    </FadeIn>
    {/* AI / ML */}

    <FadeIn>
    <section className="grid md:grid-cols-3 gap-12 mb-24">

      <div>
        <h2 className="uppercase tracking-[0.3em] text-sm text-slate-500">
          AI / ML
        </h2>

        <div className="w-12 h-px bg-slate-700 mt-4"></div>
      </div>

      <div className="md:col-span-2 space-y-10">

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Machine Learning
          </h3>

          <p className="text-slate-500">
            Learning core concepts, model training,
            and practical AI workflows.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            LangChain
          </h3>

          <p className="text-slate-500">
            Building applications powered by LLMs.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Retrieval-Augmented Generation
          </h3>

          <p className="text-slate-500">
            Exploring document retrieval and AI assistants.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Ollama
          </h3>

          <p className="text-slate-500">
            Running local language models.
          </p>
        </div>

      </div>

    </section>
    </FadeIn>
    {/* Tools */}

    <FadeIn>
    <section className="grid md:grid-cols-3 gap-12 mb-20">

      <div>
        <h2 className="uppercase tracking-[0.3em] text-sm text-slate-500">
          Tools
        </h2>

        <div className="w-12 h-px bg-slate-700 mt-4"></div>
      </div>

      <div className="md:col-span-2 space-y-10">

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Git & GitHub
          </h3>

          <p className="text-slate-500">
            Version control and project collaboration.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2">
            VS Code & Cursor
          </h3>

          <p className="text-slate-500">
            Development environment and AI-assisted coding.
          </p>
        </div>

      </div>

    </section>
    </FadeIn>
  </main>

  <Footer />
</>


);
}

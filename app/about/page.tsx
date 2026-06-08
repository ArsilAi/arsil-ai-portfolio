import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import FadeIn from "../components/FadeIn";


export default function AboutPage() {
return (
<> <Navbar />

  <main className="min-h-screen">

<FadeIn>    
    <section className="max-w-5xl mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold mb-12">
        About Me
      </h1>

      <div className="card p-10">

        <h2 className="text-3xl font-bold mb-6">
          Arsil Khan
        </h2>

        <p className="text-slate-400 leading-8 mb-6">
          I am a Bachelor of Computer Applications (BCA) student at
          Gujarat University with a strong interest in Artificial
          Intelligence, Machine Learning, Large Language Models,
          and software development.
        </p>

        <p className="text-slate-400 leading-8">
          My current focus is building practical applications using
          Python, Next.js, Retrieval-Augmented Generation (RAG),
          local LLMs, and modern web technologies. I enjoy solving
          problems, learning new technologies, and turning ideas
          into working products.
        </p>

      </div>

    </section>

    <section className="max-w-5xl mx-auto px-6 pb-24">

      <h2 className="text-3xl font-bold mb-8">
        Education
      </h2>

      <div className="card p-8">

        <h3 className="text-2xl font-semibold">
          Bachelor of Computer Applications
        </h3>

        <p className="text-slate-400 mt-3">
          Gujarat University
        </p>

        <p className="text-slate-400 mt-2">
          Expected Graduation: 2027
        </p>

        <p className="text-slate-400 mt-2">
          Current CGPA: 7.2
        </p>

      </div>

    </section>
    </FadeIn>

  </main>

  <Footer />
</>
     

);
}


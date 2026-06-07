import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-slate-400">
          This is my about page.
        </p>

      </main>

      <Footer />
    </>
  );
}
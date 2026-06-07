import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-5xl font-bold mb-6">
          Contact
        </h1>

        <p className="text-slate-400">
          This is my contact page.
        </p>

      </main>

      <Footer />
    </>
  );
}
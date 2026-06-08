import Link from "next/link";

export default function Navbar() {
return ( <nav className="border-b border-slate-800"> <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

    <div>
      <h1 className="text-xl font-bold text-white">
        Arsil Khan
      </h1>

      <p className="text-xs text-neutral-500">
        AI / ML Developer
      </p>
    </div>

    <div className="flex items-center gap-8 text-sm text-neutral-400">

      <Link href="/" className="hover:text-white">
        Home
      </Link>

      <Link href="/projects" className="hover:text-white">
        Projects
      </Link>

      <Link href="/skills" className="hover:text-white">
        Skills
      </Link>

      <Link href="/about" className="hover:text-white">
        About
      </Link>

      <Link href="/contact" className="hover:text-white">
        Contact
      </Link>

    </div>
  </div>
</nav>


);
}

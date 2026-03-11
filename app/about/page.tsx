import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Magic Clippers — Baldwin Place Barbershop",
  description:
    "For over 18 years Magic Clippers has been serving Baldwin Place with a welcoming atmosphere, community commitment, and clean professional cuts for all ages.",
};

const BOOKSY_URL =
  "https://booksy.com/en-us/431671_magic-clippers_barber-shop_30913_somers#ba_s=seo";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="text-lg sm:text-xl font-extrabold tracking-wide uppercase hover:text-yellow-400 transition-colors"
          >
            Magic <span className="text-yellow-400">Clippers</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap">
            <Link href="/" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-yellow-400 font-medium">
              About
            </Link>
            <Link href="/#services" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="/#team" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Team
            </Link>
            <Link href="/#reviews" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Contact
            </Link>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-full bg-yellow-400 px-4 py-1.5 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 bg-gradient-to-b from-zinc-900 via-black to-black">
        <div className="absolute inset-0 bg-[url('/barbershop-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wide mb-4">
            About Magic Clippers
          </h1>
          <p className="text-xl text-zinc-300">
            A neighborhood barbershop built on trust, skill, and community.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-yellow-400 pl-6 sm:pl-8 mb-16">
            <p className="text-2xl sm:text-3xl font-semibold text-zinc-100 leading-snug">
              For over <span className="text-yellow-400">18 years</span>, Magic Clippers has been the place in Baldwin Place where people come for a great cut—and leave feeling like part of the family.
            </p>
          </div>

          <div className="space-y-8 text-lg sm:text-xl text-zinc-300 leading-relaxed">
            <p>
              What started as a small shop with a big dream has grown into a staple of the community. We didn’t get here by chasing trends—we got here by showing up every day, listening to our clients, and never cutting corners on the work. Our goal has always been simple: give everyone who walks in a clean, professional cut in an environment where they feel welcome and at ease.
            </p>
            <p>
              <span className="font-semibold text-white">A welcoming atmosphere</span> is at the heart of everything we do. Whether you’re in for the first time or you’ve been coming for years, you’ll get the same friendly greeting, the same attention to detail, and the same respect. We want every visit to feel like stepping into a place that knows you—where the conversation is easy and the chair is yours.
            </p>
            <p>
              We’re also deeply committed to <span className="font-semibold text-white">our community</span>. Baldwin Place and the surrounding area have supported us for more than eighteen years, and we don’t take that for granted. We show up for local families, schools, and events because this is our home too. When you support Magic Clippers, you’re supporting a business that cares about the people and the place we all share.
            </p>
            <p>
              From kids getting their first real haircut to seniors who’ve trusted us for decades, we provide <span className="font-semibold text-white">clean, professional service for all ages</span>. Our barbers are skilled in everything from classic cuts and fades to beard work and hot towel shaves—always with the same level of care and consistency. You deserve to leave our chair looking sharp and feeling confident, and that’s what we deliver, every time.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-zinc-100">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 text-center">
              <span className="text-4xl font-bold text-yellow-400 block mb-2">18+</span>
              <p className="text-zinc-300 font-medium">Years in business</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 text-center">
              <span className="text-zinc-100 font-semibold block mb-2">Welcoming</span>
              <p className="text-zinc-400 text-sm">A place where everyone belongs</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 text-center">
              <span className="text-zinc-100 font-semibold block mb-2">Community</span>
              <p className="text-zinc-400 text-sm">Rooted in Baldwin Place</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 text-center">
              <span className="text-zinc-100 font-semibold block mb-2">All ages</span>
              <p className="text-zinc-400 text-sm">Clean, professional cuts for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-100">
            Ready for your best look?
          </h2>
          <p className="text-zinc-400 mb-8">
            Book your appointment and experience the Magic Clippers difference.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition shadow-lg"
          >
            Book Appointment
          </a>
          <p className="mt-6">
            <Link href="/" className="text-zinc-400 hover:text-yellow-400 transition underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 py-6 mt-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-zinc-400 text-sm">
          <div className="mb-2 md:mb-0">© {new Date().getFullYear()} Magic Clippers. All rights reserved.</div>
          <div>
            <Link href="/" className="underline hover:text-yellow-400 transition">Home</Link>
            {" · "}
            <Link href="/#contact" className="underline hover:text-yellow-400 transition">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

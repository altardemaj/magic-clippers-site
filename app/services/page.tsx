import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Magic Clippers — Baldwin Place Barbershop",
  description:
    "Professional haircuts, fades, beard services, and grooming at Magic Clippers. View our pricing and book your appointment online.",
};

const BOOKSY_URL =
  "https://booksy.com/en-us/431671_magic-clippers_barber-shop_30913_somers#ba_s=seo";

type ServiceItem = {
  name: string;
  price: string;
  time: string;
  description: string;
};

type ServiceSection = {
  title: string;
  services: ServiceItem[];
};

const SERVICE_SECTIONS: ServiceSection[] = [
  {
    title: "Haircuts",
    services: [
      {
        name: "Haircut",
        price: "$30+",
        time: "15 min",
        description: "Classic haircut with clean fade and styling.",
      },
      {
        name: "Skin Fade",
        price: "$35+",
        time: "15 min",
        description: "Precision skin fade blended perfectly.",
      },
      {
        name: "Kids Haircut (no skin fade)",
        price: "$25+",
        time: "15 min",
        description: "Clean haircut for kids.",
      },
      {
        name: "Kids Skin Fade",
        price: "$30+",
        time: "15 min",
        description: "Kids fade haircut with detailed blending.",
      },
      {
        name: "Senior Haircut",
        price: "$25+",
        time: "15 min",
        description: "Comfortable haircut tailored for seniors.",
      },
    ],
  },
  {
    title: "Beard Services",
    services: [
      {
        name: "Beard Trim",
        price: "$20+",
        time: "15 min",
        description: "Clean beard trim and shaping.",
      },
      {
        name: "Beard Trim & Shape Up",
        price: "$30+",
        time: "15 min",
        description: "Full beard shaping with sharp line-up.",
      },
    ],
  },
  {
    title: "Packages",
    services: [
      {
        name: "Haircut + Beard Trim",
        price: "$40+",
        time: "20 min+",
        description: "Full haircut with beard trim and shaping.",
      },
      {
        name: "Hair Cut & Wash",
        price: "$40+",
        time: "15 min+",
        description: "Haircut followed by relaxing hair wash.",
      },
      {
        name: "3 Haircuts Package",
        price: "$85+",
        time: "30 min+",
        description: "Bundle deal for multiple haircuts.",
      },
    ],
  },
  {
    title: "Extras",
    services: [
      {
        name: "Hair Wash",
        price: "$15+",
        time: "10 min",
        description: "Refreshing hair wash service.",
      },
      {
        name: "Logo Design",
        price: "$20+",
        time: "20 min",
        description: "Custom hair logo design.",
      },
      {
        name: "Each Number or Letter Design",
        price: "$5",
        time: "5 min",
        description: "Add numbers or letters to your haircut design.",
      },
    ],
  },
];

export default function ServicesPage() {
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
            <Link href="/about" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-yellow-400 font-medium">
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
        <div
          className="absolute inset-0 bg-[url('/barbershop-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-4">
            Barber Services & Pricing
          </h1>
          <p className="text-xl text-zinc-300">
            Professional cuts, fades, and grooming tailored to your style.
          </p>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {SERVICE_SECTIONS.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-8 border-b border-zinc-700 pb-3">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col hover:border-yellow-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/5"
                  >
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-2xl font-bold text-yellow-400 mb-1">
                      {service.price}
                    </p>
                    <p className="text-sm text-zinc-500 mb-3">{service.time}</p>
                    <p className="text-zinc-400 text-sm flex-1 mb-6">
                      {service.description}
                    </p>
                    <a
                      href={BOOKSY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-yellow-400 text-black px-4 py-2.5 text-sm font-semibold hover:bg-yellow-300 transition-colors w-full"
                    >
                      Book Appointment
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-zinc-900 to-black border-y border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready for a Fresh Cut?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Book your appointment online—quick, easy, and no wait.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition shadow-xl hover:scale-105"
          >
            Book Your Appointment
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 py-6 mt-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-zinc-400 text-sm">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Magic Clippers. All rights reserved.
          </div>
          <div>
            <Link href="/" className="underline hover:text-yellow-400 transition">
              Home
            </Link>
            {" · "}
            <Link
              href="/#contact"
              className="underline hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

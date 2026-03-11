import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="text-lg sm:text-xl font-extrabold tracking-wide uppercase hover:text-yellow-400 transition-colors">
            Magic <span className="text-yellow-400">Clippers</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap">
            <a href="#home" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Home
            </a>
            <Link href="/about" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <a href="#team" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Team
            </a>
            <a href="#reviews" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-zinc-300 hover:text-yellow-400 transition-colors">
              Contact
            </a>
            <a
              href="https://booksy.com/en-us/431671_magic-clippers_barber-shop_30913_somers#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-full bg-yellow-400 px-4 py-1.5 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </header>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-black via-zinc-900/50 to-black pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/barbershop-bg.jpg')] bg-cover bg-center opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-400 tracking-wide mb-6">
            Serving Baldwin Place for 18+ Years
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight mb-4 drop-shadow-lg">
            Magic Clippers
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-10 font-medium max-w-2xl">
            Premium barbershop. Expert cuts. A place you belong.
          </p>
          <a
            href="https://booksy.com/en-us/431671_magic-clippers_barber-shop_30913_somers#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-yellow-300 transition hover:scale-105"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative z-10 -mt-2 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="bg-zinc-900/95 border border-zinc-700 rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">18+</span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">445+</span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg sm:text-xl font-bold text-zinc-100">Baldwin Place</span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">NY</span>
            </div>
            <div className="flex flex-col items-center gap-1 col-span-2 lg:col-span-1">
              <span className="text-lg sm:text-xl font-bold text-zinc-100">Family Friendly</span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">All ages welcome</span>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Magic Clippers</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          For over <span className="font-semibold text-yellow-400/90">18 years</span> we&apos;ve been Baldwin Place&apos;s neighborhood barbershop—welcoming everyone with a smile and delivering clean, professional cuts you can count on.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 px-6 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">18+ Years Here</h3>
              <p className="text-sm text-zinc-400">Trusted experience and consistency you can rely on.</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Welcoming Vibe</h3>
              <p className="text-sm text-zinc-400">Friendly, relaxed atmosphere for every visit.</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Community First</h3>
              <p className="text-sm text-zinc-400">Rooted in Baldwin Place, here for our neighbors.</p>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Pro Cuts, All Ages</h3>
              <p className="text-sm text-zinc-400">Clean, sharp results for kids through seniors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Haircut */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.75 6.25s2.018 6.25 8.25 6.25 8.25-6.25 8.25-6.25M12 12.5v8M9 20.5h6" strokeLinecap="round"/></svg>
              <h3 className="text-2xl font-semibold mb-2">Haircut</h3>
              <p className="text-zinc-400 text-center">Clean, precise cuts and fades tailored to your style.</p>
            </div>
            {/* Haircut & Beard */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 5.5A4.5 4.5 0 0 1 8.5 1h7A4.5 4.5 0 0 1 20 5.5V9a8 8 0 0 1-8 8 8 8 0 0 1-8-8V5.5z" strokeLinecap="round" /></svg>
              <h3 className="text-2xl font-semibold mb-2">Haircut &amp; Beard</h3>
              <p className="text-zinc-400 text-center">Full-service cut plus detailed beard shaping and line-up.</p>
            </div>
            {/* Beard Trim */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M7 16c1.75 4 8.25 4 10 0m-10 0c-.5-2-2.5-6-2.5-10a9.5 9.5 0 0 1 19 0c0 4-2 8-2.5 10" strokeLinecap="round"/><ellipse cx="12" cy="8" rx="3" ry="1" /></svg>
              <h3 className="text-2xl font-semibold mb-2">Beard Trim</h3>
              <p className="text-zinc-400 text-center">Sharp beard lines, shaping, and sculpting for a polished look.</p>
            </div>
            {/* Kids Haircut */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 10a6 6 0 0 1 12 0v2.5A5.5 5.5 0 0 1 12.5 18h-1A5.5 5.5 0 0 1 6 12.5V10z" strokeLinecap="round" /></svg>
              <h3 className="text-2xl font-semibold mb-2">Kids Haircut</h3>
              <p className="text-zinc-400 text-center">Patient, friendly cuts for kids with extra attention to detail.</p>
            </div>
            {/* Senior Haircut */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 9a7 7 0 0 1 14 0v1.5A5.5 5.5 0 0 1 13.5 16H10A5 5 0 0 0 5 21" strokeLinecap="round" /></svg>
              <h3 className="text-2xl font-semibold mb-2">Senior Haircut</h3>
              <p className="text-zinc-400 text-center">Classic, comfortable cuts tailored for seniors.</p>
            </div>
            {/* Hot Towel Shave */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 flex flex-col items-center hover:border-yellow-400 transition">
              <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 18v-2.5A2.5 2.5 0 0 1 6.5 13h11A2.5 2.5 0 0 1 20 15.5V18" /><path d="M12 2v10m0 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" strokeLinecap="round"/></svg>
              <h3 className="text-2xl font-semibold mb-2">Hot Towel Shave</h3>
              <p className="text-zinc-400 text-center">Classic hot towel shaves for a clean, relaxing finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BARBER TEAM SECTION */}
      <section id="team" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Nick */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col items-center p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-3xl font-bold text-yellow-400 shadow mb-4 border-4 border-yellow-400">
              ND
            </div>
            <h3 className="text-xl font-semibold">Nick Demaj</h3>
            <p className="text-zinc-400 mt-1">Master Barber</p>
          </div>
          {/* Al */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col items-center p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-3xl font-bold text-yellow-400 shadow mb-4 border-4 border-yellow-400">
              AL
            </div>
            <h3 className="text-xl font-semibold">Al</h3>
            <p className="text-zinc-400 mt-1">Senior Barber</p>
          </div>
          {/* Preng */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col items-center p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-3xl font-bold text-yellow-400 shadow mb-4 border-4 border-yellow-400">
              PR
            </div>
            <h3 className="text-xl font-semibold">Preng</h3>
            <p className="text-zinc-400 mt-1">Barber</p>
          </div>
          {/* Frank */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col items-center p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-3xl font-bold text-yellow-400 shadow mb-4 border-4 border-yellow-400">
              FR
            </div>
            <h3 className="text-xl font-semibold">Frank</h3>
            <p className="text-zinc-400 mt-1">Barber</p>
          </div>
          {/* Joane */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col items-center p-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-3xl font-bold text-yellow-400 shadow mb-4 border-4 border-yellow-400">
              JN
            </div>
            <h3 className="text-xl font-semibold">Joane</h3>
            <p className="text-zinc-400 mt-1">Barber</p>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 sm:py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Space</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

<div className="aspect-square rounded-xl overflow-hidden border border-zinc-700 bg-[url('/barbershop-bg.jpg')] bg-cover bg-center flex items-end p-4">
  <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
    Shop
  </span>
</div>

<div className="aspect-square rounded-xl overflow-hidden border border-zinc-700 bg-[url('/cuts.jpg')] bg-cover bg-center flex items-end p-4">
  <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
    Cuts
  </span>
</div>

<div className="aspect-square rounded-xl overflow-hidden border border-zinc-700 bg-[url('/beard.jpg')] bg-cover bg-center flex items-end p-4">
  <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
    Beard
  </span>
</div>

<div className="aspect-square rounded-xl overflow-hidden border border-zinc-700 bg-[url('/style.jpg')] bg-cover bg-center flex items-end p-4">
  <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full">
    Style
  </span>
</div>

</div>
          <p className="text-center text-zinc-500 text-sm mt-4">Visit us at 267 Tomahawk St to see the full experience.</p>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Clients Love Us</h2>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center justify-center">
              <span className="text-yellow-400 text-3xl mr-2">5.0</span>
              <span className="flex items-center text-yellow-400 text-2xl">
                <svg className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 2.5l2.47 5.01 5.53.8-4 3.86.94 5.47L10 15.13l-4.94 2.6.94-5.47-4-3.86 5.53-.8L10 2.5z"/></svg>
                <svg className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 2.5l2.47 5.01 5.53.8-4 3.86.94 5.47L10 15.13l-4.94 2.6.94-5.47-4-3.86 5.53-.8L10 2.5z"/></svg>
                <svg className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 2.5l2.47 5.01 5.53.8-4 3.86.94 5.47L10 15.13l-4.94 2.6.94-5.47-4-3.86 5.53-.8L10 2.5z"/></svg>
                <svg className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 2.5l2.47 5.01 5.53.8-4 3.86.94 5.47L10 15.13l-4.94 2.6.94-5.47-4-3.86 5.53-.8L10 2.5z"/></svg>
                <svg className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 2.5l2.47 5.01 5.53.8-4 3.86.94 5.47L10 15.13l-4.94 2.6.94-5.47-4-3.86 5.53-.8L10 2.5z"/></svg>
              </span>
            </div>
            <p className="text-zinc-300 text-xl">
              Based on <span className="font-bold text-yellow-400">445 reviews</span> on Google & Booksy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <blockquote className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-400 shadow text-zinc-200 flex-1">
              <p className="italic mb-2">"Best barbershop in Putnam & Westchester! Consistent, friendly and professional. Mike gives the best fades."</p>
              <footer className="text-right text-sm text-zinc-400">— James R.</footer>
            </blockquote>
            <blockquote className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-400 shadow text-zinc-200 flex-1">
              <p className="italic mb-2">"The shop is clean, modern, and the staff really know their craft. Highly recommend Magic Clippers!"</p>
              <footer className="text-right text-sm text-zinc-400">— Angie S.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS SECTION */}
      <section className="py-16 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
        <div className="bg-zinc-800 rounded-xl shadow p-6 flex flex-col items-center mb-2">
          <table className="w-full text-left text-zinc-200 text-lg">
            <tbody>
              <tr>
                <td className="pr-4">Monday - Friday</td>
                <td className="font-semibold">9am - 6pm</td>
              </tr>
              <tr>
                <td className="pr-4">Saturday</td>
                <td className="font-semibold">8am - 5pm</td>
              </tr>
              <tr>
                <td className="pr-4">Sunday</td>
                <td className="font-semibold text-red-400">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA BOOKING */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-zinc-900 to-black border-y border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Book Your Visit</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Reserve your spot online—quick, easy, and no wait.
          </p>
          <a
            href="https://booksy.com/en-us/431671_magic-clippers_barber-shop_30913_somers#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition shadow-xl hover:scale-105"
          >
            Book Appointment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">Contact & Visit Us</h2>
        <div className="mb-6">
          <p className="text-zinc-300 text-xl mb-2">
            <span className="font-semibold">Address:</span>
            <br />
            267 Tomahawk St, Baldwin Place, NY 10505
          </p>
          <p className="text-zinc-300 text-xl mb-2">
            <span className="font-semibold">Phone:</span>
            <br />
            <a href="tel:19142195445" className="underline hover:text-yellow-400 transition">
              (914) 219-5445
            </a>
          </p>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-zinc-800">
          <iframe
            title="Magic Clippers on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.0192779070973!2d-73.78648158456897!3d41.34418027926938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2b2e6a8f8da99%3A0xae4b6d707a38e79d!2s267%20Tomahawk%20St%2C%20Baldwin%20Place%2C%20NY%2010505!5e0!3m2!1sen!2sus!4v1714681275649!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 py-6 mt-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-zinc-400 text-sm">
          <div className="mb-2 md:mb-0">© {new Date().getFullYear()} Magic Clippers. All rights reserved.</div>
          <div>
            Design by <a href="https://booksy.com" className="underline hover:text-yellow-400">Magic Clippers Team</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
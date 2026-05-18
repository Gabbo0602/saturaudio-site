export default function SaturaudioLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,200,0.04),transparent_65%)]" />

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Logo */}
          <img
            src="/logo-real.png"
            alt="Saturaudio Logo"
            className="w-[180px] md:w-[240px] mb-8 opacity-95"
          />

          {/* Subtitle */}
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
            Handmade analog guitar pedals inspired by vintage circuitry,
            industrial aesthetics and modern saturation.
          </p>

          {/* Pedal Hero */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full scale-90" />

            <img
              src="/pedal-real.png"
              alt="Saturaudio Pedal"
              className="relative z-10 w-[380px] md:w-[560px] drop-shadow-[0_0_80px_rgba(0,180,200,0.18)] hover:scale-[1.01] transition-all duration-500"
            />
          </div>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-[#d86d1d] hover:bg-[#f07b21] transition-all duration-300 text-black font-bold tracking-wide shadow-lg shadow-orange-500/20">
              Follow the Project
            </button>

            <button className="px-8 py-4 rounded-full border border-zinc-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 text-zinc-300 font-bold tracking-wide">
              Listen to Demos
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-zinc-900 py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-[#d86d1d]">
              Analog Identity
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
              Saturaudio is a boutique pedal project focused on handcrafted
              analog saturation, inspired by vintage fuzz circuits, industrial
              textures and cinematic sound design.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              Built for players who love raw textures, shoegaze walls,
              expressive dynamics and atmospheric analog tone.
            </p>
          </div>

          {/* Brand Artwork */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full" />

            <img
              src="/hero-real.png"
              alt="Saturaudio Artwork"
              className="relative z-10 rounded-[2rem] border border-zinc-800 shadow-2xl w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-600 tracking-[0.25em] uppercase text-sm bg-black">
        Saturaudio — Handmade Analog Devices
      </footer>
    </div>
  );
}

export default function SaturaudioLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-[#d86d1d] selection:text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center bg-black px-5 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:justify-center md:py-16 overflow-hidden">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 flex w-[min(82vw,380px)] items-center gap-3 text-left md:w-[560px]">
            <img
              src="/logo.png"
              alt="Saturaudio Logo"
              className="w-[72px] shrink-0 opacity-95 drop-shadow-[0_14px_34px_rgba(0,0,0,0.65)] sm:w-[84px]"
            />
            <span className="wordmark-glow relative inline-flex">
              <img
                src="/wordmark-transparent.png"
                alt=""
                aria-hidden="true"
                className="warm-wordmark-shadow absolute left-0 top-0 h-[36px] w-auto object-contain sm:h-[46px]"
              />
              <img
                src="/wordmark-transparent.png"
                alt="Saturaudio"
                className="relative z-10 h-[36px] w-auto object-contain sm:h-[46px]"
              />
            </span>
          </div>

          {/* Subtitle */}
          <p className="max-w-[21rem] text-[0.9rem] leading-relaxed tracking-wide text-zinc-400/90 sm:max-w-[36rem] sm:text-base md:text-lg">
            Handmade analog guitar pedals inspired by vintage circuitry,
            industrial aesthetics and modern saturation.
          </p>

          {/* Pedal Hero */}
          <div className="relative mt-7 flex items-center justify-center sm:mt-10">
            <div className="absolute bottom-[-4%] left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-full bg-black/80 blur-2xl" />

            <img
              src="/pedal-real.png"
              alt="Saturaudio Pedal"
              className="relative z-10 w-[min(82vw,380px)] md:w-[560px] drop-shadow-[0_28px_95px_rgba(0,0,0,0.62)] transition-[filter] duration-700 ease-out hover:drop-shadow-[0_34px_115px_rgba(0,0,0,0.72)]"
            />
          </div>

          {/* Buttons */}
          <div className="mt-10 sm:mt-14 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button className="group relative overflow-hidden rounded-full bg-[#d86d1d] px-8 py-4 text-black font-bold tracking-wide shadow-[0_16px_42px_rgba(216,109,29,0.22)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#f07b21] hover:shadow-[0_22px_58px_rgba(216,109,29,0.32)] focus:outline-none focus:ring-2 focus:ring-[#f07b21]/70 focus:ring-offset-2 focus:ring-offset-black">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">Follow the Project</span>
            </button>

            <button className="rounded-full border border-zinc-700/90 bg-white/[0.02] px-8 py-4 text-zinc-300 font-bold tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:ring-offset-2 focus:ring-offset-black">
              Listen to Demos
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-zinc-900 py-20 px-5 sm:px-6 sm:py-24 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#d86d1d]">
              Analog Identity
            </h2>

            <p className="mt-6 sm:mt-8 text-zinc-400 leading-relaxed text-base sm:text-lg">
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
            <img
              src="/hero-real.png"
              alt="Saturaudio Artwork"
              className="relative z-10 rounded-[1.5rem] sm:rounded-[2rem] border border-zinc-800 shadow-2xl shadow-black/50 w-full max-w-[500px]"
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

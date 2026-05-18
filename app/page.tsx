export default function SaturaudioLanding() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden selection:bg-[#d86d1d] selection:text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center bg-[#000000] px-5 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:justify-center md:py-16 overflow-hidden">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 flex w-[min(82vw,380px)] items-center gap-3 text-left md:w-[560px]">
            <img
              src="/logo.png"
              alt="Logo Saturaudio"
              className="w-[83px] shrink-0 opacity-95 drop-shadow-[0_14px_34px_rgba(0,0,0,0.65)] sm:w-[97px]"
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
            Saturazione analogica artigianale per texture cinematografiche,
            shoegaze e fuzz vintage.
          </p>

          {/* Pedal Hero */}
          <div className="relative mt-7 flex items-center justify-center sm:mt-10">
            <div className="absolute bottom-[-4%] left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-full bg-black/80 blur-2xl" />

            <img
              src="/pedal-real.png"
              alt="Pedale analogico Saturaudio"
              className="relative z-10 w-[min(90vw,420px)] rounded-[1.4rem] border border-zinc-900 shadow-2xl shadow-black/60 md:w-[560px] sm:rounded-[1.8rem]"
            />
          </div>

          {/* Buttons */}
          <div className="mt-10 sm:mt-14 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button className="group relative overflow-hidden rounded-full border border-[#d86d1d]/70 bg-[#d86d1d]/10 px-8 py-4 text-[#f07b21] font-bold tracking-wide shadow-[0_14px_34px_rgba(216,109,29,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-[background-color,box-shadow,color,border-color] duration-500 ease-out hover:border-[#f07b21] hover:bg-[#d86d1d]/18 hover:text-[#ff9a3d] hover:shadow-[0_0_34px_rgba(216,109,29,0.44),0_18px_58px_rgba(216,109,29,0.2),inset_0_1px_0_rgba(255,236,210,0.28)] focus:outline-none focus:ring-2 focus:ring-[#f07b21]/60 focus:ring-offset-2 focus:ring-offset-black active:shadow-[0_0_22px_rgba(216,109,29,0.56),inset_0_2px_8px_rgba(0,0,0,0.3)]">
              <span className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,226,166,0.5),transparent_62%)] transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="relative">Segui il progetto</span>
            </button>

            <button className="group relative overflow-hidden rounded-full border border-[#0f8f95]/70 bg-[#0f8f95]/10 px-8 py-4 text-[#20c7ca] font-bold tracking-wide shadow-[0_14px_34px_rgba(15,143,149,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-[background-color,box-shadow,color,border-color] duration-500 ease-out hover:border-[#20c7ca] hover:bg-[#0f8f95]/18 hover:text-[#73f4f5] hover:shadow-[0_0_34px_rgba(32,199,202,0.38),0_18px_58px_rgba(15,143,149,0.2),inset_0_1px_0_rgba(220,255,255,0.28)] focus:outline-none focus:ring-2 focus:ring-[#20c7ca]/55 focus:ring-offset-2 focus:ring-offset-black active:shadow-[0_0_22px_rgba(32,199,202,0.48),inset_0_2px_8px_rgba(0,0,0,0.3)]">
              <span className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_50%_50%,rgba(115,244,245,0.32),transparent_64%)] transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="relative">Ascolta le demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-zinc-900 bg-[#000000] py-20 px-5 sm:px-6 sm:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#d86d1d]">
              Identità analogica
            </h2>

            <p className="mt-6 sm:mt-8 text-zinc-400 leading-relaxed text-base sm:text-lg">
              Saturaudio è un progetto boutique dedicato alla saturazione
              analogica artigianale, ispirato a circuiti fuzz vintage,
              texture industriali e sound design cinematografico.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              Pensato per chi cerca texture ruvide, muri shoegaze,
              dinamiche espressive e tono analogico atmosferico.
            </p>
          </div>

          {/* Brand Artwork */}
          <div className="relative flex items-center justify-center">
            <img
              src="/hero-real.png"
              alt="Artwork Saturaudio"
              className="relative z-10 w-full max-w-[500px] rounded-[1.5rem] border border-zinc-800 shadow-2xl shadow-black/50 sm:rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-[#000000] py-10 text-center text-sm uppercase tracking-[0.25em] text-zinc-600">
        SATURAUDIO — dispositivi analogici artigianali
      </footer>
    </div>
  );
}

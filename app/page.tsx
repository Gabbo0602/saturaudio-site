export default function SaturaudioLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#000000] text-white selection:bg-[#d86d1d] selection:text-black">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center bg-[#000000] px-5 pb-14 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:justify-center md:py-16">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="mb-7 flex w-[min(82vw,380px)] items-center gap-3 text-left md:w-[560px]">
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

          <div className="relative flex items-center justify-center">
            <div className="absolute bottom-[-4%] left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-full bg-black/85 blur-2xl" />

            <img
              src="/pedal-real.png"
              alt="Pedale analogico Saturaudio"
              className="relative z-10 w-[min(90vw,420px)] rounded-[1.4rem] border border-zinc-900 shadow-2xl shadow-black/60 sm:rounded-[1.8rem] md:w-[560px]"
            />
          </div>

          <p className="mt-8 max-w-[22rem] text-[0.92rem] leading-relaxed tracking-wide text-zinc-400/90 sm:mt-10 sm:max-w-[36rem] sm:text-base md:text-lg">
            Saturazione analogica artigianale per texture cinematografiche,
            shoegaze e fuzz vintage.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#catalogo"
              className="group relative overflow-hidden rounded-full border border-[#d86d1d]/70 bg-[#d86d1d]/10 px-8 py-4 font-bold tracking-wide text-[#f07b21] shadow-[0_14px_34px_rgba(216,109,29,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-[background-color,box-shadow,color,border-color] duration-500 ease-out hover:border-[#f07b21] hover:bg-[#d86d1d]/18 hover:text-[#ff9a3d] hover:shadow-[0_0_34px_rgba(216,109,29,0.44),0_18px_58px_rgba(216,109,29,0.2),inset_0_1px_0_rgba(255,236,210,0.28)] focus:outline-none focus:ring-2 focus:ring-[#f07b21]/60 focus:ring-offset-2 focus:ring-offset-black active:shadow-[0_0_22px_rgba(216,109,29,0.56),inset_0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,226,166,0.5),transparent_62%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="relative">Acquista il tuo pedale</span>
            </a>

            <a
              href="#demo"
              className="group relative overflow-hidden rounded-full border border-[#0f8f95]/70 bg-[#0f8f95]/10 px-8 py-4 font-bold tracking-wide text-[#20c7ca] shadow-[0_14px_34px_rgba(15,143,149,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-[background-color,box-shadow,color,border-color] duration-500 ease-out hover:border-[#20c7ca] hover:bg-[#0f8f95]/18 hover:text-[#73f4f5] hover:shadow-[0_0_34px_rgba(32,199,202,0.38),0_18px_58px_rgba(15,143,149,0.2),inset_0_1px_0_rgba(220,255,255,0.28)] focus:outline-none focus:ring-2 focus:ring-[#20c7ca]/55 focus:ring-offset-2 focus:ring-offset-black active:shadow-[0_0_22px_rgba(32,199,202,0.48),inset_0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(115,244,245,0.32),transparent_64%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="relative">Ascolta le demo</span>
            </a>
          </div>
        </div>
      </section>

      {/* VISIONE SONORA */}
      <section id="progetto" className="scroll-mt-10 border-t border-zinc-900 bg-[#000000] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#0f8f95]">
            Visione sonora
          </p>
          <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.12em] text-[#d86d1d] sm:text-4xl">
            Materia, rumore, controllo
          </h2>
          <p className="mt-7 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Circuiti analogici, saturazione densa e risposta viva sotto le
            dita. Ogni dettaglio è pensato per trasformare fuzz, armoniche e
            decadimento in una texture fisica, scura, cinematografica.
          </p>
        </div>
      </section>

      {/* FEATURED DEVICE */}
      <section className="border-t border-zinc-900 bg-[#000000] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#0f8f95]">
              Featured device
            </p>
            <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.12em] text-[#d86d1d] sm:text-4xl md:text-5xl">
              Saturazione analogica
            </h2>
            <p className="mt-7 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Un pedale boutique costruito per texture ruvide, muri shoegaze e
              fuzz vintage, con un carattere industriale e una risposta
              dinamica pensata per restare musicale anche nelle saturazioni più
              dense.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-left text-sm text-zinc-500 sm:text-base">
              <div className="border-l border-[#d86d1d]/60 pl-4">
                <span className="block text-zinc-300">Circuito</span>
                Analogico
              </div>
              <div className="border-l border-[#0f8f95]/60 pl-4">
                <span className="block text-zinc-300">Voce</span>
                Fuzz / texture
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <span className="block text-zinc-300">Uso</span>
                Shoegaze
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <span className="block text-zinc-300">Mood</span>
                Cinematico
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/hero-real.png"
              alt="Artwork Saturaudio"
              className="relative z-10 w-full max-w-[500px] rounded-[1.5rem] border border-zinc-800 shadow-2xl shadow-black/50 sm:rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="scroll-mt-10 border-t border-zinc-900 bg-[#000000] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#0f8f95]">
              Catalogo
            </p>
            <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.12em] text-[#d86d1d] sm:text-4xl">
              Il tuo Saturpedal
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Produzione artigianale in piccoli lotti. Ogni pedale nasce per
              chi cerca saturazione analogica, carattere industriale e una
              risposta viva sotto le dita.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-zinc-900 bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-black uppercase tracking-[0.16em] text-zinc-100">
                  Saturpedal
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Fuzz, texture e saturazione cinematografica in formato
                  boutique analogico.
                </p>
              </div>

              <a
                href="mailto:info@saturaudio.com?subject=Richiesta%20Saturpedal"
                className="group relative overflow-hidden rounded-full border border-[#d86d1d]/70 bg-[#d86d1d]/10 px-6 py-3 text-center font-bold tracking-wide text-[#f07b21] shadow-[0_14px_34px_rgba(216,109,29,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] transition-[background-color,box-shadow,color,border-color] duration-500 ease-out hover:border-[#f07b21] hover:bg-[#d86d1d]/18 hover:text-[#ff9a3d] hover:shadow-[0_0_34px_rgba(216,109,29,0.38),0_18px_58px_rgba(216,109,29,0.18)] focus:outline-none focus:ring-2 focus:ring-[#f07b21]/60 focus:ring-offset-2 focus:ring-offset-black"
              >
                Richiedi disponibilità
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO AUDIO */}
      <section id="demo" className="scroll-mt-10 border-t border-zinc-900 bg-[#000000] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#0f8f95]">
              Demo audio
            </p>
            <h2 className="mt-5 text-3xl font-black uppercase tracking-[0.12em] text-[#d86d1d] sm:text-4xl">
              Suoni in arrivo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Demo, take e video verranno raccolti qui: pochi esempi, scelti
              bene, per mostrare dinamica, grana e comportamento reale del
              circuito.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Fuzz vintage", "Texture shoegaze", "Saturazione cinematica"].map(
              (demo) => (
                <div
                  key={demo}
                  className="rounded-[1.2rem] border border-zinc-900 bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="h-24 rounded-xl border border-zinc-900 bg-[linear-gradient(90deg,rgba(216,109,29,0.12),rgba(15,143,149,0.08),transparent)]" />
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">
                    {demo}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 bg-[#000000] px-5 py-10 text-center text-sm uppercase tracking-[0.25em] text-zinc-600">
        SATURAUDIO — dispositivi analogici artigianali
      </footer>
    </div>
  );
}

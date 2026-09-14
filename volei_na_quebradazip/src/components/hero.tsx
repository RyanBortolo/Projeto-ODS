'use client';

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden flex items-center bg-primary">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Rede de volei.png"
            className="h-full w-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl italic uppercase tracking-tighter">
            TRANSFORMANDO <br />
            VIDAS <br />
            <span className="text-white">ATRAVÉS DO ESPORTE</span> <br />
            EM CARAPICUÍBA.
          </h1>
        </div>
      </div>
      
      {/* Elementos Decorativos */}
      <div className="absolute bottom-12 left-12 h-10 w-10 bg-accent shadow-lg" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-4 bg-primary border-l-2 border-white/30" />
    </section>
  );
}

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-white border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative h-16 w-16">
            <Image
              src="/logo.jpeg"
              alt="Logo Vôlei na Quebrada"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-black italic uppercase tracking-tighter">
            Vôlei na Quebrada
          </span>
        </div>
        
        <div className="flex justify-center gap-8 mb-12 opacity-80 text-sm font-bold uppercase italic">
          <a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a>
          <a href="#ajude" className="hover:text-accent transition-colors">Ajude o Projeto</a>
        </div>

        <div className="pt-8 border-t border-white/5 text-xs opacity-40 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Vôlei na Quebrada
        </div>
      </div>
    </footer>
  );
}

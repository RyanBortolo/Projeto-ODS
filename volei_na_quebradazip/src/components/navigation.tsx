'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm h-20 flex items-center">
      <div className="container mx-auto flex items-center px-4">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <div className="relative h-16 w-16">
            <Image
              src="/logo.jpeg"
              alt="Logo Vôlei na Quebrada"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black italic text-primary uppercase leading-none hidden sm:block">
            Vôlei na <br /> Quebrada
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-8 text-sm font-black text-primary uppercase italic">
            <Link href="#sobre" className="hover:text-accent transition-colors">Sobre</Link>
            <Link href="#projeto" className="hover:text-accent transition-colors">Projeto</Link>
            <Link href="#ajude" className="hover:text-accent transition-colors">Ajude</Link>
            <Link href="#contato" className="hover:text-accent transition-colors">Contato</Link>
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="bg-primary text-white rounded-none font-black italic uppercase px-6">
            <a href="#ajude">Apoiar</a>
          </Button>
        </div>
      </div>
    </header>
  );
}


'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Play, Instagram, Pin } from 'lucide-react';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));
  const instagramUrl = "https://www.instagram.com/voleinaquebrada";

  return (
    <section id="galeria" className="bg-white py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-primary italic mb-2 uppercase">Nosso Feed</h2>
            <div className="h-2 w-24 bg-accent" />
          </div>
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-primary font-black italic hover:text-accent transition-colors"
          >
            VER NO INSTAGRAM <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Grid estilo Instagram */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 lg:max-w-5xl lg:mx-auto">
          {galleryImages.map((image, idx) => (
            <a
              key={idx}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted transition-all"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
              
              {/* Ícone de Post Fixo (como no seu print) */}
              {idx === 0 && (
                <div className="absolute top-2 right-2 z-10 text-white drop-shadow-md">
                  <Pin className="h-4 w-4 rotate-45 fill-current" />
                </div>
              )}

              {/* Ícone de Reels/Vídeo (como no seu print) */}
              {(idx === 2 || idx === 3 || idx === 5 || idx === 7 || idx === 8) && (
                <div className="absolute top-2 right-2 z-10 text-white drop-shadow-md">
                  <Play className="h-4 w-4 fill-current" />
                </div>
              )}

              {/* Overlay de Hover estilo Instagram (Likes/Comentários fake) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="flex gap-4 text-white font-bold text-sm">
                  <span className="flex items-center gap-1">
                    <Instagram className="h-4 w-4 fill-current" /> Instagram
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile Call to Action */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-black italic bg-accent px-8 py-3 rounded-none border-2 border-primary"
          >
            SIGA NO INSTAGRAM <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

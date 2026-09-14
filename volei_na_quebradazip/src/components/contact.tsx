'use client';

import { Instagram, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const address = "Praça da Árvore - Conj. Hab. Pres. Castelo Branco, Carapicuíba - SP";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contato" className="bg-primary py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-accent font-black italic text-sm uppercase block mb-2">CONTATO</span>
              <h2 className="text-5xl md:text-7xl font-black italic leading-none mb-6 uppercase">
                QUER ENTRAR <br />
                NO <span className="text-accent underline decoration-white decoration-8">JOGO?</span>
              </h2>
              <p className="text-xl opacity-80 max-w-md font-medium">
                Dúvidas ou quer conhecer nossos treinos? Mande uma mensagem ou visite nosso núcleo.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-60 uppercase">WhatsApp</p>
                  <p className="text-xl font-black italic">(11) 94742-7154</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-60 uppercase">Instagram</p>
                  <p className="text-xl font-black italic">@voleinaquebrada</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-60 uppercase">Local</p>
                  <p className="text-lg font-black italic">Carapicuíba - SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video border-8 border-white shadow-2xl overflow-hidden bg-white/10">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={mapUrl}
              className="grayscale contrast-125"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

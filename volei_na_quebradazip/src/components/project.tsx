'use client';

import { Trophy, Users, ShieldCheck } from 'lucide-react';

const methodology = [
  {
    title: "TREINO TÉCNICO",
    description: "Fundamentos do vôlei adaptados para todas as idades.",
    icon: <Trophy className="h-6 w-6" />
  },
  {
    title: "APOIO SOCIAL",
    description: "Acompanhamento pedagógico e rodas de conversa.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "INCLUSÃO TOTAL",
    description: "Projeto gratuito focado em meninas de baixa renda.",
    icon: <ShieldCheck className="h-6 w-6" />
  }
];

export function Project() {
  return (
    <section id="projeto" className="bg-primary py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-accent font-black italic text-sm uppercase block mb-2">
            METODOLOGIA
          </span>
          <h2 className="text-5xl md:text-6xl font-black italic leading-none uppercase">
            ONDE A <span className="text-white">MAGIA</span> <br />
            ACONTECE NA <span className="underline decoration-white decoration-8">QUADRA</span>.
          </h2>
        </div>

        <div className="max-w-3xl space-y-6">
          {methodology.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 bg-white/10 border-l-8 border-white">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase">{item.title}</h3>
                <p className="opacity-90 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t-2 border-white/20 pt-12 text-center">
          <p className="text-3xl md:text-5xl font-black italic uppercase leading-none">
            "OCUPANDO A CIDADE COM <span className="bg-white text-primary px-4">ESPORTE</span> E RESISTÊNCIA."
          </p>
        </div>
      </div>
    </section>
  );
}

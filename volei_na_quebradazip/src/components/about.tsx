'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "SAÚDE E BEM-ESTAR",
    description: "Promoção da saúde física e mental das nossas alunas."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "COMUNIDADE UNIDA",
    description: "Rede de apoio entre as meninas e suas famílias."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "FOCO NOS ODS",
    description: "Projeto alinhado aos Objetivos Globais da ONU."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "EMPODERAMENTO",
    description: "Liderança e autoestima dentro e fora da quadra."
  }
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Título Estilo Print */}
        <div className="mb-20">
          <h2 className="text-5xl font-black italic leading-none text-primary md:text-6xl uppercase">
            MAIS QUE UM <span className="text-accent underline decoration-primary decoration-4">TIME</span>,<br />
            UMA <span className="text-accent underline decoration-primary decoration-4">FAMÍLIA</span>.
          </h2>
          <p className="mt-8 text-lg font-medium text-muted-foreground max-w-2xl">
            O Vôlei na Quebrada nasceu em Carapicuíba com a missão de transformar a realidade de meninas através do esporte e disciplina.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center bg-accent/30 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black italic text-primary uppercase">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seção de Impacto com Imagem à Esquerda */}
        <div className="mt-32 flex flex-col items-center gap-16 lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            {/* Efeito de fundo rosa */}
            <div className="absolute -bottom-6 -left-6 h-full w-full bg-accent/40 -z-10" />
            <div className="aspect-[4/5] overflow-hidden border-4 border-primary shadow-2xl">
              <img 
                src="/impacto.jpeg" 
                alt="Nosso Impacto" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full space-y-8 lg:w-1/2">
            <div className="inline-block bg-primary px-6 py-2 text-xs font-black italic text-white uppercase">
              NOSSO IMPACTO
            </div>
            <h3 className="text-4xl font-black italic text-primary leading-tight uppercase">
              ESTAMOS MUDANDO A HISTÓRIA DE CARAPICUÍBA UM SET POR VEZ.
            </h3>
            <p className="text-lg text-muted-foreground font-medium">
              Não se trata apenas de vôlei. Trata-se de ocupar espaços, garantir igualdade e mostrar que o talento da quebrada é imenso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

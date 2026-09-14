'use client';

import { Volleyball, Heart, Users, Target, Zap, Instagram, MapPin, Trophy, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <header className="mb-16 border-b-4 border-primary pb-8">
        <h1 className="text-6xl font-black italic text-primary uppercase leading-tight">Guia de Estilo / Figma Export</h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground">
          Cores atualizadas: Rosa Claro predominante com Azul Esportivo para destaque.
        </p>
      </header>

      {/* CORES */}
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-black italic text-primary uppercase">1. Paleta de Cores</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="h-32 w-full bg-primary rounded-none border-4 border-black" />
            <p className="font-bold uppercase italic text-primary">Azul Esportivo (Primary)</p>
            <p className="text-sm opacity-60">--primary: 217 91% 60%</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 w-full bg-accent rounded-none border-4 border-black" />
            <p className="font-bold uppercase italic text-primary">Rosa Claro (Accent)</p>
            <p className="text-sm opacity-60">--accent: 330 100% 91%</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 w-full bg-white rounded-none border-4 border-primary" />
            <p className="font-bold uppercase italic text-primary">Branco (Background)</p>
            <p className="text-sm opacity-60">--background: 0 0% 100%</p>
          </div>
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-black italic text-primary uppercase">2. Tipografia</h2>
        <div className="space-y-8 border-l-8 border-accent pl-8">
          <div>
            <p className="text-sm uppercase opacity-40 mb-2">Heading 1 / Combinado</p>
            <div className="space-y-0">
              <h1 className="text-6xl font-black italic text-primary uppercase leading-none">JUNTOS SOMOS</h1>
              <h1 className="text-6xl font-black italic text-accent uppercase leading-none underline decoration-primary decoration-8">IMBATÍVEIS</h1>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase opacity-40 mb-2">Body Text / Medium</p>
            <p className="text-xl font-medium text-muted-foreground max-w-2xl">
              O Vôlei na Quebrada utiliza o esporte como ferramenta de transformação social em Carapicuíba.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENTES */}
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-black italic text-primary uppercase">3. Componentes Principais</h2>
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Botões */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic text-primary border-b-2 border-accent pb-2">BOTÕES</h3>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none bg-primary text-white hover:bg-primary/90 px-8 font-black italic shadow-xl">
                COPIAR CHAVE PIX
              </Button>
              <Button className="bg-accent text-primary hover:bg-accent/90 font-black italic py-6 rounded-none border-2 border-primary">
                WHATSAPP <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-black italic text-primary border-b-2 border-accent pb-2">CARDS DE APOIO</h3>
            <Card className="border-4 border-primary rounded-none bg-white">
              <CardContent className="p-8">
                <div className="mb-4 h-12 w-12 bg-accent text-primary flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-black italic text-primary uppercase">Título do Card</h4>
                <p className="text-muted-foreground">Exemplo de descrição com as novas cores.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BANNER DE IMPACTO */}
      <section className="mb-20">
        <h2 className="mb-8 text-3xl font-black italic text-primary uppercase">4. Banners</h2>
        <div className="bg-accent p-8 border-l-[12px] border-primary">
           <h4 className="text-2xl font-black italic text-primary uppercase mb-2">BANNER DE DESTAQUE</h4>
           <p className="text-primary/80 font-bold uppercase">Predominância do rosa com detalhes em azul.</p>
        </div>
      </section>
    </div>
  );
}

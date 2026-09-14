
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HandHeart, Presentation } from 'lucide-react';

export function Support() {
  const whatsappUrl = "https://wa.me/5511947427154";

  return (
    <section id="ajude" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black italic leading-none text-primary uppercase">
            JUNTOS SOMOS <br />
            <span className="text-accent underline decoration-primary decoration-8">IMBATÍVEIS</span>.
          </h2>
          <p className="mt-8 text-lg font-bold text-muted-foreground max-w-xl">
            O Vôlei na Quebrada é um projeto social que sobrevive graças ao apoio de pessoas como você.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
          <Card className="border-2 border-primary rounded-none shadow-none">
            <CardContent className="p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-accent text-primary">
                <HandHeart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black italic text-primary mb-4 uppercase">VOLUNTARIADO</h3>
              <p className="text-muted-foreground font-medium mb-8">
                Doe seu tempo e talento para ajudar no desenvolvimento das nossas atletas.
              </p>
              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-black italic py-6 rounded-none uppercase">
                <a href={whatsappUrl}>Quero ajudar</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary rounded-none shadow-none">
            <CardContent className="p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-accent text-primary">
                <Presentation className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black italic text-primary mb-4 uppercase">PARCERIAS</h3>
              <p className="text-muted-foreground font-medium mb-8">
                Sua empresa pode patrocinar um núcleo ou um evento esportivo oficial.
              </p>
              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-black italic py-6 rounded-none uppercase">
                <a href={whatsappUrl}>Seja parceiro</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Banner Rosa Inferior */}
        <div className="mt-20 bg-accent p-8 flex flex-col md:flex-row items-center justify-between border-l-[12px] border-primary">
          <h4 className="text-xl font-black italic text-primary uppercase mb-4 md:mb-0">
            NOS AJUDE A COMPARTILHAR O PROJETO
          </h4>
          <Button variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black italic px-8 py-6 rounded-none uppercase">
            <a href="https://instagram.com/voleinaquebrada">@VOLEINAQUEBRADA</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Project } from '@/components/project';
import { Support } from '@/components/support';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Project />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

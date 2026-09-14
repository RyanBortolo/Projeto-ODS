import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vôlei na Quebrada | Carapicuíba',
  description: 'Transformando vidas através do voleibol em Carapicuíba - Empoderamento, saúde e comunidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

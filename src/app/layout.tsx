import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'PaperGen — Cambridge IGCSE & O-Level Exam Paper Maker from Past Papers',
  description: 'Create print-ready Cambridge IGCSE and O/A-Level exam papers and worksheets in 90 seconds from past papers with official mark schemes and custom coaching branding.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-midnight-950 text-text-primary antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

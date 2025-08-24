import './globals.css';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'PACE — Move Bold. Move Better.',
  description: 'A modern, AI-branded redesign of a famous sports brand. Built with Next.js + Tailwind, powered by Firebase/JSON content.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'PACE — Move Bold. Move Better.',
    description: 'AI-forward redesign with modern UX.',
    images: ['/og.svg'],
    type: 'website'
  },
  icons: { icon: '/fevicon.jpg' }
};

function Nav() {
  return (
    <header className="container-p py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <img src="/brand/logo.svg" alt="PACE logo" className="h-8 w-auto" />
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="/products" className="hover:text-brand-600">Products</Link>
        <Link href="/blog" className="hover:text-brand-600">Blog</Link>
        <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-2 bg-brand-600 text-white">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container-p py-10 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} PACE. Educational redesign.</p>
        <div className="flex gap-4">
          <a href="/robots.txt">Robots</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-zinc-100 antialiased">
      {/* Subtle Persian-inspired background pattern */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, #e7c675 0, transparent 35%), radial-gradient(circle at 80% 30%, #7a3b3b 0, transparent 30%), radial-gradient(circle at 40% 70%, #1e5b57 0, transparent 35%)",
          backgroundBlendMode: 'screen',
        }}
      />

      <NavBar />
      <main className="relative z-10">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

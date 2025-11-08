import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-600 to-emerald-600 shadow ring-1 ring-white/20" />
          <span className="text-lg tracking-wide font-semibold">
            Zoon-e-Kashmir
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-200">
          <a href="#collections" className="hover:text-amber-300 transition-colors">Collections</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 transition">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

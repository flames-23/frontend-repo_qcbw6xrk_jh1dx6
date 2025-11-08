import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Persian motif frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-6 rounded-[2rem] border border-amber-400/30" />
        <div className="absolute inset-10 rounded-[1.5rem] border border-emerald-400/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-amber-300/90 tracking-widest uppercase text-xs mb-4">Timeless Kashmir</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Handcrafted Pherans, Shawls & Embroidery
          </h1>
          <p className="mt-5 text-zinc-300 leading-relaxed">
            Experience the warmth and grace of traditional Kashmiri attire, woven with stories and embellished with fine Sozni and Papier-mâché motifs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 transition shadow">
              Explore Collection <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10">
              Our Story
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[1.25rem] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl">
            {/* Hero image placeholder with textile pattern */}
            <div className="w-full h-full grid grid-cols-6 grid-rows-6">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/5"
                  style={{
                    background:
                      i % 3 === 0
                        ? 'repeating-linear-gradient(45deg, #1f2937, #1f2937 8px, #111827 8px, #111827 16px)'
                        : i % 3 === 1
                        ? 'radial-gradient(circle at 30% 30%, #0b3c3a 0, transparent 60%)'
                        : 'radial-gradient(circle at 70% 70%, #4b2a2a 0, transparent 60%)',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur px-4 py-3 rounded-xl border border-white/10 text-sm">
            Pure Pashmina • Sozni • Tilla
          </div>
        </div>
      </div>
    </section>
  );
}

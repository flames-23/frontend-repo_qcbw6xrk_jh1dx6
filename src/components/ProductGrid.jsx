import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pashmina Shawl — Sozni Border',
    price: 249.0,
    color: 'Ivory',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Winter Pheran — Ari Embroidery',
    price: 139.0,
    color: 'Saffron',
    image:
      'https://images.unsplash.com/photo-1642607968072-7f7efd5a2051?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tilla Work Shawl',
    price: 299.0,
    color: 'Noon Chai Pink',
    image:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Kashmiri Kurta — Sozni Sprigs',
    price: 119.0,
    color: 'Chinar Green',
    image:
      'https://images.unsplash.com/photo-1520975922284-7b683b55cdef?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/10 hover:border-amber-400/40 transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-black/60 border border-white/10">
          {product.color}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-amber-300 font-semibold">${product.price.toFixed(2)}</p>
          <button className="text-sm rounded-full px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="collections" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Featured Collection</h2>
            <p className="text-zinc-400 mt-1">A curation of seasonal favorites</p>
          </div>
          <a href="#" className="text-amber-300 hover:text-amber-200 text-sm">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-10 text-sm text-zinc-300">
        <div>
          <h3 className="text-zinc-100 font-semibold">Zoon-e-Kashmir</h3>
          <p className="mt-3 leading-relaxed">
            Fine Kashmiri craftsmanship — from the valley to your wardrobe.
          </p>
        </div>
        <div>
          <h4 className="text-zinc-100 font-medium">Visit</h4>
          <p className="mt-3">Srinagar, Jammu & Kashmir<br />India</p>
          <p className="mt-2">Open: Mon–Sat, 10am–7pm</p>
        </div>
        <div>
          <h4 className="text-zinc-100 font-medium">Contact</h4>
          <p className="mt-3">WhatsApp: +91 90000 00000</p>
          <p>Email: hello@zoonekashmir.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Zoon-e-Kashmir • All rights reserved
      </div>
    </footer>
  );
}

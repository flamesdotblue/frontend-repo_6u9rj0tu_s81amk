import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-pink-500 grid place-items-center text-white shadow-lg">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-800 tracking-tight">Vibe App</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#showcase" className="hover:text-slate-900 transition">Showcase</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-black transition shadow-sm">Get Started</button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 space-y-2 text-slate-700">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-slate-100">Features</a>
            <a href="#showcase" className="block px-2 py-2 rounded hover:bg-slate-100">Showcase</a>
            <a href="#pricing" className="block px-2 py-2 rounded hover:bg-slate-100">Pricing</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-black transition">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5d2gXwGkJ3qf5i5n/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-slate-200 px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Introducing a beautiful starter built with Vite + React + Tailwind
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Build delightful apps faster
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              A modern setup with elegant components, smooth animations, and a crisp design so you can focus on what matters.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition shadow">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                Live Demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=2" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=3" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              <span>Trusted by creators worldwide</span>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block" aria-hidden>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-pink-200 p-1">
              <div className="h-full w-full rounded-[22px] bg-white/70 border border-white shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

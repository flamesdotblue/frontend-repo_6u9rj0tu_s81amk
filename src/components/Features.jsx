import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Beautiful by default',
    desc: 'Thoughtful typography, balanced spacing, and tasteful color – all out of the box.'
  },
  {
    icon: Shield,
    title: 'Secure foundation',
    desc: 'Reliable, modern tooling with sensible defaults that keeps you safe and fast.'
  },
  {
    icon: Zap,
    title: 'Fast workflow',
    desc: 'Hot reloading, smart components, and a setup that gets out of your way.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A curated set of components and patterns that help you move quickly and look great.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-white grid place-items-center shadow group-hover:scale-105 transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

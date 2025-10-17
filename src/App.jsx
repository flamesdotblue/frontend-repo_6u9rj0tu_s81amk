import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />

        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple pricing</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Start free, upgrade when you need more.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="mt-2 text-slate-600">Perfect to explore.</p>
                <div className="mt-4 text-4xl font-extrabold">$0</div>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li>Basic components</li>
                  <li>Community support</li>
                  <li>Regular updates</li>
                </ul>
                <button className="mt-6 w-full px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition">Get Started</button>
              </div>

              <div className="rounded-2xl border-2 border-slate-900 bg-gradient-to-b from-white to-slate-50 p-8 shadow-md">
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="mt-2 text-slate-600">For serious builders.</p>
                <div className="mt-4 text-4xl font-extrabold">$12<span className="text-xl font-bold text-slate-500">/mo</span></div>
                <ul className="mt-6 space-y-2 text-slate-600">
                  <li>All components</li>
                  <li>Premium examples</li>
                  <li>Priority support</li>
                </ul>
                <button className="mt-6 w-full px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition">Upgrade</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

const DispatcherHeader: React.FC = () => (
  <header className="sticky top-0 z-50 w-full bg-[#0a0f1d] border-b-4 border-orange-600 shadow-2xl">
    <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Aggressive Roof icon */}
        <div className="w-12 h-12 bg-orange-600 flex items-center justify-center transform -skew-x-12">
          <svg className="w-6 h-6 text-white transform skew-x-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M3 12l9-9 9 9M4 10h16v11H4z" />
          </svg>
        </div>
        <div>
          <h1 className="text-white font-black text-2xl tracking-tighter uppercase">Apex Roofing</h1>
          <span className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase block mt-1">Industrial Protection</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-300 uppercase tracking-wider">
        <a href="#services" className="hover:text-orange-500 transition-colors">Installations</a>
        <a href="#services" className="hover:text-orange-500 transition-colors">Repairs</a>
        <a href="#contact" className="hover:text-orange-500 transition-colors">Emergency Service</a>
      </nav>

      <div className="flex items-center">
        <a href="tel:1-800-555-0199" className="hidden sm:inline-flex bg-white hover:bg-slate-200 text-[#0a0f1d] px-6 py-3 font-black text-sm uppercase tracking-[0.1em] transform -skew-x-12 ring-2 ring-white/20 ring-offset-2 ring-offset-[#0a0f1d] transition-all">
          <span className="transform skew-x-12 block">Get Estimate</span>
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative pt-32 pb-40 px-6 bg-[#0a0f1d] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80" alt="Roofing Experts" className="w-full h-full object-cover origin-center opacity-40 grayscale sepia-[0.2] hue-rotate-[200deg]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/90 to-transparent"></div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10">
      <div className="pr-4">
        <div className="inline-block bg-orange-600 text-white px-3 py-1 font-black text-xs uppercase tracking-[0.3em] mb-8 transform -skew-x-12">
          <span className="block transform skew-x-12">Certified Elite Contractors</span>
        </div>
        <h2 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter uppercase">
          Ironclad <br /><span className="text-orange-500">Protection.</span><br />No Excuses.
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
          Whether you need a full replacement or emergency storm repair, we build roofs engineered to withstand the most brutal weather conditions.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          <a href="#dispatch" className="bg-orange-600 text-white px-10 py-5 font-black text-lg uppercase tracking-widest hover:bg-orange-500 transition-colors border-l-4 border-white text-center flex items-center justify-center">
            Emergency Dispatch
          </a>
          <a href="#quote" className="bg-transparent border-2 border-slate-600 text-white px-10 py-5 font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-[#0a0f1d] transition-colors text-center flex items-center justify-center">
            Schedule Inspection
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ConversionBlock: React.FC = () => (
  <section id="dispatch" className="py-24 px-6 bg-slate-100 border-t border-slate-300 relative">
    {/* Decorative background stripes */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

    <div className="max-w-5xl mx-auto bg-white border-4 border-[#0a0f1d] p-8 sm:p-16 shadow-[20px_20px_0_0_#ea580c] relative z-10">

      <div className="mb-12 border-b-2 border-slate-200 pb-8">
        <h3 className="text-4xl font-black text-[#0a0f1d] tracking-tighter uppercase mb-2">Request Rapid Inspection</h3>
        <p className="text-slate-500 text-lg font-bold">Secure your property before damage spreads. Our attack teams are on standby.</p>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-black text-[#0a0f1d] uppercase tracking-widest">Client Name</label>
          <input type="text" className="bg-slate-100 border-2 border-slate-300 p-4 text-[#0a0f1d] font-bold focus:border-orange-600 outline-none transition-colors" required />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-black text-[#0a0f1d] uppercase tracking-widest">Direct Phone</label>
          <input type="tel" className="bg-slate-100 border-2 border-slate-300 p-4 text-[#0a0f1d] font-bold focus:border-orange-600 outline-none transition-colors" required />
        </div>
        <div className="flex flex-col gap-3 sm:col-span-2">
          <label className="text-sm font-black text-[#0a0f1d] uppercase tracking-widest">Damage Report & Address</label>
          <textarea rows={4} className="bg-slate-100 border-2 border-slate-300 p-4 text-[#0a0f1d] font-bold focus:border-orange-600 outline-none transition-colors resize-y" required></textarea>
        </div>
        <div className="sm:col-span-2 mt-6">
          <button className="w-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-black text-xl uppercase tracking-[0.2em] py-6 transition-colors border-t-4 border-orange-600 transform hover:scale-[1.01]">
            Deploy Assessment Team
          </button>
        </div>
      </form>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col font-sans">
      <DispatcherHeader />
      <main className="flex-1">
        <Hero />

        {/* Core Capabilities */}
        <section id="services" className="py-24 px-6 bg-[#0a0f1d] border-t-8 border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-slate-800 pb-10">
              <div>
                <h3 className="text-5xl font-black text-white tracking-tighter uppercase mb-4">Tactical Services</h3>
                <p className="text-slate-400 max-w-xl text-lg font-medium">We do not cut corners. We deploy heavy-duty materials designed for permanent structural defense.</p>
              </div>
              <div className="text-orange-500 text-6xl font-black tracking-tighter opacity-20 hidden md:block">010</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Full Replacements', desc: 'Precision tear-offs and complete architectural shingle or metal system installations.' },
                { title: 'Storm Damage', desc: 'Rapid-response tarping and structural patching following severe weather events.' },
                { title: 'Commercial Flat', desc: 'TPO, EPDM, and modified bitumen solutions specifically for industrial complexes.' }
              ].map((service, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-10 hover:border-orange-600 transition-colors duration-300">
                  <div className="text-orange-500 mb-8 w-12 h-12 border-2 border-orange-600/30 flex items-center justify-center transform -skew-x-12">
                    <span className="font-black transform skew-x-12">{i + 1}</span>
                  </div>
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{service.title}</h4>
                  <p className="text-slate-400 text-base font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConversionBlock />
      </main>

      <footer className="py-12 px-6 bg-[#030509] text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-16 h-1 bg-orange-600 mb-8"></div>
          <h5 className="text-slate-300 font-black text-2xl tracking-tighter uppercase mb-2">Apex Roofing</h5>
          <p className="text-slate-600 font-bold mb-8">INDUSTRIAL GRADE PROTECTION</p>
          <div className="text-xs font-black text-slate-700 uppercase tracking-widest">© {new Date().getFullYear()} APEX ROOFING CONTRACTORS. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;

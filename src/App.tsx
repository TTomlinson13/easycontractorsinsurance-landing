function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-amber-600 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>🔨 Florida Contractors Insurance Specialists</span>
          <a href="tel:800-616-1418" className="hover:text-amber-100">📞 800-616-1418</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Easy<span className="text-amber-600">Contractors</span>Insurance</h1>
            <p className="text-xs text-slate-500">Florida Contractor Coverage Made Simple</p>
          </div>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition">
            Get a Quote →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-amber-900 py-16 md:py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold mb-2 uppercase">Florida Contractors Insurance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Insurance for Every Trade</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            From general contractors to specialty trades — we find the best coverage at the best price. 
            General liability, workers comp, bonds, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">⚡</span>
              Quick Quote
              <span className="block text-xs font-normal opacity-75">2 mins • Auto-fill</span>
            </a>
            <a href="https://hoinsurance.wufoo.com/forms/mny6lj30o6rvjf/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-amber-50 text-amber-900 px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📝</span>
              Full Quote Form
              <span className="block text-xs font-normal opacity-60">Detailed application</span>
            </a>
            <a href="tel:800-616-1418" className="bg-amber-600 hover:bg-amber-500 text-white px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📞</span>
              Call Us
              <span className="block text-xs font-normal opacity-75">800-616-1418</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trades */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Trades We Insure</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['General Contractors', 'Roofers', 'Electricians', 'Plumbers', 'HVAC', 'Painters', 'Landscapers', 'Concrete/Masonry', 'Carpenters', 'Flooring', 'Drywall', 'Pool Contractors', 'Fencing', 'Pressure Washing', 'Handyman', 'Demolition'].map((trade) => (
              <div key={trade} className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 transition">
                <p className="font-semibold text-slate-700">{trade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Coverage Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="font-bold text-xl text-amber-400 mb-2">General Liability</h4>
              <p className="text-slate-300">Protection for property damage and bodily injury claims on job sites.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">👷</div>
              <h4 className="font-bold text-xl text-amber-400 mb-2">Workers Comp</h4>
              <p className="text-slate-300">Required coverage for employees. Competitive rates even for high-risk trades.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="font-bold text-xl text-amber-400 mb-2">Surety Bonds</h4>
              <p className="text-slate-300">License bonds, permit bonds, payment bonds — fast online purchasing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Get Your Contractor Quote Today</h3>
          <p className="text-amber-900 text-lg mb-8">Fast quotes, same-day coverage available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-slate-800 transition">
              Quick Quote (2 mins) →
            </a>
            <a href="https://hoinsurance.wufoo.com/forms/mny6lj30o6rvjf/" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-700 font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-amber-50 transition">
              Detailed Application
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <h4 className="text-white font-bold text-xl mb-2">EasyContractorsInsurance.com</h4>
        <p className="text-sm">A Tomlinson & Co Agency • Florida Licensed Since 1987</p>
        <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

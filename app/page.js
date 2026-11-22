import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-teal-50 text-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-teal-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-teal-600 font-bold text-xl tracking-tighter">PuzzlePaws</span>
              <span className="text-orange-600 font-bold text-xl tracking-tighter">Tower</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-teal-600">
              <a href="#hero" className="hover:text-teal-900 transition">Home</a>
              <a href="#levels" className="hover:text-teal-900 transition">Levels</a>
              <a href="#lifestyle" className="hover:text-teal-900 transition">Lifestyle</a>
              <a href="#order" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Order</a>
            </div>
            <button className="md:hidden text-teal-600">☰</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tower.webp"
            alt="PuzzlePaws Tower"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/35 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold tracking-widest rounded-full uppercase mb-4 animate-bounce">
            New Arrival
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Challenge your dog&apos;s mind.
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-xl mx-auto">
            The PuzzlePaws Tower is an interactive treat-dispensing puzzle that keeps your pup busy, sharp, and happy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#order" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-200">
              Shop Tower
            </a>
            <a href="#levels" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              View Levels
            </a>
          </div>
        </div>
      </section>

      <section id="levels" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-3">Three difficulty levels</h2>
            <p className="text-teal-600">Easy, medium, hard — grows with your dog.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-50 p-8 rounded-2xl border border-teal-100 hover:border-orange-300 transition group">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl border-2 ${
                  n === 1 ? 'border-teal-400 text-teal-600 bg-teal-50' :
                  n === 2 ? 'border-orange-400 text-orange-600 bg-orange-50' :
                  'border-yellow-400 text-yellow-600 bg-yellow-50'
                }`}>
                  {n === 1 ? 'Easy' : n === 2 ? 'Medium' : 'Hard'}
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-900">
                  {n === 1 ? 'Pup Start' : n === 2 ? 'Trainer' : 'Master'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {n === 1
                    ? 'Wide openings for treats to roll out freely. Great for beginners.'
                    : n === 2
                    ? 'Balanced challenge that makes your dog work for every treat.'
                    : 'Narrow slots and twists. For the smartest puzzle-solvers.'}
                </p>
                <div className="w-full h-1 bg-teal-100 rounded-full overflow-hidden group-hover:bg-orange-100 transition">
                  <div className={`h-full rounded-full ${
                    n === 1 ? 'w-1/3 bg-teal-500' :
                    n === 2 ? 'w-2/3 bg-orange-500' :
                    'w-full bg-yellow-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifestyle" className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy dogs, happy homes</h2>
              <p className="text-teal-200 text-lg mb-6">
                Watch tails wag as your dog figures out the tower. Less boredom, fewer chewed shoes, more treat time.
              </p>
              <ul className="space-y-3 text-teal-100">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✔</span> Mentally stimulating
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✔</span> Slows down fast eaters
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✔</span> Easy to clean
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/lifestyle.webp"
                alt="Dog playing with puzzle tower"
                className="rounded-2xl shadow-2xl border-4 border-teal-500/30 object-cover"
                width={600}
                height={400}
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <span className="text-yellow-100 text-xl">★</span>
                <span className="font-bold">4.9 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="closeup" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/closeup.webp"
              alt="Close-up of treat slots"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover rounded-2xl shadow-xl border border-teal-100"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur px-8 py-6 rounded-2xl shadow-xl border border-teal-200 text-center max-w-md">
                <h3 className="text-2xl font-bold text-teal-900 mb-2">Precision treat slots</h3>
                <p className="text-teal-600">Engineered openings release treats at just the right pace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-orange-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Get your PuzzlePaws Tower</h2>
          <p className="text-orange-700 mb-8">Free shipping. 30-day happiness guarantee.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">$49</div>
              <div className="text-sm text-orange-600">Single Tower</div>
            </div>
            <div className="bg-orange-500 p-6 rounded-2xl shadow-lg transform scale-105 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Best value</span>
              <div className="text-3xl font-bold text-white mb-2">$89</div>
              <div className="text-sm text-orange-100">Two Towers + Free Bowl</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">$129</div>
              <div className="text-sm text-orange-600">Family Pack (3 Towers)</div>
            </div>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-teal-200 bg-white text-teal-900 focus:ring-2 focus:ring-teal-400 outline-none w-full sm:w-64"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200"
            >
              Get notified
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-teal-400 font-bold text-xl tracking-tighter">PuzzlePaws</span>
            <span className="text-orange-400 font-bold text-xl tracking-tighter">Tower</span>
          </div>
          <p className="text-teal-200 text-sm">PuzzlePaws Tower — interactive treat puzzles for dogs.</p>
          <div className="flex gap-4 text-teal-300">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">TikTok</a>
            <a href="#" className="hover:text-white transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

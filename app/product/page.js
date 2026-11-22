"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: "starter-tower",
    name: "Starter Tower",
    price: 49,
    image: "/images/tower.webp",
    description:
      "Best for first-time puzzle pups. Wide openings, easy treat release.",
    level: "Easy",
  },
  {
    id: "add-on-level-pack",
    name: "Add-on Level Pack",
    price: 25,
    image: "/images/levels.webp",
    description:
      "Swap-in inserts to increase difficulty as your dog gets smarter.",
    level: "Medium/Hard",
  },
  {
    id: "treat-refill-pack",
    name: "Treat Refill Pack",
    price: 18,
    image: "/images/closeup.webp",
    description: "Tasty, puzzle-sized treats made to fit every tower slot.",
    level: "All levels",
  },
  {
    id: "mega-bundle",
    name: "Mega Bundle",
    price: 89,
    image: "/images/tower.webp",
    description: "Tower + Level Pack + Refill Pack — everything in one box.",
    level: "All levels",
  },
];

const features = [
  "Mentally stimulating — keeps boredom away",
  "Slows down fast eaters for better digestion",
  "Three difficulty levels that grow with your dog",
  "Easy to clean, dishwasher-safe parts",
];

export default function ProductPage() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setOpen(true);
  };

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
              <a href="/" className="hover:text-teal-900 transition">Home</a>
              <a href="/product" className="text-orange-600 font-semibold">Product</a>
              <a href="#" className="hover:text-teal-900 transition">Order</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-teal-600">{cart.length}</span>
              <button
                onClick={() => setOpen(true)}
                className="bg-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-teal-200 mb-12">
            <Image
              src="/images/tower.webp"
              alt="PuzzlePaws Tower product"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-teal-900/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                in stock
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-teal-200 shadow-sm">
                <Image
                  src="/images/levels.webp"
                  alt="Difficulty levels"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold">
                  Levels Gallery
                </div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-teal-200 shadow-sm">
                <Image
                  src="/images/closeup.webp"
                  alt="Close-up treat slots"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold">
                  Close-up Detail
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4 tracking-tight">
                PuzzlePaws Tower
              </h1>
              <p className="text-teal-600 text-lg mb-6">
                Interactive treat-dispensing puzzle that challenges your dog&apos;s mind.
              </p>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">★</span>
                    <p className="text-slate-700">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">
              Choose your product
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-6 rounded-2xl border border-teal-100 hover:border-orange-300 hover:shadow-xl transition flex flex-col"
                >
                  <div className="h-48 rounded-xl overflow-hidden border border-teal-100 mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-1">{p.name}</h3>
                  <span className="text-xs font-medium text-teal-500 uppercase tracking-wider mb-3 block">
                    {p.level}
                  </span>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{p.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">₹{p.price}</span>
                    <button
                      onClick={() => addToCart(p)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition shadow-md shadow-orange-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="bg-white w-full max-w-md p-6 rounded-t-2xl shadow-2xl border-b border-t border-teal-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-teal-900">Your Cart</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-teal-500 hover:text-teal-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-slate-500 text-center py-4">Cart is empty</p>
              ) : (
                cart.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-teal-100"
                      width={64}
                      height={64}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-semibold text-teal-900">{item.name}</span>
                        <span className="text-orange-600 font-semibold">₹{item.price}</span>
                      </div>
                      <p className="text-xs text-slate-500">{item.level}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-teal-100 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Total</span>
                <span className="font-bold text-teal-900">
                  ₹{cart.reduce((sum, i) => sum + i.price, 0)}
                </span>
              </div>
              <button
                onClick={() => {
                  setCart([]);
                  setOpen(false);
                }}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

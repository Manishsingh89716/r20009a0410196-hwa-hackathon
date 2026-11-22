"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "starter-tower",
    name: "Starter Tower",
    price: 49,
    image: "/images/tower.webp",
    level: "Easy",
  },
  {
    id: "add-on-level-pack",
    name: "Add-on Level Pack",
    price: 25,
    image: "/images/levels.webp",
    level: "Medium/Hard",
  },
  {
    id: "treat-refill-pack",
    name: "Treat Refill Pack",
    price: 18,
    image: "/images/closeup.webp",
    level: "All levels",
  },
  {
    id: "mega-bundle",
    name: "Mega Bundle",
    price: 89,
    image: "/images/tower.webp",
    level: "All levels",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("puzzlepaws_cart");
      setCart(saved ? JSON.parse(saved) : []);
    } catch {
      setCart([]);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("puzzlepaws_cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const productById = (id) => PRODUCTS.find((p) => p.id === id);

  const addOne = (id) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing) {
        return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c));
      }
      const p = productById(id);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const removeOne = (id) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (!existing) return prev;
      if (existing.qty > 1) {
        return prev.map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c));
      }
      return prev.filter((c) => c.id !== id);
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-teal-50 text-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-teal-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-teal-600 font-bold text-xl tracking-tighter">PuzzlePaws</span>
              <span className="text-orange-600 font-bold text-xl tracking-tighter">Tower</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-teal-600">
              <Link href="/" className="hover:text-teal-900 transition">Home</Link>
              <Link href="/product" className="hover:text-teal-900 transition">Product</Link>
              <Link href="/cart" className="text-orange-600 font-semibold">Cart</Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-teal-600">{totalItems}</span>
              <Link
                href="/cart"
                className="bg-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-teal-600 font-bold text-lg">Your Cart</span>
            <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
              {totalItems} item{totalItems !== 1 ? "s" : ""}
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-teal-900 mb-2">Cart is empty</h2>
              <p className="text-teal-600 mb-6">Add some treats and toys to get started.</p>
              <Link
                href="/product"
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200"
              >
                Shop Products
              </Link>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-12 gap-8 mb-12">
                <div className="md:col-span-8 space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm flex flex-col md:flex-row md:items-center gap-4"
                    >
                      <div className="h-24 w-24 md:h-24 md:w-24 rounded-xl overflow-hidden border border-teal-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-bold text-teal-900">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-teal-400 hover:text-teal-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-sm text-slate-500 mb-3">{item.level}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 border border-teal-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => removeOne(item.id)}
                              className="px-3 py-2 text-teal-600 hover:bg-teal-50"
                            >
                              −
                            </button>
                            <span className="px-3 py-1 text-sm font-semibold border-x border-teal-100">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => addOne(item.id)}
                              className="px-3 py-2 text-teal-600 hover:bg-teal-50"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-lg font-bold text-orange-600">
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:col-span-4 bg-white p-8 rounded-2xl border border-teal-100 shadow-sm sticky top-24">
                  <h3 className="text-lg font-bold text-teal-900 mb-6">Order Summary</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping</span>
                      <span className="text-teal-600 font-medium">Free</span>
                    </div>
                    <div className="border-t border-teal-100 pt-3 flex justify-between">
                      <span className="font-bold text-teal-900">Total</span>
                      <span className="font-bold text-teal-900 text-lg">₹{total}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      window.location.href = "/checkout";
                    }}
                    className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition shadow-lg shadow-teal-200"
                  >
                    Proceed to Checkout
                  </button>
                  <p className="mt-4 text-xs text-teal-500 text-center">
                    Secure checkout. No payment required for demo.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

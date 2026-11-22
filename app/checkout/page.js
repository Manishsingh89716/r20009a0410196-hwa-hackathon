"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  { id: "starter-tower", name: "Starter Tower", price: 49, image: "/images/tower.webp" },
  { id: "add-on-level-pack", name: "Add-on Level Pack", price: 25, image: "/images/levels.webp" },
  { id: "treat-refill-pack", name: "Treat Refill Pack", price: 18, image: "/images/closeup.webp" },
  { id: "mega-bundle", name: "Mega Bundle", price: 89, image: "/images/tower.webp" },
];

const productById = (id) => PRODUCTS.find((p) => p.id === id);

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("puzzlepaws_cart") || "[]"));
    } catch {
      setCart([]);
    }
    setLoaded(true);
  }, []);

  const total = cart.reduce((sum, c) => sum + c.price * (c.qty || 1), 0);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email";
    }
    if (!formData.address.trim()) errors.address = "Address is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (cart.length === 0) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name: formData.name, email: formData.email, address: formData.address },
          items: cart.map((c) => ({ productId: c.id, name: c.name, price: c.price, qty: c.qty || 1 })),
          total,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        localStorage.removeItem("puzzlepaws_cart");
        setCart([]);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (!loaded) return null;

  if (status === "success") {
    return (
      <div className="min-h-screen bg-teal-50 text-slate-900">
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-teal-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-teal-600 font-bold text-xl tracking-tighter">PuzzlePaws</span>
              <span className="text-orange-600 font-bold text-xl tracking-tighter">Tower</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-teal-600">
              <Link href="/" className="hover:text-teal-900 transition">Home</Link>
              <Link href="/product" className="hover:text-teal-900 transition">Product</Link>
              <Link href="/cart" className="hover:text-teal-900 transition">Cart</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20 pb-20">
          <div className="max-w-md mx-auto px-4 text-center py-20">
            <div className="text-teal-600 text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-teal-900 mb-3">Order Placed!</h1>
            <p className="text-teal-600 mb-8">Thank you, {formData.name}. Your order is confirmed.</p>
            <Link
              href="/"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-teal-50 text-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-teal-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-teal-600 font-bold text-xl tracking-tighter">PuzzlePaws</span>
            <span className="text-orange-600 font-bold text-xl tracking-tighter">Tower</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-teal-600">
            <Link href="/" className="hover:text-teal-900 transition">Home</Link>
            <Link href="/product" className="hover:text-teal-900 transition">Product</Link>
            <Link href="/cart" className="hover:text-teal-900 transition">Cart</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-20">
        {cart.length === 0 ? (
          <div className="max-w-md mx-auto px-4 text-center py-20">
            <h2 className="text-2xl font-bold text-teal-900 mb-2">Cart is empty</h2>
            <p className="text-teal-600 mb-6">Add items before checking out.</p>
            <Link
              href="/product"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Shop Products
            </Link>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-teal-900">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-teal-100 shadow-sm">
                  <div>
                    <label className="block text-sm font-medium text-teal-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className={`w-full px-4 py-2 rounded-lg border ${formErrors.name ? "border-red-500" : "border-teal-200"} focus:ring-2 focus:ring-teal-400 outline-none`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className={`w-full px-4 py-2 rounded-lg border ${formErrors.email ? "border-red-500" : "border-teal-200"} focus:ring-2 focus:ring-teal-400 outline-none`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-700 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="House No, Street, City, Pincode"
                      rows={3}
                      className={`w-full px-4 py-2 rounded-lg border ${formErrors.address ? "border-red-500" : "border-teal-200"} focus:ring-2 focus:ring-teal-400 outline-none`}
                    />
                    {formErrors.address && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.address}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition shadow-lg shadow-teal-200 disabled:opacity-60"
                  >
                    {submitting ? "Placing Order..." : "Place Order"}
                  </button>
                </form>
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-red-700 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
              <div className="bg-white p-8 rounded-2xl border border-teal-100 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-teal-900 mb-6">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 items-start">
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
                          <span className="text-orange-600 font-semibold">
                            ₹{item.price * (item.qty || 1)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">Qty: {item.qty || 1}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-teal-100 pt-4 flex justify-between">
                    <span className="font-bold text-teal-900">Total</span>
                    <span className="font-bold text-teal-900 text-lg">₹{total}</span>
                  </div>
                </div>
                <p className="text-xs text-teal-500 text-center">
                  No payment required for demo. Order will be recorded.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

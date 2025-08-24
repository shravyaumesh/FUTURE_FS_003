"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeClient({ products, posts }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-p py-14 sm:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Move Bold. <span className="text-brand-600">Move Better.</span>
            </motion.h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              An AI-driven rebrand with fresh palette, motion-first UI, and content powered by Firebase or local JSON.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/products"
                className="px-5 py-3 rounded-xl bg-brand-600 text-white"
              >
                Shop Collection
              </Link>
              <Link
                href="/blog"
                className="px-5 py-3 rounded-xl border"
              >
                Read the Blog
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <img
              src="/brand/logo.svg"
              alt="PACE"
              className="mx-auto h-16 w-auto"
            />
            <p className="mt-6 text-center text-gray-600">
              AI-generated logo & palette
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container-p py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="card p-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-700">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <p className="mt-2 font-semibold">${p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blog + Contact Section */}
      <section className="container-p py-10" id="contact">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog */}
          <div>
            <h2 className="text-2xl font-bold mb-2">From the Blog</h2>
            <div className="grid gap-4">
              {posts.map((b) => (
                <article key={b.slug} className="card p-4">
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="font-semibold mt-3">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold">Contact</h2>
            <form className="mt-4 grid gap-3">
              <input
                className="border rounded-xl px-3 py-2"
                placeholder="Name"
              />
              <input
                className="border rounded-xl px-3 py-2"
                placeholder="Email"
              />
              <textarea
                className="border rounded-xl px-3 py-2"
                placeholder="Message"
                rows={4}
              />
              <button
                type="button"
                className="rounded-xl px-4 py-2 bg-brand-600 text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

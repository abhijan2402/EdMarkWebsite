"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Herbal Nutrition",
  "Fitness Supplements",
  "Wellness Foods",
];

const products = [
  {
    id: 1,
    name: "Herbal Protein Blend",
    price: 29.99,
    category: "Fitness Supplements",
    image: "/im.jpg",
  },
  {
    id: 2,
    name: "Organic Immunity Boost",
    price: 19.99,
    category: "Herbal Nutrition",
    image: "/hero.jpg",
  },
  {
    id: 3,
    name: "Daily Wellness Mix",
    price: 14.99,
    category: "Wellness Foods",
    image: "/im.jpg",
  },
  {
    id: 4,
    name: "Plant-Based Energy Powder",
    price: 24.99,
    category: "Fitness Supplements",
    image: "/hero.jpg",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-white">
      {/* Header + Filters */}
      <section className="bg-linear-to-r from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-semibold text-black">Our Products</h1>
            <p className="mt-2 text-gray-600 max-w-md">
              Explore our clean, effective nutrition products designed for
              everyday wellness.
            </p>
          </div>

          {/* Search + Category */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 px-4 py-3 rounded-lg border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-48 px-4 py-3 rounded-lg border border-gray-200 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 py-20">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="border rounded-2xl bg-white p-4 hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 font-semibold text-black">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-green-600 font-semibold">
                    ${product.price.toFixed(2)}
                  </p>

                  <button className="mt-4 w-full py-2.5 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition">
                    Call for Enquiry
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

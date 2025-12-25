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
    name: "Classic Cafe Black",
    price: 18,
    image: "/p1.jfif",
    desc: "Starting Your Day with Vitality - Health Fit Classic Cafe Black.",
    category: "Fitness Supplements",
  },
  {
    id: 2,
    name: "EDLIFE Chlorophyllin",
    price: 75,
    image: "/p2.jfif",
    desc: "Introducing EDLIFE Chlorophyllin 240mg Capsule.",
    category: "Fitness Supplements",
  },
  {
    id: 3,
    name: "Aleo vera gel",
    price: 699,
    image: "/p3.jfif",
    desc: "Aloe 10,000 & Probiotics Veg Capsules.",
    category: "Herbal Nutrition",
  },
  {
    id: 4,
    name: "Ensure",
    price: 1099,
    image: "/p4.jpeg",
    desc: "Health Supplement  For Adults.",
    category: "Wellness Foods",
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
                      className="object-fit"
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

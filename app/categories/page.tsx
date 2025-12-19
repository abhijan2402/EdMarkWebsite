"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CategoryModal from "../components/CategoryModal";

export default function ProductsPage() {
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

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [openModal, setOpenModal] = useState(false);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-linear-to-r from-green-50 to-white py-16 mb-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
              Get Products by Category
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Explore our curated range of health, wellness, and nutrition
              products. Browse by category to quickly find solutions designed
              for your daily lifestyle, long-term wellbeing, and performance
              needs.
            </p>
          </div>

          {/* Search + Category */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => setOpenModal(true)}
              className="px-6 py-2.5 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* ACTIVE CATEGORY */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
          {selectedCategory}
        </span>
      </div>

      {/* PRODUCT GRID */}
      <section className="pb-12">
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
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

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

      {/* CATEGORY MODAL */}
      <CategoryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSelect={setSelectedCategory}
        active={selectedCategory}
      />
    </main>
  );
}

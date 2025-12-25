"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CategoryModal from "../components/CategoryModal";

export default function ProductsPage() {
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
          <div className="max-w-5xl">
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
                      className="object-fit"
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

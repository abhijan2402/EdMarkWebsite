"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Breadcrumb from "@/app/components/Breadcrumb";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  benefits: string[];
  composition: string[];
  usage: string;
}

const product: Product = {
  id: 1,
  name: "Organic Green Tea",
  price: 24.99,
  category: "Herbal Nutrition",
  images: ["/hero.jpg", "/im.jpg", "/hero.jpg"],
  description:
    "Organic Green Tea is made from premium hand-picked leaves, carefully processed to retain antioxidants and natural goodness.",
  benefits: [
    "Boosts metabolism",
    "Rich in antioxidants",
    "Supports weight management",
    "Improves focus and energy",
  ],
  composition: [
    "100% Organic Green Tea Leaves",
    "No additives or preservatives",
  ],
  usage:
    "Steep 1 teaspoon in hot water for 3–5 minutes. Consume 1–2 cups daily.",
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [qty, setQty] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const zoomLevel = 200;

  const [lensX, setLensX] = useState(0);
  const [lensY, setLensY] = useState(0);
  const [bgX, setBgX] = useState(0);
  const [bgY, setBgY] = useState(0);

  const zoomScale = 2.5; // 2.5x zoom
const imgRef = useRef<HTMLImageElement | null>(null);

const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });


const zoom = 2.5;
const lensSize = 120;

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  x = Math.max(lensSize / 2, Math.min(x, rect.width - lensSize / 2));
  y = Math.max(lensSize / 2, Math.min(y, rect.height - lensSize / 2));

  const bgX = (x / rect.width) * imgSize.width * zoom;
  const bgY = (y / rect.height) * imgSize.height * zoom;

  setLensPos({ x, y });
  setBgPos({ x: bgX, y: bgY });
  setShowLens(true);
};



  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },

            { label: product.name },
          ]}
        />
      </section>
      {/* ================= PRODUCT TOP ================= */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* IMAGE GALLERY */}
        <div className="flex flex-col gap-4">
          {/* Main Image with Lens Zoom */}
          <div
            className="relative w-full h-[420px] border rounded-xl overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowLens(false)}
            onClick={() => {
              setModalIndex(product.images.indexOf(selectedImage));
              setIsModalOpen(true);
            }}
          >
            {/* Base Image */}
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              ref={imgRef}
              onLoadingComplete={(img) => {
                setImgSize({
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              }}
              className="object-contain"
            />

            {/* Lens */}
            {showLens && (
              <div
                className="absolute pointer-events-none rounded-full border-2 border-green-500 bg-white/30"
                style={{
                  width: lensSize,
                  height: lensSize,
                  left: lensPos.x - lensSize / 2,
                  top: lensPos.y - lensSize / 2,
                }}
              />
            )}

            {showLens && (
              <div className="hidden lg:block absolute top-0 right-[-420px] w-[400px] h-[400px] border rounded-xl overflow-hidden bg-white shadow-xl">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundSize: `${imgSize.width * zoom}px ${
                      imgSize.height * zoom
                    }px`,
                    backgroundPosition: `-${bgPos.x - 200}px -${
                      bgPos.y - 200
                    }px`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row gap-3 mb-6">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 border rounded-lg cursor-pointer ${
                  selectedImage === img ? "border-green-600" : "border-gray-200"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div >
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600">(124 Reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-green-600 mt-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Size */}
          <div className="mt-6 ">
            <p className="font-medium mb-2 text-gray-600">Size</p>
            <div className="flex gap-3 ">
              {["100g", "250g", "500g"].map((size) => (
                <button
                  key={size}
                  className=" px-4 py-2 text-gray-600 border border-gray-400 rounded-lg rounded-lg hover:border-green-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-6 ">
            <div className="flex items-center  text-gray-600 border border-gray-400 rounded-lg">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2"
              >
                −
              </button>
              <span className="px-4 text-gray-600 ">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
            <button className="flex-1 border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {/* Tabs */}
        <div className="flex gap-8 border-b mb-6">
          {["description", "additional", "reviews", "shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600"
              }`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="space-y-4 text-gray-600">
            <p>{product.description}</p>
            <ul className="list-disc list-inside">
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "additional" && (
          <table className="w-full border text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">Composition</td>
                <td className="p-3 text-gray-600">
                  {product.composition.join(", ")}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">Usage</td>
                <td className="p-3 text-gray-600">{product.usage}</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-600">Category</td>
                <td className="p-3 text-gray-600">{product.category}</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "reviews" && (
          <p className="text-gray-600">Customer reviews coming soon.</p>
        )}

        {activeTab === "shipping" && (
          <p className="text-gray-600">
            Free shipping across the USA. Easy 7-day returns.
          </p>
        )}
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>

            <Image
              src={product.images[modalIndex]}
              alt="zoom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

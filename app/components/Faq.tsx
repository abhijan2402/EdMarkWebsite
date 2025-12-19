"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Are your products safe for daily consumption?",
    a: "Yes, our products are formulated using safe, natural ingredients and are suitable for daily use.",
  },
  {
    q: "Who can consume these products?",
    a: "Our products are designed for adults seeking better health and fitness. Always consult a doctor if unsure.",
  },
  {
    q: "Do you use artificial additives?",
    a: "No, we avoid artificial colors, preservatives, and harmful chemicals.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are typically delivered within 3–7 business days.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-black font-medium"
              >
                {item.q}
                <FaChevronDown
                  className={`transition-transform ${
                    open === i ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-4 text-sm text-gray-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

const categories = [
  {
    name: "Baby Care",
    columns: [
      {
        title: "Baby Care",
        items: [
          "Baby Diaper",
          "Blood Test",
          "Temperature Reader",
          "Thermometer",
        ],
      },
      {
        title: "Home Care",
        items: [
          "Cleaning Accessories",
          "Detergents & Liquids",
          "Fresheners",
          "Washing Powder",
        ],
      },
      {
        title: "Beauty Care",
        items: [
          "Hair and scalp",
          "Nail and cuticle",
          "Oral hygiene products",
          "Skin Beauty care",
        ],
      },
    ],
  },
  {
    name: "Health Care",
    columns: [
      {
        title: "Health Care",
        items: ["Capsules", "First Aid Kit", "Health Care Combo", "Medicines"],
      },
      {
        title: "Skin Care",
        items: ["Equipments", "Face Masks", "Microscope", "Protective Covers"],
      },
      {
        title: "Personal Care",
        items: [
          "Hand Gloves",
          "Oral care",
          "Safety Guard",
          "Skin Personal Care",
        ],
      },
    ],
  },
];

export default function CategoryMegaFilter() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="flex border rounded-xl overflow-hidden bg-white shadow-sm">
        {/* LEFT CATEGORY LIST */}
        <div className="w-64 border-r">
          <div className="px-5 py-4 font-semibold text-teal-600 flex items-center justify-between">
            Our Store <BiChevronRight size={16} />
          </div>

          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onMouseEnter={() => setActive(i)}
              className={`w-full text-left px-5 py-3 flex justify-between items-center
              hover:bg-gray-50 ${
                active === i ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              {cat.name}
              <BsChevronRight size={14} />
            </button>
          ))}
        </div>

        {/* RIGHT MEGA PANEL */}
        <div className="flex-1 p-8">
          {active !== null && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories[active].columns.map((col) => (
                <div key={col.title}>
                  <h4 className="font-semibold text-black mb-3">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 hover:text-green-600 cursor-pointer transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

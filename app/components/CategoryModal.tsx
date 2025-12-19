"use client";

import { CgCross } from "react-icons/cg";
import { FaCross } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";


const categories = [
  "All Products",
  "Fitness Supplements",
  "Herbal Nutrition",
  "Wellness Foods",
];

export default function CategoryModal({
  open,
  onClose,
  onSelect,
  active,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (cat: string) => void;
  active: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <MdOutlineCancel size={24}/>
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center text-black">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onSelect(cat);
                onClose();
              }}
              className={`p-4 rounded-xl border text-center font-medium text-gray-600 transition
              ${
                active === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "hover:border-green-600 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

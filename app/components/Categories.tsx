import {
  FaSeedling,
  FaDumbbell,
  FaHeartbeat,
  FaLeaf,
  FaAppleAlt,
  FaFireAlt,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaSeedling />,
    title: "Herbal Nutrition",
    cta: "Explore",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Supplements",
    cta: "Shop Now",
  },
  {
    icon: <FaHeartbeat />,
    title: "Wellness Foods",
    cta: "View Range",
  },
  {
    icon: <FaLeaf />,
    title: "Ayurvedic Products",
    cta: "Discover",
  },
  {
    icon: <FaAppleAlt />,
    title: "Daily Nutrition",
    cta: "Browse",
  },
  {
    icon: <FaFireAlt />,
    title: "Weight Management",
    cta: "See Options",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-black">Our Categories</h2>
          <p className="mt-3 text-gray-600">
            Clean, effective nutrition designed to support every health goal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, i) => (
            <div
              key={i}
              className="group p-8 border border-gray-100 rounded-2xl text-center bg-green-50
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white text-green-600 text-3xl mb-5 group-hover:bg-green-600 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-black">{item.title}</h3>

              {/* CTA */}
              <button className="mt-4 text-sm font-medium text-green-600 hover:text-green-700 transition">
                {item.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaLeaf, FaFlask, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "100% Natural Ingredients",
    desc: "Carefully sourced natural ingredients with no harmful additives.",
  },
  {
    icon: <FaFlask />,
    title: "Scientifically Tested",
    desc: "Formulated with research-backed nutrition standards.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality & Safety Assured",
    desc: "Manufactured under strict quality and safety guidelines.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Trusted by Customers",
    desc: "Loved and trusted by health-conscious individuals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-black">Why Choose Us</h2>
          <p className="mt-3 text-gray-600">
            We focus on purity, performance, and your long-term wellness.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-8 border border-gray-100 rounded-2xl text-center
              hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full
                bg-green-50 text-green-600 text-3xl mb-5"
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

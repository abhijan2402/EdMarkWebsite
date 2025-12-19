import Image from "next/image";
import { FaLeaf, FaFlask, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            About HealthFit
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HealthFit is built on the belief that true wellness begins with
            clean, transparent, and responsibly crafted nutrition.
          </p>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-16 items-center">
          {/* Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold text-black">
                Our Mission & Philosophy
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                At HealthFit, our mission is to support healthier lifestyles
                through nutrition that is safe, effective, and grounded in
                science. We focus on long-term wellness rather than quick fixes.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Every formulation is designed with care, ensuring balance,
                purity, and consistency. We avoid unnecessary additives and
                prioritize ingredients that truly add value.
              </p>
              {/* SOP bullets */}
              <ul className="mt-8 space-y-4">
                {[
                  "Ingredient sourcing from trusted suppliers",
                  "Strict quality and safety checks",
                  "Batch-tested manufacturing process",
                  "Clear labeling and full transparency",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/hero.jpg" // place image in /public
                alt="HealthFit mission and philosophy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-8 border rounded-2xl text-center bg-gray-100 hover:shadow-md transition">
              <FaLeaf className="text-green-600 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-black">Natural</h4>
              <p className="mt-3 text-sm text-gray-600">
                Clean ingredients with minimal processing.
              </p>
            </div>

            <div className="p-8 border rounded-2xl text-center bg-gray-100 hover:shadow-md transition">
              <FaFlask className="text-green-600 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-black">Science-Driven</h4>
              <p className="mt-3 text-sm text-gray-600">
                Formulations backed by research and testing.
              </p>
            </div>

            <div className="p-8 border rounded-2xl text-center bg-gray-100 hover:shadow-md transition">
              <FaShieldAlt className="text-green-600 text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-black">Trust & Safety</h4>
              <p className="mt-3 text-sm text-gray-600">
                Quality assurance at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOP / Process Section */}
      <section className="bg-gray-50 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">
            Our Quality Process
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sourcing to packaging, our processes are designed to maintain
            consistency, purity, and safety in every product.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Sourcing",
                desc: "Carefully selected raw materials from certified and reliable suppliers.",
              },
              {
                title: "Testing",
                desc: "Quality checks and formulation validation before production.",
              },
              {
                title: "Packaging",
                desc: "Secure, hygienic, and eco-conscious packaging standards.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border hover:shadow-md transition"
              >
                <h4 className="font-semibold text-black">{step.title}</h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

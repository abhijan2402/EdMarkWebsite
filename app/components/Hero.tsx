import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            <span className="text-gray-600">Natural Nutrition for a </span>
            <span className="text-green-600">Healthier Life</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Premium health & fitness edible products crafted to support your
            active lifestyle with purity and performance.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <button className="px-7 py-3 bg-green-600 text-white rounded-xl text-base font-medium hover:bg-green-700 transition-all duration-300">
              Explore Products
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-65 sm:h-80 md:h-105 rounded-2xl overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Health and fitness nutrition products"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

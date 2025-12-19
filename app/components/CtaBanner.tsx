export default function CtaBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Start Your Health Journey Today
        </h2>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          Discover clean, effective nutrition designed to support your wellness
          goals—naturally.
        </p>
        <div className="mt-8">
          <button
            className="px-8 py-3 bg-white text-green-700 font-medium rounded-xl
            hover:bg-green-50 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

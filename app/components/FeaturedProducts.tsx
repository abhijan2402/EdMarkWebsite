import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Plant Protein Blend",
    price: "$1,299",
    image: "/product-1.jpg",
    desc: "Clean plant-based protein for daily strength.",
  },
  {
    id: 2,
    name: "Herbal Immunity Boost",
    price: "$899",
    image: "/product-2.jpg",
    desc: "Natural herbs to support immune health.",
  },
  {
    id: 3,
    name: "Daily Wellness Mix",
    price: "$699",
    image: "/product-3.jpg",
    desc: "Essential nutrients for everyday vitality.",
  },
  {
    id: 4,
    name: "Weight Care Formula",
    price: "$1,099",
    image: "/product-4.jpg",
    desc: "Balanced nutrition to support weight goals.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Featured Products
            </h2>
            <p className="mt-2 text-gray-600 max-w-lg">
              Our most loved nutrition picks for everyday health.
            </p>
          </div>

          {/* CTA */}
          <button className="self-start sm:self-auto px-6 py-3 border border-green-600 text-green-600 rounded-xl font-medium hover:bg-green-600 hover:text-white transition">
            View All Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden
              hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 text-gray-600"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-semibold text-lg text-black">
                  {product.name}
                </h4>

                <p className="mt-1 text-sm text-gray-500">{product.desc}</p>

                {/* Price & CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-lg">
                    {product.price}
                  </span>

                  <button className="text-sm font-medium text-green-600 hover:text-green-700 transition">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

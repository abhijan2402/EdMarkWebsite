"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We’re here to assist you with product inquiries, orders, or general
            support. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info Card */}
          <div className="bg-white border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our support team is available to guide you with the right
              nutrition choices and assist with any concerns.
            </p>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-600 text-lg" />
                <span>support@healthfit.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-600 text-lg" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-600 text-lg" />
                <span>USA</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-gray-50 border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-black mb-6">
              Send us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

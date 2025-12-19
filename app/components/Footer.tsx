import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <FaLeaf className="text-green-600" />
            HealthFit
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Clean, science-backed nutrition crafted to support your health and
            fitness journey every day.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-green-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-green-600 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-600 transition cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-green-600 transition cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
              hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
              hover:bg-green-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
              hover:bg-green-600 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-2 text-center text-sm text-white bg-green-600 ">
        © {new Date().getFullYear()} HealthFit. All rights reserved.
      </div>
    </footer>
  );
}

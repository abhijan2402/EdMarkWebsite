"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Disable background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-green-600"
          >
            <FaLeaf />
            HealthFit
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-black">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive ? "text-green-600" : "hover:text-green-600"
                    }`}
                  >
                    {item.label}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-green-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-999 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="flex items-center gap-2 text-xl font-bold text-green-600">
            <FaLeaf /> HealthFit
          </span>
          <button
            className="text-2xl text-black"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8 text-lg font-medium text-black">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`transition-all ${
                    isActive
                      ? "text-green-600 underline underline-offset-8"
                      : "hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

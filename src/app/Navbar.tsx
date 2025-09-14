"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and brand */}
        {/* <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <Image
              src="/next.svg"
              alt="React Bits"
              width={32}
              height={32}
              className="w-8 h-8 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </Link> */}
        <span className="text-white/80 group-hover:text-white font-semibold text-xl tracking-tight transition-colors">
          Badryansah Bangsawan
        </span>

        {/* Navigation links */}
        <div className="flex items-center space-x-8">
          <Link
            href="page"
            className="text-white/80 hover:text-white transition-colors relative group"
          >
            Home
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors relative group"
          >
            Work Experiences
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

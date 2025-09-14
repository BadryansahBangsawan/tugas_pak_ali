import { LiquidChrome } from "./components/LiquidChrome";
import Navbar from "./Navbar";
import Image from "next/image";
import { FaGithub } from "react-icons/fa"; // Add this import

export default function Home() {
  return (
    <div className="font-sans relative min-h-screen">
      <div className="absolute inset-0">
        <LiquidChrome
          baseColor={[0, 0.1, 0.1]}
          speed={0.25}
          amplitude={0.4}
          frequencyX={2}
          frequencyY={3}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col items-center justify-center text-center min-h-screen px-4 pt-20 pb-16">
          <div className="max-w-3xl w-full">
            <h1 className="text-white/80 group-hover:text-white text-5xl sm:text-6xl font-extrabold mb-6">
              Badryansah Bangsawan
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              I'm a Frontend Developer and 2 years of experience at Smk Telkom
              based in Makassar, Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/docs"
                className="px-6 py-3 bg-white hover:bg-white/60 text-black rounded-md text-lg font-medium transition flex items-center justify-center"
              >
                See My Projects
              </a>
              <a
                href="https://github.com/BadryansahBangsawan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white border border-white/20 rounded-md text-lg font-medium transition flex items-center justify-center gap-2"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

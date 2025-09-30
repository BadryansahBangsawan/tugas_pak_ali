"use client";
import { useState, memo } from "react";
import { LiquidChrome } from "../components/LiquidChrome";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      // Save to localStorage
      localStorage.setItem("user", username);
      localStorage.setItem("token", data.token);
      window.location.href = "/admin";
    } else {
      setError(data.message || "Login failed");
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <LiquidChrome
          baseColor={[0.2, 0, 0]}
          speed={0.25}
          amplitude={0.4}
          frequencyX={2}
          frequencyY={3}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/20 w-full max-w-sm flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-white/80 mb-4 text-center">
            Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-md bg-black/40 text-white border border-white/20 focus:outline-none focus:border-white/50"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md bg-black/40 text-white border border-white/20 focus:outline-none focus:border-white/50"
            required
          />
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="bg-white text-black py-2 rounded-md font-semibold hover:bg-white/90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

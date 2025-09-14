"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DictatorPage() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [localKeys, setLocalKeys] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const userMatch = document.cookie.match(/(^| )user=([^;]+)/);
    const tokenMatch = document.cookie.match(/(^| )token=([^;]+)/);
    const userVal = userMatch ? decodeURIComponent(userMatch[2]) : "";
    const tokenVal = tokenMatch ? decodeURIComponent(tokenMatch[2]) : "";
    setUser(userVal);
    setToken(tokenVal);

    // Redirect to login if cookie missing
    if (!userVal || !tokenVal) {
      router.replace("/login");
    }

    // Get all localStorage keys
    setLocalKeys(Object.keys(localStorage));
  }, [router]);

  function handleLogout() {
    // Remove cookies
    document.cookie = "user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    localStorage.clear();
    router.replace("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181f2a] gap-6">
      <h1 className="text-4xl font-extrabold text-blue-200">
        I'm badryansah bangsawan
      </h1>
      {user && (
        <div className="text-blue-500 text-lg">
          Cookie user: <span className="font-bold">{user}</span>
        </div>
      )}
      {token && (
        <div className="text-gray-300 text-base">
          Cookie token: <span className="font-mono">{token}</span>
        </div>
      )}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white w-full max-w-md">
        <div className="font-bold mb-2">Local Storage:</div>
        {localKeys.length === 0 ? (
          <div className="text-gray-400">No local storage data</div>
        ) : (
          <ul className="list-disc pl-5">
            {localKeys.map((key) => (
              <li key={key}>
                <span className="text-blue-400">{key}</span>:{" "}
                <span className="text-gray-200">
                  {localStorage.getItem(key)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
}

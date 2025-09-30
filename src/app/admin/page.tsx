"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
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
    <div className="font-sans bg-[#F5F6FA] min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between py-8 px-6 min-h-screen">
        <div>
          <div className="mb-10 flex items-center gap-2">
            <span className="font-extrabold text-2xl text-black">Skillset</span>
          </div>
          <nav className="flex flex-col gap-4">
            <span className="font-semibold text-gray-700 mb-2">Dashboard</span>
            <span className="text-gray-500">Mentors</span>
            <span className="text-gray-500">Students</span>
            <span className="text-gray-500">Analytics</span>
            <span className="text-gray-500">Courses</span>
            <span className="text-gray-500">Forum</span>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-500">Settings</span>
          <span className="text-gray-500">Help Center</span>
          <button onClick={handleLogout} className="text-gray-500 text-left">
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white px-10 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100"
            />
            {user && (
              <span className="rounded-full w-8 h-8 bg-gray-300 flex items-center justify-center text-gray-600">
                {user.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-10 grid grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold text-gray-600 mb-2">
              Total Revenue
            </div>
            <div className="text-2xl font-bold text-black">$23,902</div>
            <div className="text-green-500 text-xs mt-2">
              4.2% from last month
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold text-gray-600 mb-2">Active Users</div>
            <div className="text-2xl font-bold text-black">16,815</div>
            <div className="text-green-500 text-xs mt-2">
              1.7% from last month
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold text-gray-600 mb-2">New Users</div>
            <div className="text-2xl font-bold text-black">1,457</div>
            <div className="text-red-500 text-xs mt-2">
              2.9% from last month
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold text-gray-600 mb-2">
              Total Mentors
            </div>
            <div className="text-2xl font-bold text-black">2,023</div>
            <div className="text-green-500 text-xs mt-2">
              0.9% from last month
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-gray-600 mb-4">
              Total Revenue
            </div>
            <div className="flex items-end h-40 gap-4">
              {[6000, 4000, 9000, 5000, 7000, 3000].map((val, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="bg-gradient-to-t from-gray-400 to-black rounded w-8"
                    style={{ height: `${val / 100}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar & Growth */}
          <div className="col-span-1 bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-gray-600 mb-4">
              September 2024
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                <span key={i} className="text-xs text-gray-400 text-center">
                  {d}
                </span>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xs text-gray-700 text-center py-1 rounded ${
                    i === 18 ? "bg-gray-300 font-bold" : ""
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600 text-sm">Community growth</span>
              <span className="font-bold text-green-500">65%</span>
            </div>
          </div>

          {/* Course Purchases Table */}
          <div className="col-span-4 bg-white rounded-xl shadow p-6 mt-6">
            <div className="font-semibold text-gray-600 mb-4">
              Course Purchases
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-xs">
                  <th className="pb-2">Course Name</th>
                  <th className="pb-2">Student Name</th>
                  <th className="pb-2">Student ID</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-2 flex items-center gap-2">
                    <img src="/window.svg" alt="" className="w-8 h-8 rounded" />
                    Digital Marketing
                  </td>
                  <td className="py-2">Aria</td>
                  <td className="py-2">#3456791</td>
                  <td className="py-2">$372,00</td>
                  <td className="py-2">
                    <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

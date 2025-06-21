"use client";
export default function UserGreeting() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">Welcome XYZ</h2>
        <p className="text-sm text-gray-700">PIN: 700034</p>
      </div>
      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
        Siddhanta Ray
      </span>
    </div>
  );
}
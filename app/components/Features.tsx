export default function FeaturesSection() {
  return (
    <section id="features" className="mb-20 px-4 sm:px-10 ">
      <h2 className="text-3xl font-bold text-[#2d5016] mb-10">Features</h2>

      <div className="grid grid-cols-7 grid-rows-9 gap-6 h-[500px] mx-auto">
        {/* Top-left tall card */}
        <div className="bg-[#85cb4c] rounded-xl col-span-2 row-span-5 p-6 shadow-md"></div>

        {/* Top row wide card */}
        <div className="bg-[#2c3028] rounded-xl col-span-3 row-span-3 p-6 shadow-md"></div>

        {/* Top-right tall card */}
        <div className="bg-[#6fba31] rounded-xl col-span-2 row-span-4 p-6 shadow-md"></div>

        {/* Bottom-left short card */}
        <div className="bg-[#2c4219] rounded-xl col-span-3 row-span-6 p-6 shadow-md"></div>

        {/* Middle tall card */}
        <div className="bg-[#f8fdf4] rounded-xl col-span-2 row-span-5 p-6 shadow-md "></div>

        {/* Bottom-right short card */}
        <div className="bg-[#f8fdf4] rounded-xl col-span-2 row-span-4 p-4 shadow-md"></div>
      </div>
    </section>
  );
}

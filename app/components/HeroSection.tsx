export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] mt-12 mb-10 pt-6">
      <div className="col-span-2 bg-gradient-to-br from-[#EEFFC5] to-[#BBD9A2] rounded-3xl p-12 shadow-md relative overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-[#a7c957]/30 to-transparent z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-[#2d5016] mb-4 leading-tight">
          Turn Every Waste Spot into a Clean-Up Mission.
          </h1>
          <p className="text-lg text-[#4a7c59] mb-8">
            Transform your waste into valuable resources with our innovative circular economy solutions
          </p>
          <a
            href="#learn-more"
            className="bg-[#2d5016] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
          >
            Discover Our Impact
          </a>
        </div>
      </div>
      <div className="bg-white rounded-3xl p-8 flex flex-col justify-around shadow-md">
      </div>
    </section>
  );
}
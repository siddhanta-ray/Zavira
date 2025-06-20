function HeroSection() {
  return (
    <section className="h-screen snap-start bg-gradient-to-br from-lime-100 to-lime-200 py-10 px-6">
      {/* Content container */}
      <div className="max-w-6xl mx-auto mt-16 rounded-3xl bg-lime-100 p-10 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left content box */}
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 p-8 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            facilisis nisi. Ut ex libero, vestibulum ut luctus at, faucibus ac
            quam. Vivamus interdum ex eu sapien mollis, eu fringilla tellus
            ultrices. Nam ac maximus arcu.
          </p>
          <button className="bg-green-900 text-white px-8 py-2 rounded-full hover:bg-green-800">
            Action
          </button>
        </div>

        {/* Right content box */}
        <div className="bg-white rounded-xl shadow-md"></div>
      </div>
    </section>
  );
}

export default HeroSection;
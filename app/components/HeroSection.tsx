export default function HeroSection() {
  return (
    <section className="h-screen snap-start bg-lime-200 pt-24 px-6 flex flex-col items-center">
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
        <p className="mb-4">Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
      </div>
      <div className="w-1/2 h-48 bg-gray-300 rounded"></div>
    </section>
  );
}
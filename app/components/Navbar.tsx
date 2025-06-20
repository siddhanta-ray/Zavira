export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] bg-white rounded-3xl px-6 py-4 mt-4 shadow-md flex justify-between items-center z-50">
      <div className="text-2xl font-extrabold text-[#2d5016]">Zavira Chain</div>
      <ul className="hidden md:flex gap-8 text-[#4a7c59] font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a
        href="#get-started"
        className="bg-[#7fb069] text-white px-5 py-2 rounded-xl font-semibold hover:bg-[#4a7c59] transition"
      >
        Get Started
      </a>
    </nav>
  );
}

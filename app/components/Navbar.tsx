import Logo from "./Logo";
export default function Navbar() {
 return (
    <nav className="relative w-full h-[80px] px-6 sm:px-10 md:px-14 flex items-center justify-between bg-lime-200 text-white">
      {/* Left logo */}
      <Logo />

      {/* Center nav links */}
      <ul className="flex space-x-4 text-gray-700 font-medium text-lg">
        <li><a href="#home" className="hover:underline">home</a></li>
        <li><a href="#about" className="hover:underline">home</a></li>
        <li><a href="#services" className="hover:underline">home</a></li>
        <li><a href="#contact" className="hover:underline">home</a></li>
      </ul>

      {/* Right placeholder */}
      <div className="w-12 h-8 bg-gray-300 rounded-md"></div>
    </nav>
  );
}




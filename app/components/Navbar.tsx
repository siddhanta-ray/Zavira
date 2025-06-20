import Logo from "./Logo";
export default function Navbar() {
 return (
    <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-gray-100 rounded-xl px-6 py-6 shadow-md flex items-center justify-between 
                    w-[800px] max-w-full h-5">
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




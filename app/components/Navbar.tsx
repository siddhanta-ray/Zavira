import { UserButton } from "@civic/auth/react";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] bg-[#EEFFC5] rounded-3xl px-6 py-4 mt-3 shadow-md flex justify-between items-center z-50">
      <div className="text-2xl font-extrabold text-[#2d5016]">Zavira Chain</div>
      <ul className="hidden md:flex gap-8 text-[#6A994E] font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <UserButton />
    </nav>
  );
}

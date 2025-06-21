import { UserButton } from "@civic/auth/react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] bg-[#EEFFC5] rounded-3xl px-6 py-4 mt-2 shadow-md flex justify-between items-center z-50">
      <div className=""><Logo /></div>
      <ul className="hidden md:flex gap-8 text-[#6A994E] font-mono">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link  href="#">Services</Link></li>
        <li><Link href="#">Join Now</Link></li>
      </ul>
        <UserButton />
    </nav>
  );
}


import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full p-3 bg-white flex items-center justify-between">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={60}
        className="w-24 h-8"
      />

      <Link href="/" className="text-sm font-medium">
        Home
      </Link>

      <button className="py-2 px-3 rounded-md border-[1.6px] border-gray-200 flex items-center gap-2 text-[#3B0764] hover:bg-[#fcf8ff]">
        <ArrowUpRight size={18} />
        <span> Let&apos;s Talk </span>
      </button>
    </div>
  );
};

export default Header;

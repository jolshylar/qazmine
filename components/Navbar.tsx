import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-sm shadow-[#ababab]">
      <ul className="flex text-2xl justify-between px-8 py-4">
        <li className="text-secondary">
          <Link href="/">QazMine</Link>
        </li>
        <div className="flex gap-4">
          <li>
            <Link href="#siginin">sign in</Link>
          </li>
          <li className="text-secondary">
            <Link href="#login">log in</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

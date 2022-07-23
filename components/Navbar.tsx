import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">QazMine</Link>
        </li>
        <div>
          <li>
            <Link href="#siginin">sign in</Link>
          </li>
          <li>
            <Link href="#login">log in</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

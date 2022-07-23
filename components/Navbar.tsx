import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="shadow-sm shadow-[#ababab]">
      <ul className="flex text-2xl justify-between px-8 py-4">
        <li className="text-secondary">
          <Link href="/">QazMine</Link>
        </li>
        <div className="flex gap-4">
          {session ? (
            <li className="text-secondary">
              <button onClick={() => signOut()}>sign out</button>
            </li>
          ) : (
            <li className="text-secondary">
              <button onClick={() => signIn()}>sign in</button>
            </li>            
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

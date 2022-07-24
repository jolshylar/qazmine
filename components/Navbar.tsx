import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav>
      <ul className="flex text-2xl justify-between px-8 py-4">
        <li className="text-secondary flex items-center gap-2">
          <Image alt="logo" src="/images/logo.png" width={32} height={32} />
          <Link href="/">QazMine</Link>
        </li>
        <div className="flex gap-4">
          {session ? (
            <div className="text-secondary flex gap-4">
              <li>
                <Link href="#leaders">leaders</Link>
              </li>
              <li>
                <Link href="#shop">shop</Link>
              </li>
              <li>
                <Link href="#dashboard">dashboard</Link>
              </li>
              <li>
                <Link href="#play">play</Link>
              </li>
              <li>
                <Link href="/elements">elements</Link>
              </li>
              <li className="text-secondary">
                <button onClick={() => signOut()}>sign out</button>
              </li>
            </div>
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

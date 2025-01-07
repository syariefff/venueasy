"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useSession, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); // Mengambil data session user

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className="fixed w-full h-16 z-10">
      <main className="bg-transparent">
        <header className="relative flex items-center justify-between h-full max-w-7xl mx-auto px-4">
          {/* Logo di Kiri */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="Logo" width={80} height={50} />
          </div>

          {/* Menu Navigasi di Tengah */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-10 text-white">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-[#b30d0d] transition duration-300"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href={"/gallery"}
                  className="hover:text-[#b30d0d] transition duration-300"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href={"/filter"}
                  className="hover:text-[#b30d0d] transition duration-300"
                >
                  FILTER
                </Link>
              </li>
            </ul>
          </nav>

          {/* Tombol di Kanan */}
          <div className="flex items-center gap-4">
            {session ? (
              <>
                {/* User sudah login */}
                <div className="text-white flex items-center">
                  <Icon
                    icon="mdi:account-circle"
                    style={{ fontSize: "32px", color: "white" }}
                  />
                  <span className="ml-2 text-sm">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-[#b30d0d] text-white px-4 py-2 rounded transition duration-300 hover:bg-[#9d0a0a]"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                {/* User belum login */}
                <Link href={"/login"}>
                  <button className="bg-[#b30d0d] text-white px-4 py-2 rounded transition duration-300 hover:bg-[#9d0a0a]">
                    LOGIN
                  </button>
                </Link>
              </>
            )}
          </div>
        </header>
      </main>
    </div>
  );
};

export default Navbar;

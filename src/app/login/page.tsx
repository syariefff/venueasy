"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation"; // Untuk navigasi antar halaman
import Logo from "@/assets/images/blacklogo.png";

import { signIn, useSession } from "next-auth/react";

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Cek jika komponen sudah render di sisi client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data: session } = useSession();

  // Navigasi otomatis jika sudah login
  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted", formData);
  };

  if (!isClient || session) {
    return null; // Mencegah double render di server-side dan saat user sudah login
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#5b4636]">
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-4 w-full max-w-4xl mx-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-center mb-6">
            <Image src={Logo} alt="Logo" className="mx-auto" width={80} height={70} />
            <h1 className="text-2xl font-bold">
              <span className="text-6xl">L</span>ogin To
            </h1>
            <h2 className="text-xl">Venueasy</h2>
          </div>
          <button
            onClick={() => signIn("google")}
            type="button"
            className="flex items-center bg-blue-500 text-white w-60 py-2 rounded mb-4 focus:outline-none hover:bg-blue-600 transition duration-300"
          >
            <Icon
              icon="ri:google-fill"
              style={{ color: "white", fontSize: "26px" }}
              className="ml-2 mr-5"
            />
            <span className="text-center flex-1">Log in with Google</span>
          </button>
          <div className="w-full max-w-xs">
            <div className="text-center mb-4">OR</div>
            <div className="mb-4">
              <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2 mb-2">
                <Icon
                  icon="bi:people"
                  style={{ color: "black", fontSize: "26px", transform: "scaleX(-1)" }}
                  className="mr-2"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2">
                <Icon icon="si:lock-line" style={{ color: "black", fontSize: "26px" }} className="mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-transparent focus:outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 focus:outline-none"
                >
                  <Icon
                    icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                    style={{ color: "black", fontSize: "20px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <Link
            href="/"
            type="submit"
            className="bg-[#8b4513] text-white w-[150px] py-2 rounded text-center items-center justify-center"
          >
            Login
          </Link>
          <div className="mt-4">
            <span className="text-sm">Don't Have An Account? </span>
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Untuk navigasi antar halaman
import Logo from "@/assets/images/blacklogo.png";

const Register: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter(); // Inisialisasi router

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { fullName: "", username: "", email: "", password: "" };

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }
    if (!formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#5b4636]">
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-4 w-full max-w-4xl mx-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-center mb-6">
            <Image src={Logo} alt="Logo" className="mx-auto" width={80} height={70} />
            <h1 className="text-2xl font-bold">
              <span className="text-6xl">S</span>ign Up To
            </h1>
            <h2 className="text-xl">Venueasy</h2>
          </div>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          <div className="flex items-center bg-blue-500 text-white w-60 py-2 rounded mb-4">
            <Icon
              icon="ri:google-fill"
              style={{ color: "white", fontSize: "26px" }}
              className="ml-2 mr-5"
            />
            <span className="text-center">Sign Up with Google</span>
          </div>
          </Link>
          <div className="w-full max-w-xs">
            <div className="text-center mb-4">OR</div>
            <div className="mb-4">
              <div className="flex space-x-4 mb-2">
                {/* Full Name */}
                <div className="w-1/2">
                  <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2">
                    <Icon icon="el:user" style={{ color: "black", fontSize: "26px" }} className="mr-2" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-transparent focus:outline-none w-full"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Username */}
                <div className="w-1/2">
                  <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2">
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
                  {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="mb-2">
                <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2">
                  <Icon icon="mdi-light:email" style={{ color: "black", fontSize: "24px" }} className="mr-2" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent focus:outline-none w-full"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
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
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#8b4613] text-white w-40 py-2 rounded items-center justify-center"
          >
            <a href="/verification">Create Account</a>
          </button>
          <div className="mt-4">
            <span className="text-sm">Already have an account? </span>
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

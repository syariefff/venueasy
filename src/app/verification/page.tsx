"use client";
import React from "react";
import Image from "next/image";
import Verif from "@/assets/images/verif.svg"

const Verify: React.FC = () => {
  const [code, setCode] = React.useState(["", "", "", ""]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add verification logic here
    console.log("Verification code entered", code.join(""));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#5a4634]">
      <div className="bg-white rounded-xl shadow-lg p-12 text-center w-3/4">
        <Image src={Verif} alt="Envelope with a letter" width={300} height={300} className="mx-auto mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Verify Your Email</h1>
        <p className="text-black mb-4">Please enter the 4 digit code sent to your mail yourmail@example.com</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <a href="#" className="text-blue-500 mb-4 block text-xs">Resend Code</a>
          <div className="flex justify-center space-x-2 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
              />
            ))}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-20 rounded">
            <a href="/">
              Confirm
            </a>
          </button>
          <a href="#" className="text-blue-500 mt-4 block text-xs underline">Change Email?</a>
        </form>
      </div>
    </div>
  );
};

export default Verify;
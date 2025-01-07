import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user"; // Model user kamu
import { connectToDB } from "@/utils/database"; // Function buat connect DB

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Session callback (opsional)
      return session;
    },
    async signIn({ account, profile }) {
      try {
        await connectToDB(); // Connect ke database

        // Cek apakah user sudah ada
        const existingUser = await User.findOne({ email: profile.email });

        // Kalau belum ada, tambahin ke database
        if (!existingUser) {
          await User.create({
            name: profile.name,
            email: profile.email,
          });
        }

        return true; // Sukses, lanjut redirect default
      } catch (error) {
        console.error("Error during sign-in:", error);
        return "/login"; // Gagal, redirect ke login
      }
    },
  },
});

export { handler as GET, handler as POST };

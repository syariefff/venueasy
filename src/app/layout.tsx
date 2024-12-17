import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Session} from "next-auth"
import AuthProvider from "@/components/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Venueasy",
  description: "Temukan Tempat Terbaik Untuk Acara Anda",
};

export default function RootLayout({
  children, session ,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">

      <body className={`${poppins.className} text-black antialiased`}>
        <Navbar />
        <AuthProvider session={session}>
        <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link dari next/link
import { Icon } from "@iconify/react";
import Gmb from "@/assets/images/bg.png";

interface Venue {
  id: string; // Tambahkan ID atau identifier unik untuk venue
  name: string;
  location: string;
  image: string;
  price: string;
  reviews: string;
}

interface RecommendedSectionProps {
  venues: Venue[];
  count: number; // Prop untuk mengatur jumlah venue yang akan ditampilkan
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ venues = [], count }) => {
  // Mengambil data venue sesuai jumlah yang diinginkan
  const venuesToDisplay = venues.slice(0, count);

  return (
    <div className="py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {venuesToDisplay.map((venue, index) => (
    <Link
      key={venue.id || index} // Gunakan id jika tersedia, jika tidak gunakan index
      href="/review" // Masukkan tautan ke halaman review dengan ID venue
      passHref
    >
      <div
        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer"
      >
        {/* Bagian Gambar */}
        <Image
          src={Gmb}
          alt={venue.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover bg-gray-800"
        />

        {/* Bagian Keterangan */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{venue.name}</h3>
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <Icon
              icon="mdi:location-radius-outline"
              style={{ fontSize: "16px", color: "black" }}
            />
            <span className="ml-2">{venue.location}</span>
          </div>

          <div className="flex justify-between items-center mt-2">
            {/* Review Rating */}
            <div className="flex items-center text-xs text-gray-500">
              <Icon
                icon="noto:star"
                style={{ fontSize: "16px", color: "#FFC107" }}
              />
              <span className="ml-2">{venue.reviews}</span>
            </div>

            {/* Harga */}
            <div className="bg-[#ED5151] text-white font-bold px-3 py-1 rounded-lg text-sm">
              {venue.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default RecommendedSection;

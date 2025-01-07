import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface Venue {
  id: string;
  name: string;
  location: string;
  image: string;
  price: string;
  reviews: string;
  guests: string;
}

interface RecommendedSectionProps {
  count: number;
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ count }) => {
  const venues: Venue[] = [
    {
      id: '1',
      name: 'Akmani Hotel Jakarta',
      location: 'South Jakarta',
      image: "akmani-jakarta.svg",
      price: 'Rp 2.100.000',
      reviews: '4,6/5.0 Reviews',
      guests: '200',
    },
    {
      id: '2',
      name: 'Grand Bali Resort',
      location: 'Bali',
      image: "grandbaliresort.svg",
      price: 'Rp 1.800.000',
      reviews: '4,8/5.0 Reviews',
      guests: '120',
    },
    {
      id: '3',
      name: 'Surabaya Luxury Hotel',
      location: 'Surabaya',
      image: 'surabayaluxury.svg',
      price: 'Rp 1.500.000',
      reviews: '4,5/5.0 Reviews',
      guests: '150',
    },
    {
      id: '4',
      name: 'Medan City Hotel',
      location: 'Medan',
      image: 'medancityhotel.svg',
      price: 'Rp 1.200.000',
      reviews: '4,2/5.0 Reviews',
      guests: '100',
    },
    {
      id: '5',
      name: 'Jakarta Plaza Hotel',
      location: 'Central Jakarta',
      image: 'jakartaplazahotel.svg',
      price: 'Rp 2.400.000',
      reviews: '4,7/5.0 Reviews',
      guests: '250',
    },
    {
      id: '6',
      name: 'Bandung Hill Resort',
      location: 'Bandung',
      image: 'bandunghill.svg',
      price: 'Rp 1.950.000',
      reviews: '4,9/5.0 Reviews',
      guests: '180',
    },
    {
      id: '7',
      name: 'Yogyakarta Heritage Hotel',
      location: 'Yogyakarta',
      image: 'yogyaheritage.svg',
      price: 'Rp 1.700.000',
      reviews: '4,3/5.0 Reviews',
      guests: '130',
    },
    {
      id: '8',
      name: 'Surabaya Oceanfront Hotel',
      location: 'Surabaya',
      image: 'surabayaocean.svg',
      price: 'Rp 1.800.000',
      reviews: '4,6/5.0 Reviews',
      guests: '160',
    },
    {
      id: '9',
      name: 'Ubud Green Villa',
      location: 'Ubud, Bali',
      image: 'ubudvilla.svg',
      price: 'Rp 3.000.000',
      reviews: '5.0/5.0 Reviews',
      guests: '200',
    },
    {
      id: '10',
      name: 'Seminyak Beach Resort',
      location: 'Bali',
      image: 'seminyakbeach.svg',
      price: 'Rp 2.800.000',
      reviews: '4,8/5.0 Reviews',
      guests: '180',
    },
    {
      id: '11',
      name: 'Medan Grand Palace',
      location: 'Medan',
      image: 'medangrandpalace.svg',
      price: 'Rp 1.500.000',
      reviews: '4,4/5.0 Reviews',
      guests: '120',
    },
    {
      id: '12',
      name: 'Makassar Royal Hotel',
      location: 'Makassar',
      image: 'makassarroyal.svg',
      price: 'Rp 1.600.000',
      reviews: '4,5/5.0 Reviews',
      guests: '140',
    },
    {
      id: '13',
      name: 'Bali Skyview Hotel',
      location: 'Bali',
      image: 'baliskyview.svg',
      price: 'Rp 2.200.000',
      reviews: '4,6/5.0 Reviews',
      guests: '170',
    },
    {
      id: '14',
      name: 'Surabaya Business Inn',
      location: 'Surabaya',
      image: 'surabayabussines.svg',
      price: 'Rp 1.900.000',
      reviews: '4,5/5.0 Reviews',
      guests: '150',
    },
    {
      id: '15',
      name: 'Jakarta Cityview Hotel',
      location: 'Jakarta',
      image: 'jakartacityview.svg',
      price: 'Rp 2.300.000',
      reviews: '4,7/5.0 Reviews',
      guests: '180',
    },
    {
      id: '16',
      name: 'Anantara Uluwatu Resort',
      location: 'Badung',
      image: 'uluwatu.svg',
      price: 'Rp 2.000.000',
      reviews: '4,8/5.0 Reviews',
      guests: '160',
    },
  ];

   // Mengambil venue sebanyak jumlah yang ditentukan oleh prop `count`
  const venuesToDisplay = venues.slice(0, count);

  return (
    // Membuat container utama untuk section rekomendasi
    <div className="py-8 px-6">
      {/* Membuat grid layout untuk menampilkan venue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
        {venuesToDisplay.map((venue) => (
          // Membuat kartu venue dengan link navigasi ke halaman review
          <Link key={venue.id} href="/review" passHref>
            <div
              data-venue-card
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
            >
              {/* Menampilkan gambar venue */}
              <Image
                src={venue.image}
                alt={venue.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover bg-gray-800"
              />
              {/* Membuat detail informasi venue */}
              <div className="p-4">
                {/* Menampilkan nama venue */}
                <h3
                  data-venue-name
                  className="font-bold text-lg text-gray-800"
                >
                  {venue.name}
                </h3>
                {/* Menampilkan lokasi venue */}
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <Icon
                    icon="mdi:location-radius-outline"
                    style={{ fontSize: "16px", color: "black" }}
                  />
                  <span
                    data-venue-location
                    className="ml-2"
                  >
                    {venue.location}
                  </span>
                </div>
                {/* Menampilkan kapasitas tamu venue */}
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <Icon
                    icon="mdi:account-multiple-outline"
                    style={{ fontSize: "16px", color: "black" }}
                  />
                  <span
                    data-venue-guests
                    className="ml-2"
                  >
                    {venue.guests} guests
                  </span>
                </div>
                {/* Menampilkan ulasan dan harga venue */}
                <div className="flex justify-between items-center mt-2">
                  {/* Menampilkan ulasan */}
                  <div className="flex items-center text-xs text-gray-500">
                    <Icon
                      icon="noto:star"
                      style={{ fontSize: "16px", color: "#FFC107" }}
                    />
                    <span className="ml-2">{venue.reviews}</span>
                  </div>
                  {/* Menampilkan harga */}
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

// Mengekspor komponen RecommendedSection agar bisa digunakan di tempat lain
export default RecommendedSection;

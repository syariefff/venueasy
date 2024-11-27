"use client"
import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Hero from '@/assets/images/bgn.png';
import RecommendedSection from '@/components/rekomendasi';
import { venues } from '@/components/datavenue';

export default function Filter() {
  const [isClient, setIsClient] = useState(false); // State untuk memastikan hanya render di client
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    setIsClient(true); // Pastikan komponen hanya render di client
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(e.target.value);
  };

  if (!isClient) {
    return null; // Mencegah rendering di server
  }

  return (
    <div className='w-full'>
      {/* Background Hero */}
      <div className="relative w-full h-fit bg-black opacity-90">
        <Image
          src={Hero}
          alt="Hero"
          width={1200}
          height={900}
          className="w-full h-full object-cover bg-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-24">
        <h2 className="text-[40px] font-normal mb-6 text-white">
          Find The Best Unique Venue To Rent For<br />Events In Indonesia
        </h2>

        <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-1 max-w-4x1 mx-auto mt-20">
          {/* Icon dan Judul */}
          <div className="flex items-center space-x-1">
            <Icon icon="mage:building-tree" style={{ color: "black", fontSize: "35px" }} />
            <h2 className="font-semibold text-black">Venue Search</h2>
          </div>

          {/* Input pencarian nama venue */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Icon icon="gala:search" style={{ color: "black", fontSize: "24px", transform: "scaleX(-1)" }} />
            <input
              type="text"
              placeholder="Search Name Venue"
              className="bg-gray-100 outline-none text-black"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          {/* Input lokasi event */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Icon icon="mdi:location-radius-outline" style={{ color: "black", fontSize: "26px" }} />
            <input
              type="text"
              placeholder="Event Location"
              className="bg-gray-100 outline-none text-black"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          {/* Input jumlah tamu */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Icon icon="pepicons-pencil:people" style={{ color: "black", fontSize: "26px" }} />
            <input
              type="text"
              placeholder="Number Of Guest"
              className="bg-gray-100 outline-none text-black"
              value={guests}
              onChange={handleGuestsChange}
            />
          </div>

          {/* Tombol Search */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-1 hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
      </div>

      <div className='bg-gray-300 py-2'>
      <h2 className="text-2xl font-bold text-gray-500 mt-6 px-10">Recommended</h2>
      {/* Komponen RecommendedSection */}
      <RecommendedSection venues={venues} count={8} />
      </div>
    </div>
  );
}

// Menggunakan directive "use client" untuk memastikan komponen dirender di sisi klien
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Hero from '@/assets/images/bgn.png';
import RecommendedSection from '@/components/rekomendasi';

// Membuat komponen Filter sebagai komponen utama untuk halaman
export default function Filter() {
  // State untuk mendeteksi apakah kode dijalankan di klien
  const [isClient, setIsClient] = useState(false);

  // State untuk filter pencarian
  const [search, setSearch] = useState('');// Filter nama venue
  const [location, setLocation] = useState(''); // Filter lokasi venue
  const [guests, setGuests] = useState('');// Filter kapasitas tamu
  const [showResults, setShowResults] = useState(false);// State untuk menampilkan hasil filter

  // Data pilihan untuk dropdown filter
  const venueNames = [
    'Akmani Hotel Jakarta', 'Grand Bali Resort', 'Surabaya Luxury Hotel',
    'Medan City Hotel', 'Jakarta Plaza Hotel', 'Bandung Hill Resort',
    'Yogyakarta Heritage Hotel', 'Surabaya Oceanfront Hotel', 'Ubud Green Villa',
    'Seminyak Beach Resort', 'Medan Grand Palace', 'Makassar Royal Hotel',
    'Bali Skyview Hotel', 'Surabaya Business Inn', 'Jakarta Cityview Hotel',
    'Anantara Uluwatu Resort'
  ];

  const locations = [
    'South Jakarta', 'Bali', 'Surabaya', 'Medan', 'Central Jakarta',
    'Bandung', 'Yogyakarta', 'Ubud, Bali', 'Makassar', 'Badung'
  ];

  const guestOptions = ['100', '120', '130', '140', '150', '160', '170', '180', '200', '250'];

  // State untuk dropdown filter
  const [showNameDropdown, setShowNameDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  // Referensi elemen untuk deteksi klik di luar dropdown
  const nameInputRef = useRef<HTMLDivElement>(null);
  const locationInputRef = useRef<HTMLDivElement>(null);
  const guestInputRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Efek untuk mendeteksi klik di luar dropdown dan memastikan komponen dirender di klien
  useEffect(() => {
    setIsClient(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (!nameInputRef.current?.contains(event.target as Node)) setShowNameDropdown(false);
      if (!locationInputRef.current?.contains(event.target as Node)) setShowLocationDropdown(false);
      if (!guestInputRef.current?.contains(event.target as Node)) setShowGuestDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fungsi untuk menangani pencarian
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);// Menampilkan hasil filter

    // Memfilter venue yang sesuai dengan kriteria pencarian
    const venueContainer = gridRef.current;
    if (!venueContainer) return;

    const venueCards = venueContainer.querySelectorAll('[data-venue-card]');
    const matchedCards: HTMLElement[] = [];
    const unmatchedCards: HTMLElement[] = [];

    venueCards.forEach((card) => {
      const venueName = card.querySelector('[data-venue-name]')?.textContent || '';
      const venueLocation = card.querySelector('[data-venue-location]')?.textContent || '';
      const venueGuestsText = card.querySelector('[data-venue-guests]')?.textContent || '';
      const venueGuests = venueGuestsText.split(' ')[0];

      const matchesSearch = !search || venueName === search;
      const matchesLocation = !location || venueLocation === location;
      const matchesGuests = !guests || venueGuests === guests;

      const cardElement = card as HTMLElement;
      
      if (matchesSearch && matchesLocation && matchesGuests) {
        matchedCards.push(cardElement);
        cardElement.style.order = '0';
        cardElement.style.display = 'block';
      } else {
        unmatchedCards.push(cardElement);
        cardElement.style.order = '1';
        cardElement.style.display = 'none';
      }
    });

    // Mengatur ulang urutan kartu yang sesuai
    matchedCards.forEach((card, index) => {
      venueContainer.appendChild(card);
    });

    // Scroll ke bagian hasil
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Komponen untuk wadah dropdown
  const DropdownContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
      {children}
    </div>
  );

  // Komponen untuk item dalam dropdown
  const DropdownItem = ({ value, onClick }: { value: string, onClick: () => void }) => (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
      onClick={onClick}
    >
      {value}
    </div>
  );

  // Jika tidak dijalankan di klien, kembalikan null
  if (!isClient) {
    return null;
  }

  // Render komponen utama
  return (
    <div className='w-full'>
      <div className="relative w-full h-fit bg-black opacity-90">
        <Image
          src={Hero}
          alt="Hero"
          width={1200}
          height={900}
          className="w-full h-full object-cover bg-cover"
        />
      </div>
      
      {/* Form Pencarian */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-24">
        <h2 className="text-[40px] font-normal mb-6 text-white">
          Find The Best Unique Venue To Rent For<br />Events In Indonesia
        </h2>

        <form onSubmit={handleSearch} className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-1 max-w-4x1 mx-auto mt-20">
          {/* Input Nama Venue */}
          <div className="flex items-center space-x-1">
            <Icon icon="mage:building-tree" style={{ color: "black", fontSize: "35px" }} />
            <h2 className="font-semibold text-black">Venue Search</h2>
          </div>

          <div ref={nameInputRef} className="relative flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Icon icon="gala:search" style={{ color: "black", fontSize: "24px", transform: "scaleX(-1)" }} />
            <div
              className="cursor-pointer bg-gray-100 outline-none text-black min-w-[200px] text-left"
              onClick={() => setShowNameDropdown(!showNameDropdown)}
            >
              {search || "Select Venue Name"}
            </div>
            {showNameDropdown && (
              <DropdownContainer>
                {venueNames.map((name) => (
                  <DropdownItem
                    key={name}
                    value={name}
                    onClick={() => {
                      setSearch(name);
                      setShowNameDropdown(false);
                    }}
                  />
                ))}
              </DropdownContainer>
            )}
          </div>

          <div ref={locationInputRef} className="relative flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Icon icon="mdi:location-radius-outline" style={{ color: "black", fontSize: "26px" }} />
            <div
              className="cursor-pointer bg-gray-100 outline-none text-black min-w-[150px] text-left"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              {location || "Select Location"}
            </div>
            {showLocationDropdown && (
              <DropdownContainer>
                {locations.map((loc) => (
                  <DropdownItem
                    key={loc}
                    value={loc}
                    onClick={() => {
                      setLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                  />
                ))}
              </DropdownContainer>
            )}
          </div>

          <div ref={guestInputRef} className="relative flex items-center space-x-2 border-l border-gray-300 pl-4 mr-2">
            <Icon icon="pepicons-pencil:people" style={{ color: "black", fontSize: "26px" }} />
            <div
              className="cursor-pointer bg-gray-100 outline-none text-black min-w-[150px] text-left"
              onClick={() => setShowGuestDropdown(!showGuestDropdown)}
            >
              {guests ? `${guests} guests` : "Select Guests Capacity"}
            </div>
            {showGuestDropdown && (
              <DropdownContainer>
                {guestOptions.map((option) => (
                  <DropdownItem
                    key={option}
                    value={`${option} guests`}
                    onClick={() => {
                      setGuests(option);
                      setShowGuestDropdown(false);
                    }}
                  />
                ))}
              </DropdownContainer>
            )}
          </div>

          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-1 hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Hasil Pencarian */}
      <div ref={resultsRef} className='bg-gray-300 py-2'>
        {showResults && (
          <div className="col-span-3 bg-white rounded-lg p-4 shadow-md sticky top-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Filter yang digunakan:</h2>
            <div className="space-y-2">
              {search && <p className="text-gray-600">Nama: {search}</p>}
              {location && <p className="text-gray-600">Lokasi: {location}</p>}
              {guests && <p className="text-gray-600">Jumlah Tamu: {guests} guests</p>}
              {!search && !location && !guests && (
                <p className="text-gray-500">Tidak ada filter yang diterapkan</p>
              )}
            </div>
          </div>
        )}
        
        {/* Section Rekomendasi */}
        <div className={`${showResults ? 'col-span-9' : 'col-span-12'}`}>
          <h2 className="text-2xl font-bold text-gray-500 mb-4">Recommended</h2>
          <div ref={gridRef}>
            <RecommendedSection count={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
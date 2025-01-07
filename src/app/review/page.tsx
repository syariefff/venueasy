"use client"; 

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Meeting from "@/assets/icons/meetingroom.svg";
import Outdoor from "@/assets/icons/outdoor.svg";
import Ballroom from "@/assets/icons/ballroom.svg";
import Pp from "@/assets/images/pp.jpeg";

// Dynamically import Icon to prevent SSR issues
const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
  ssr: false
});

const Review = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStarRating = () => {
    if (!isClient) return null;
    
    return (
      <div className="flex items-center">
        <Icon icon="noto:star" style={{ fontSize: "16px", color: "#FFC107" }} />
        <span className="text-gray-400 text-lg ml-1">4.6</span>
        <span className="text-gray-400 ml-2">(2.5K Reviews)</span>
      </div>
    );
  };

  const renderGalleryImages = () => {
    const galleryImages = [
      'depanakmani.svg', 'ballroomakmani.svg', 'lobyakmani.svg', 'nongkiakmani.svg', 'rapatakmani.svg', 'restoakmani.svg'
    ];

    return galleryImages.map((image, index) => (
      <div key={index} className="relative">
        <div className="w-[370px] h-[250px] overflow-hidden rounded-xl">
          <Image
            src={`/${image}`}
            alt={`Gallery image ${index + 1}`}
            width={370}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mt-16">Akmani Hotel Jakarta</h1>
        {renderStarRating()}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {renderGalleryImages()}
        </div>
      </div>

      <div className="bg-white w-full py-14 mt-10">
        {/* Left Section */}
        <div className="flex-1 ml-10 mr-10">
          {/* Description Section */}
          <div className="mt-10 text-black rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Akmani Hotel Jakarta</h2>
            <p className="text-gray-700 mb-4">
              <strong>Alamat:</strong> Jl. KH. Wahid Hasyim No.91, RT.1/RW.4, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
              <br />
              <strong>Telepon:</strong> (021) 31925825
            </p>

            <hr className="border-t-2 border-black w-full mx-auto my-6" />

            <p className="text-gray-700">
              This stylish business hotel is a 10-minute walk from Gondangdia railway station and 1 km from the National Monument, commemorating Indonesia's independence from the Dutch.
              Sophisticated rooms feature flat-screen TVs and Wi-Fi, plus minibars, desks, and tea and coffeemakers. Upgraded rooms add sofas. Suites provide living rooms, and an upgraded suite has a dining area and a bar counter. Amenities include an Italian restaurant, 2 bars, a spa and a pool, along with a fitness room, meeting space, and a business center. Breakfast and parking are available.
            </p>

            <hr className="border-t-2 border-black w-full mx-auto my-6" />
          </div>

          {/* Availability Section */}
          <div className="text-black flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Availability</h2>
            <ul className="text-black">
              <li className="mb-1">Weekend: 2:00PM - 12:00AM</li>
              <li className="mb-1">Weekday: 12:00PM - 12:00AM</li>
              <li className="mb-1">Holidays:  2.00PM - 12:00AM</li>
            </ul>

            <hr className="border-t-2 border-black w-full mx-auto my-6" />
          </div>

          {/* Venue Section */}
          <div className="mt-10 text-black rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Venue</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Image src={Meeting} alt="Meeting Room Icon" width={70} height={70} className="mx-auto" />
                <p className="mt-4 text-lg font-semibold">Meeting Room</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={Outdoor} alt="Outdoor Icon" width={70} height={70} className="mx-auto" />
                <p className="mt-4 text-lg font-semibold">Outdoor</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src={Ballroom} alt="Ballroom Icon" width={70} height={70} className="mx-auto" />
                <p className="mt-4 text-lg font-semibold">Ballroom</p>
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-black w-full mx-auto my-6" />

          <div className="bg-gray-400 px-10 py-4 rounded-md flex justify-between items-center w-1/2 mx-auto">
            {/* WhatsApp Button */}
            <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              <span className="mr-2 text-xl">
                <Icon icon="ic:twotone-whatsapp" className="text-2x1 text-black" />
              </span>
              <a 
                href="https://wa.me/6283116988837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-black"
              >
                Whatsapp
              </a>
            </button>

            {/* Host Information */}
            <div className="text-center">
              <span className="text-xl flex items-center justify-center">
                <Icon icon="healthicons:ui-user-profile" className="text-black w-12 h-12" />
              </span>
              <h3 className="font-bold text-lg text-black">Raudhi</h3>
              <p className="text-gray-600 text-sm">HOST</p>
            </div>

            {/* Check Availability Button */}
            <div className="flex flex-col items-center">
              <p className="font-semibold mb-2 text-black text-xm">Enquire for price</p>
              <button className="flex items-center bg-red-600 text-white w-36 h-10 rounded-md hover:bg-red-700">
                <span className="mr-1 ml-2 text-lg">
                  <Icon icon="tdesign:calendar-2" className="text-white w-4 h-4" />
                </span>
                <span className="font-semibold text-xs">Check Availability</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10">
            <button className="flex items-center bg-blue-600 text-white w-36 h-10 rounded-lg">
              <a 
                href="/review/bookingform" 
                className="font-semibold text-white text-center w-full h-full flex items-center justify-center"
              >
                Booking
              </a>
            </button>

            <hr className="border-t-2 border-black w-full mx-auto my-6" />
            <div className="text-black">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <div className="flex items-center mb-4">
                <Icon icon="noto:star" style={{ fontSize: "24px", color: "#FFC107" }} />
                <span className="text-lg font-semibold ml-2">4.6</span>
                <span className="text-gray-600 ml-2">(2.5K Reviews)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-300 p-4 rounded-lg shadow text-black">
                  <div className="flex items-center mb-2">
                    <Image alt="User profile picture" className="w-10 h-10 rounded-full mr-2" height="40" src={Pp} width="40"/>
                    <div>
                      <div className="font-semibold">Muhammad Akmal Raudhi</div>
                      <div className="text-gray-600 text-sm">3 weeks ago</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <Icon icon="noto:star" style={{ fontSize: "16px", color: "#FFC107" }} />
                      <span className="font-semibold ml-1">4.9</span>
                    </div>
                  </div>
                  <p className="text-black">Salah satu hotel terbaik area sabang. Dekat dengan kuliner. Padang Garuda. Sarinah. Hotelnya nyaman. Kamar Bersih. Menu sarapan beragam. Banyak venue yang bisa disewakanSukses selalu buat Akmani.</p>
                </div>
                <div className="bg-gray-300 p-4 rounded-lg shadow text-black">
                  <div className="flex items-center mb-2">
                    <Image alt="User profile picture" className="w-10 h-10 rounded-full mr-2" height="40" src={Pp} width="40"/>
                    <div>
                      <div className="font-semibold">Junaid</div>
                      <div className="text-gray-600 text-sm">4 weeks ago</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <Icon icon="noto:star" style={{ fontSize: "16px", color: "#FFC107" }} />
                      <span className="font-semibold ml-1">5.0</span>
                    </div>
                  </div>
                  <p className="text-black">Cuma sampai meeting room.
                  Tapi meeting roomnya okay. Ceiling ya tinggi berasa luas. Karpet Dan kordennya bagus.</p>
                </div>
                <div className="bg-gray-300 p-4 rounded-lg shadow text-black">
                  <div className="flex items-center mb-2">
                    <Image alt="User profile picture" className="w-10 h-10 rounded-full mr-2" height="40" src={Pp} width="40"/>
                    <div>
                      <div className="font-semibold">Rima</div>
                      <div className="text-gray-600 text-sm">5 weeks ago</div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <Icon icon="noto:star" style={{ fontSize: "16px", color: "#FFC107" }} />
                      <span className="font-semibold ml-1">4.3</span>
                    </div>
                  </div>
                  <p className="text-black">Mampir ke sana buat meeting. Ruangannya enak. Fasilitas ok. Pelayanannya juga baik. Akses gampang.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

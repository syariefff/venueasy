"use client"; // Pastikan deklarasi ini ada di baris pertama tanpa spasi!

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dis from "@/assets/images/bg.png";
import { Icon } from "@iconify/react";
import Meeting from "@/assets/icons/meetingroom.svg";
import Outdoor from "@/assets/icons/outdoor.svg";
import Ballroom from "@/assets/icons/ballroom.svg";

const Review = () => {
  const [isClient, setIsClient] = useState(false);

  // Gunakan useEffect untuk memastikan hook hanya di-render di client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mt-16">Akmani Hotel Jakarta</h1>
        <div className="flex items-center">
          {isClient && (
            <Icon icon="noto:star" style={{ fontSize: "16px", color: "#FFC107" }} />
          )}
          <span className="text-gray-400 text-lg ml-1">4.6</span>
          <span className="text-gray-400 ml-2">(2.5K Reviews)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Image
                key={index}
                src={Dis}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-auto rounded"
              />
            ))}
        </div>
        </div>

      <div className="bg-white w-full py-14 mt-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Section */}
          <div className="flex-1 ml-10 mr-2">
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
            <div className="text-black">
              <h2 className="text-2xl font-bold mb-4">Availability</h2>
              <ul className="text-black">
                <li>Monday - Saturday: 2:00PM - 12:00AM</li>
                <li>Sunday: 12:00PM - 12:00AM</li>
                <li>Holidays: 2:00PM - 12:00AM</li>
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
          </div>

          {/* Enquiry Section */}
          <div className="min-h-min flex flex-col items-center">
            <div className="bg-gray-300 p-6 rounded-lg w-full max-w-md mb-4">
              <div className="flex justify-between items-center mr-4">
                <div className="mr-2">
                    <button className="bg-green-500 text-black px-1 py-1 rounded flex items-center text-xm mr-2">
                        <Icon icon="ic:baseline-whatsapp" style={{ color: "black", fontSize: "20px" }} />
                        <i className="mr-2"></i> Whatsapp
                    </button>
                </div>
                     <div>
                        <div className="text-center">
                            <i className="fas fa-user-circle text-2xl"></i>
                            <div className="flex justify-center items-center">
                            <Icon icon="healthicons:ui-user-profile" style={{ color: "black", fontSize: "50px" }} />
                            </div>
                            <div className="font-bold text-black">Raudhi</div>
                            <div className="text-xs text-black">HOST</div>
                        </div>
                    </div>
                <div className="ml-4">
                    <div className="flex justify-center items-center text-lg text-black mb-4 font-bold">
                     Enquire for price
                    </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center text-xs">
                <Icon icon="tdesign:calendar-2" style={{ color: "white", fontSize: "15px" }} className="mr-2" />
                  <i className="fas fa-calendar-check ml-1"></i> Check Availability
                </button>
                </div>
              </div>
              <hr className="border-t-2 border-black w-full mx-auto mt-3" />

            </div>
            
            <div className="bg-gray-300 p-20 rounded-lg w-full max-w-md">
              <div className="flex items-center mb-4">
              <Icon icon="mdi:paper-text" style={{ color: "black", fontSize: "25px" }} className="mr-2" />
                <i className="fas fa-clipboard-list text-xl mr-2"></i>
                <h2 className="text-xl font-bold text-black">Enquiry</h2>
              </div>
              <hr className="border-t-2 border-black w-1/2 py-2 " />
              <form>
                <div className="mb-4 ">
                  <label className="block text-gray-700">Rooms</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Package</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Event Date & Time</label>
                  <input
                    type="datetime-local"
                    placeholder="Event Date & Time"
                    className="w-full p-3 bg-gray-200 text-gray-700 rounded"
                  />
                </div>
                <div className="flex mb-4">
                  <button className="flex-1 bg-gray-200 p-2 border border-gray-300 rounded flex items-center justify-center mr-2">
                    <i className="fas fa-clock mr-2"></i> Event Time
                  </button>
                  <button className="flex-1 bg-gray-200 p-2 border border-gray-300 rounded flex items-center justify-center">
                    <i className="fas fa-hourglass-half mr-2"></i> Duration
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Venue Selection</label>
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Select Venue</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white p-2 rounded">Booking</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

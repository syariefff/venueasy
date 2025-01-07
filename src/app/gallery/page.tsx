import React from 'react';
import Image from 'next/image';
import Bandung from '@/assets/images/kota.svg';
import Meeting from '@/assets/icons/meetingroom.svg';
import Outdoor from '@/assets/icons/outdoor.svg';
import Ballroom from '@/assets/icons/ballroom.svg';
import RecommendedSection from '@/components/rekomendasi';


const GallerySection = () => {
  const images = [
    { city: 'BANDUNG', src: 'bandung.svg' },
    { city: 'BALI', src: 'bali.svg' },
    { city: 'JAKARTA', src: 'jakarta.svg'},
    { city: 'MAKASSAR', src: 'makasar.svg' },
    { city: 'YOGYAKARTA', src: 'yogya.svg' },
    { city: 'MEDAN', src: 'medan.svg' },
  ];
  
  return (
    <div className="relative p-5 min-h-screen">
      <div className="p-5 mb-4">
        {/* Gallery Section */}
        <div className="mt-16 ml-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <div className="w-[370px] h-[250px] overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.city}
                    width={370}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg">
                  {image.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );  
};

const VenuesSection = () => {
  return (
    <div className="py-16 bg-gray-300 min-h-screen">
      <h6 className="text-center mb-1">Popular Venue</h6>
      <h2 className="text-center text-2xl font-bold mb-8">Book our venue for your special event!</h2>

      <RecommendedSection count={4} />

      <div>
        <hr className="border-t-2 border-black w-[95%] mx-auto my-6" />
        <h6 className="text-center mb-1">Inventor Veritalis</h6>
        <h2 className="text-center text-2xl font-bold mb-8">Find the ideal space for your event here</h2>
        <div className="flex items-center justify-center space-x-8 gap-12 mt-10">
          <div>
            <Image src={Meeting} alt="Meeting Room Icon" width={70} height={70} className="mx-auto" />
            <p className="mt-4 text-lg font-semibold">Meeting Room</p>
          </div>
          <div>
            <Image src={Outdoor} alt="Outdoor Icon" width={70} height={70} className="mx-auto" />
            <p className="mt-4 text-lg font-semibold">Outdoor</p>
          </div>
          <div>
            <Image src={Ballroom} alt="Ballroom Icon" width={70} height={70} className="mx-auto" />
            <p className="mt-4 text-lg font-semibold">Ballroom</p>
          </div>
        </div>
        <hr className="border-t-2 border-black w-[95%] mx-auto my-6 mt-12" />

        <RecommendedSection count={12} />
      </div>
    </div>
  );
};

const GalleryAndVenues = () => {
  return (
    <>
      <GallerySection />
      <VenuesSection />
    </>
  );
};

export default GalleryAndVenues;

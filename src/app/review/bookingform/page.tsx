'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Hero from "@/assets/images/kota.svg";

const BookingForm: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState({
        room: '',
        package: '',
        date: '',
        roomType: ''
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking Data:', formData);
        // Add your form submission logic here
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-300">
            <div className="absolute inset-0 z-0">
                <Image
                    src={Hero}
                    alt="Background image of a beautiful venue"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
            </div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10 mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Booking Form
                <hr className="border-black w-1/2 border-t-2 mt-1 mx-auto"/>
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room">
                            Room
                        </label>
                        <input
                            type="text"
                            id="room"
                            name="room"
                            value={formData.room}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter room name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package">
                            Package (Capacity)
                        </label>
                        <input
                            type="number"
                            id="package"
                            name="package"
                            value={formData.package}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter package capacity"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Booking Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomType">
                            Room Type
                        </label>
                        <select
                            id="roomType"
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select room type</option>
                            <option value="single">Meeting Room</option>
                            <option value="double">Outdoor</option>
                            <option value="suite">Ballroom</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <a href="/review">Book</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
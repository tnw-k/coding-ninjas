import React, { useState, useEffect } from 'react';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
const badges = [
  { label: 'MERN' },
  { label: 'AI' },
  { label: 'DSA' },
  { label: 'Soft skills' },
];

const RecentEvents = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const eventDate = new Date('2024-09-01T00:00:00'); // Replace with your event date
    const difference = eventDate - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="rounded-lg mt-20 p-2  border-2 border-[#F66C3B] px-8 shadow-sm bg-Advertise xl:mx-20">
      <div className="sm:flex-row flex flex-col items-center justify-between mb-4">
        <div className="flex flex-col lg:w-[600px] sm:w-[400px]">
          <div className="flex items-center mb-4">
            <span className=""><Image src="/assets/images/logo.png" alt="Coding Ninjas" className="mr-4" width={50} height={50}></Image></span>
            <h2 className="text-3xl font-bold text-orange-600">Badlav</h2>
          </div>
          <p className="text-gray-800 lg:text-[16px] sm:text-sm  font-semibold text-justify">
            Complete             Complete CS Education to transform you into a 10X Developer
            Complete CS Education to transform you into a 10X Developer
            Complete CS Education to transform you into a 10X Developer
            CS Education to transform you into a 10X Developer
          </p>
          <div className=" gap-2 grid-cols-4 grid mt-5">
            {badges.map((badge, index) => (
              <div key={index} className=" sm:py-1 sm:px-2 px-0.5 py-0.5 rounded-lg flex items-center justify-center bg-orange-100 text-orange-500 sm:text-sm text-[12px] border-orange-600 border font-medium">
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 flex flex-col ">
        <button className="bg-orange-500 text-white text-lg sm:w-60 w-full  h-12  border-2 border-orange-500 rounded-lg font-bold shadow hover:bg-transparent hover:text-orange-600 transition">
          Join Event
        </button>
       <div className="flex  justify-around mt-6">
       <div className="flex text-black  items-center space-x-1 font-semibold">
          <FaCalendarAlt className="text-orange-600" />
          <span>01 Sep 2024</span>
        </div>
        <div className="flex text-black  items-center space-x-1 font-semibold">
          <FaMapMarkerAlt className="text-green-500" />
          <span>Venue</span>
        </div>
       </div>
        <div className="flex justify-center items-center mt-3 space-x-1">
            {Object.keys(timeLeft).map((interval, index) => (
              <div key={index} className="text-gray-900 ">
                <span className="font-semibold text-lg ">{timeLeft[interval]}</span>
                <span className="text-xs ml-1 uppercase">{interval}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    

      
    </div>
  );
};

export default RecentEvents;

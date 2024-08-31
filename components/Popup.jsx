"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up when the component is unmounted
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-[10000]">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black opacity-60 z-40" 
      ></div>

      {/* Modal */}
      <div 
        className="relative sm:mt-14 bg-[#141819] text-white border-4 border-[#F66C3B] rounded-xl p-6 max-w-sm w-full z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Link href="upcoming-event"><button 
          onClick={onClose} 
          className="absolute flex justify-center items-center p-2 top-2 right-2 h-fit w-fit rounded-full bg-white bg-opacity-10 text-white font-bold"
        >
          <FaTimes />
        </button></Link>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/assets/images/deadpool.png" 
            alt="Baadlo 4.0" 
            width={256} 
            height={192} 
            className="rounded-lg" 
          />
        </div>

        {/* Explore Event Button */}
        <div className="flex justify-center">
          <button 
            className="red-hat-display-heading explore-btn outline-1 cursor-pointer text-[#F17522] rounded-xl px-4 py-2 bg-[#141819] border-4 text-xl border-[#F17522]"
            onClick={onClose}
          >
            Explore Event
          </button>
        </div>
      </div>
    </div>
  );
}

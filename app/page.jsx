"use client";

import { useEffect, useState } from 'react';
import Events from "@components/Events/Events"
import Hero from "@components/Hero"
import Popup from "@components/Popup";
import AboutUs from '@components/AboutUs';
import OurNinjas from '@components/OurNinjas';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show the modal after the page has loaded
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full text-white">
        <Popup isOpen={isModalOpen} onClose={closeModal} />
        <Hero />
        <AboutUs/>
        <Events />
        <OurNinjas/>
    </div>
  )
}

export default Home

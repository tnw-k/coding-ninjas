"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [hovered, setHovered] = useState("learn");
  const [progress, setProgress] = useState([33.33, 0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const sections = ["learn", "excel", "standout"];

  const [learnProgress, setLearnProgress] = useState(0);
  const [excelProgress, setExcelProgress] = useState(0);
  const [standoutProgress, setStandoutProgress] = useState(0);

  const handleMouseEnter = (section) => {
    setIsHovering(true);
    setHovered(section);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  

  return (
    <div id="about-us" className="flex flex-col">
      <div className="about-us-title">
        <h1 >About Us</h1>
      </div>
      
      <div className="section-container">
        <div className="text-container">
          <div
            onMouseEnter={() => handleMouseEnter("learn")}
            onMouseLeave={handleMouseLeave}
            className={hovered === "learn" ? "active cursor-pointer" : ""}
          >
            <div className="section-content text-gray-500 hover:text-gray-100 pl-5 mb-8 border-l-4 border-gray-500 hover:border-gray-100">
              <h2>Learn</h2>
              <p>
                Experience seamless learning with problem-solving modules,
                leaderboards, and awards.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("excel")}
            onMouseLeave={handleMouseLeave}
            className={hovered === "excel" ? "active cursor-pointer" : ""}
          >
            <div className="section-content pl-5 mb-8 border-l-4 border-gray-500 hover:border-gray-100 text-gray-500 hover:text-gray-100">
              <h2>Excel</h2>
              <p>
                Track your skill level and make meaningful progress for you to
                grow.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("standout")}
            onMouseLeave={handleMouseLeave}
            className={hovered === "standout" ? "active cursor-pointer" : ""}
          >
            <div className="section-content text-gray-500 hover:text-gray-100 pl-5 mb-8 border-l-4 border-gray-500 hover:border-gray-100">
              <h2>Standout</h2>
              <p>
                Stand out to recruiters, showcase ratings, get feedback and
                interview insights.
              </p>
            </div>
          </div>
        </div>

        <div className="image-container">
          {hovered === "learn" && (
            <Image
              src="/assets/learn.png"
              alt="Learning platform"
              width={800}
              height={600}
            />
          )}
          {hovered === "excel" && (
            <Image
              src="/assets/excel.png"
              alt="Excel platform"
              width={800}
              height={600}
            />
          )}
          {hovered === "standout" && (
            <Image
              src="/assets/standout.png"
              alt="Standout platform"
              width={800}
              height={600}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
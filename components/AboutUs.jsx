import React, { useState, useEffect } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider mobile if width is less than 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = ["Learn", "Excel", "Standout"];
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    if (!isMobile) {
      setSelectedSection(section);
    }
  };

  return (
    <div id="about-us" className="flex flex-col my-20">
      <div>
        <h1 className="sm:text-5xl text-4xl text-center event-title font-bold mb-10 text-orange-500">About Us</h1>
      </div>

      <div className="section-container flex xl:p-[2.8rem]">
        <div className="text-container flex flex-col lg:p-[2rem] lg:max-w-[40%]">
          {sections.map((section) => (
            <div
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`cursor-pointer mb-8 ${
                selectedSection === section
                  ? "text-gray-100 border-gray-100"
                  : "sm:text-gray-500 text-gray-100 border-gray-500 sm:hover:text-[#ffa7489c] sm:hover:border-gray-100"
              }`}
            >
              <div className="section-content pl-5 border-l-4">
                <h2>{section}</h2>
                <p>
                  {section === "Learn"
                    ? "Experience seamless learning with problem-solving modules, leaderboards, and awards."
                    : section === "Excel"
                    ? "Track your skill level and make meaningful progress for you to grow."
                    : "Stand out to recruiters, showcase ratings, get feedback, and interview insights."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="image-container ml-10">
            {selectedSection === "Learn" && (
              <Image
                src="/assets/learn.png"
                alt="Learning platform"
                width={800}
                height={600}
              />
            )}
            {selectedSection === "Excel" && (
              <Image
                src="/assets/excel.png"
                alt="Excel platform"
                width={800}
                height={600}
              />
            )}
            {selectedSection === "Standout" && (
              <Image
                src="/assets/standout.png"
                alt="Standout platform"
                width={800}
                height={600}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

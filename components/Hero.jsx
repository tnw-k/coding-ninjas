'use client';
import Link from "next/link";
import { useState,useEffect } from "react";

const Hero = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  return (isClient &&
    <section className='w-full h-screen '>
        <div className="absolute top-0 left-0 z-10 w-full h-screen overlay" ></div>
        <video
            autoPlay 
            loop 
            muted
            className="w-full h-full videoBlur object-cover"
        >
            <source src="/assets/videos/hotstarPromo.mp4" type="video/mp4" />
        </video>

        <div 
            className="  w-full z-20 md:px-40 px-10 h-screen absolute text-center flex-col gap-6 top-0 flex justify-center items-center ">
            <div className="">
              {/* title-div p-5 w-fit h-fit outline mt-4 outline-2 outline-[#F17522]  bg-[#141819] bg-opacity-60 rounded-xl mb-8 shadow-md shadow-[#faad79] */}
              <h1 
                className="title-animation title-outline bg-gradient-to-br from-orange-200 via-[#ff7f29] to-[#fe6702] bg-clip-text cursor-default red-hat-display-heading font-semibold text-7xl relative" 
                style={{ lineHeight: 1.1, color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
              >
                  {/* bg-gradient-to-br from-white via-[#fcaf7c] to-[#fe6702] bg-clip-text text-transparent  */}
                  Coding Ninjas:<br/>
                  KIIT Chapter
                </h1>
            </div>
            <p className="text-opacity-60 text-xl text-white cursor-default sm:mx-52">Empowering students to have fun while learning, coding, and developing together across diverse tech and creative domains.</p>
            <Link href="#upcoming-event"><button className="red-hat-display-heading explore-btn cursor-pointer text-[#F17522] rounded-xl px-4 py-2  bg-[#141819] border-4 text-xl border-[#F17522]">Explore More</button>   </Link>         
        </div>
    </section>
  )
}

export default Hero






// import React, { useRef, useState } from 'react';

// const VideoPlayer = () => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} width="600" muted={isMuted}>
//         <source src="/videos/my-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={toggleMute}>
//         {isMuted ? 'Unmute' : 'Mute'}
//       </button>
//     </div>
//   );
// };

// export default VideoPlayer;
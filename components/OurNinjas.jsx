'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Profiles = [
    {
        name: 'BikramAditya Munshi',
        img: '/bikram.jpg',
        designation: "President",
    },
    {
        name: 'Ayush Srivastava',
        img: '/ayush_srivastava.jpeg',
        designation: "Vice-President",
    },
    {
        name: 'Sankalp Prajapati',
        img: '/sankalp.jpg',
        designation: "PR Marketing Lead",
    },
    {
        name: 'Pracheeta Gupta',
        img: '/pracheeta.jpg',
        designation: "CyberSecurity Lead",
    },
    {
        name: 'Shubham Agarwal',
        img: '/shubham.jpg',
        designation: "Administration Lead",
    },
    {
        name: 'Harsh Singh',
        img: '/harsh.jpeg',
        designation: "App Dev Lead",
    },
    {
        name: 'Ayush Suman',
        img: '/ayush_suman.jpg',
        designation: "CP Lead ",
    },
    {
        name: 'Sankalp Singh',
        img: '/sankalp_singh.jpg',
        designation: "Cloud Lead",
    },
]

const ProfileCard = () => {
    var settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: true,
        infinite: true,
        speed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }
            }
        ]
    };
    return (
        <div className='w-3/4 h-auto m-auto'>
            <div className='mt-[20%] '>
                <h3 className='  flex justify-center font-sans m-10'>Our Ninjas</h3>
                <Slider {...settings}>
                    {Profiles.map((d) => (
                        <div className='bg-gradient-to-t from-blue-600 to-black text-white-500 h-[200px] rounded-xl '>
                            <div className=' w-30 h-auto rounded-t-xl flex justify-center items-center'>
                                <img className='h-20 w-20 p-1 rounded-full' src={d.img} alt="/"></img>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 p-4'>
                                <h3 className='ninjaname'>{d.name}</h3>
                                <p className='ninjades'>{d.designation}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProfileCard

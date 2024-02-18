import React from 'react';
import { TbPlayerPlayFilled } from "react-icons/tb";

const Banner = () => {
    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]'>
            <div className='py-24 flex flex-col md:flex-row justify-between items-center '>

                {/* text div */}
                <div className='md:w-1/2 '>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl px-16 font-semibold'>Dive into Delights Of Delectable <span className='text-green'>Food</span> </h2>
                    <p className='text-[#4A4A4A] text-2xl px-16 my-5'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <div className='px-16 flex items-center gap-6 '>
                        <button className="btn bg-green rounded-full text-white px-5 ">Order Now</button>
                        <p className='text-lg'>Watch Video</p>
                        <TbPlayerPlayFilled className=' cursor-pointer shadow-md  text-4xl rounded-full' />
                    </div>
                </div>
                {/* imag div */}
                <div className='md:w-1/2'>
                    <img src="/images/home/banner.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;
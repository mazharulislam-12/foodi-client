import React from 'react';


const Menu = () => {
    return (
        <div>
            <div className='section-container bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]'>
                <div className='py-48 flex flex-col  md:flex-row justify-center items-center '>

                    {/* text div */}
                    <div className=' px-4 space-y-7 text-center  '>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl px-16 font-semibold'>Dive into Delights Of Delectable <span className='text-green'>Food</span> </h2>
                        <p className='text-[#4A4A4A] text-2xl px-16 my-5 md:w-4/5 mx-auto'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <div className='px-16 flex items-center gap-6 '>
                            <button className="btn bg-green rounded-full text-white px-5 ">Order Now</button>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Menu;
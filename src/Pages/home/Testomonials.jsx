import React from 'react'

const Testomonials = () => {
    return (
        <div className='section-container'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12  '>
                <div className='md:w-1/2'>
                    <img src="/images/home/testimonials/testimonials.png" alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <h5 className='sub-title'>Testimonials</h5>
                        <h2 className='title md:w-[450px] '>What Our Customers Say About Us</h2>
                        <p className='text-[#555]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testomonials
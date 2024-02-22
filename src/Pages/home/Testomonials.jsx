import React from 'react'
import { FaStar } from 'react-icons/fa'

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
                        <p className='text-secondary my-5 leading-[30px]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

                        {/* avator section */}
                        <div className='flex items-center gap-6 flex-wrap'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                                <div>
                                    <FaStar className='text-yellow-400'></FaStar>
                                    <span className='flex items-center font-medium' >4.9 <span className='text-[#807E7E]'>(18.6K Reviews)</span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Testomonials



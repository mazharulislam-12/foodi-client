import React from 'react'
import { FaStar } from 'react-icons/fa'

const serviceLists = [
    { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "/images/home/services/icon1.png" },
    { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "/images/home/services/icon2.png" },
    { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "/images/home/services/icon3.png" },
    { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "/images/home/services/icon4.png" },
]

const OurServices = () => {
    return (
        <div className='section-container'>

            <div className='flex items-center'>
                {/* text section */}
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <h5 className='sub-title'>Our Story & Services</h5>
                        <h2 className='title md:w-[450px] '>Our Culinary Journey And Services</h2>
                        <p className='text-secondary my-5 leading-[30px]'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                        <button className="btn bg-green rounded-full text-white px-5 ">Explore</button>
                    </div>
                </div>



                {/* right section */}
                <div className='md:w-1/2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            serviceLists.map((service) => (
                                <div key={service.id} className='shadow-lg rounded-lg py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                                    <img src={service.img} alt="" className='mx-auto' />
                                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                    <p className='text-[#90BD95]'>{service.des}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default OurServices  
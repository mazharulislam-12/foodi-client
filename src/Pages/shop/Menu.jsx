import React, { useEffect, useState } from 'react';


const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default")


    // loading data
    useEffect(() => {
        //fetch data form the backend
        const fetchData = async () => {
            try {
                const response = await fetch("menu.json")
                const data = await response.json()
                // console.log(data);
                setMenu(data)
                setFilteredItems(data)
            }
            catch (error) {
                console.log(error);
            }
        }
// call the function
        fetchData()

    }, [])

    // filtering data base on category
    const filterItem = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    



    return (
        <div>
            {/* menu banner */}
            <div className='section-container bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]'>
                <div className='py-48 flex flex-col  md:flex-row justify-center items-center '>

                    {/* text div */}
                    <div className=' px-4 space-y-7 text-center  '>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl px-16 font-semibold'>Dive into Delights Of Delectable <span className='text-green'>Food</span> </h2>
                        <p className='text-[#4A4A4A] text-2xl px-16 my-5 md:w-4/5 mx-auto'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <div className='px-16 flex items-center gap-6 '>
                            <button className="btn bg-green rounded-full text-white px-5 mx-auto">Order Now</button>

                        </div>
                    </div>

                </div>
            </div>

            {/* menu shop section */}
            <div className='section-container'>

            </div>
        </div>
    );
};

export default Menu;
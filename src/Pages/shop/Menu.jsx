import React, { useEffect, useState } from "react";
import Cards from "../../component/Cards";
import "./Menu.css";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items to display per page

  // loading data
  useEffect(() => {
    //fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    // call the function
    fetchData();
  }, []);

  // filtering data based on category
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // show all data function
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1); // Reset to first page when showing all items
  };

  // sorting based on A-Z, Z-A, Low-High price
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
        <div className="py-48 flex flex-col  md:flex-row justify-center items-center ">
          {/* text div */}
          <div className=" px-4 space-y-7 text-center  ">
            <h2 className="text-3xl md:text-5xl lg:text-6xl px-16 font-semibold">
              Dive into Delights Of Delectable{" "}
              <span className="text-green">Food</span>{" "}
            </h2>
            <p className="text-[#4A4A4A] text-2xl px-16 my-5 md:w-4/5 mx-auto">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="px-16 flex items-center gap-6 ">
              <button className="btn bg-green rounded-full text-white px-5 mx-auto">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* filtering and sorting  */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap my-4">
            {/* all category btn */}
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItem("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>

            <button
              onClick={() => filterItem("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItem("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItem("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItem("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          {/* sorting filtering */}
          <div className="flex">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting option */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="text-white bg-black px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High Price</option>
              <option value="high-to-low">High to Low Price</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`pagination-btn rounded-full text-xl border flex mr-4 bg-amber-400  ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

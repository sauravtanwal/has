import React, { useState } from "react";
import RoomCard from "../Card/RoomCard";

const Rooms = () => {
  const allRooms = [
    {
      id: 1,
      name: "Himalaya View",
      price: 4500,
      image: "/src/images/image1.jpeg",
    },
    {
      id: 2,
      name: "Front Side Deluxe",
      price: 4000,
      image: "/src/images/image2.jpeg",
    },
    {
      id: 3,
      name: "Himalaya View",
      price: 4500,
      image: "/src/images/hotel.jpg",
    },
    {
      id: 4,
      name: "Cozy Cottage",
      price: 3800,
      image: "/src/images/image3.jpeg",
    },
  ];

  const [selectedType, setSelectedType] = useState("All");

  const handleFilter = (type) => {
    setSelectedType(type);
  };

  const filteredRooms =
    selectedType === "All"
      ? allRooms
      : allRooms.filter((room) =>
          room.name.toLowerCase().includes(selectedType.toLowerCase())
        );

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center">
          Our Rooms
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Discover our variety of luxurious and comfortable rooms tailored to your needs.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Himalaya", "Front", "Cottage"].map((type) => (
            <button
              key={type}
              className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                selectedType === type
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-600 border border-blue-400 hover:bg-blue-100"
              }`}
              onClick={() => handleFilter(type)}
            >
              {type === "All" ? "All" : `${type} View`}
            </button>
          ))}
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              price={room.price}
              image={room.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

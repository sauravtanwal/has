import React from "react";

function RoomCard({ name, price, image }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-blue-600 font-semibold text-lg mb-4">₹{price} / night</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomCard;

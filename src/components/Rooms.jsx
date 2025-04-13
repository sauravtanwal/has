import React, { useState, useEffect } from "react";
import RoomCard from "../Card/RoomCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const snapshot = await getDocs(collection(db, "rooms"));
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllRooms(rooms);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch rooms:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

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

        {/* Loading Spinner */}
        {loading ? (
          <div className="text-center text-blue-600 text-lg">Loading rooms...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  name={room.name}
                  price={room.price}
                  image={room.image}
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No rooms found for this filter.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;

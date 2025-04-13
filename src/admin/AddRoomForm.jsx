import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddRoomForm = () => {
  const [roomData, setRoomData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, image } = roomData;

    if (!name || !price || !image) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "rooms"), {
        name,
        price: Number(price),
        image,
      });

      alert("Room added successfully!");
      setRoomData({ name: "", price: "", image: "" });
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={roomData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Room Price"
          value={roomData.price}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={roomData.image}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Room"}
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;

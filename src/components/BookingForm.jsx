import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Himalaya View"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkAvailability = async (roomType, checkIn, checkOut) => {
    const q = query(collection(db, "bookings"), where("room", "==", roomType));
    const querySnapshot = await getDocs(q);

    for (const doc of querySnapshot.docs) {
      const booking = doc.data();
      const existingCheckIn = new Date(booking.checkIn);
      const existingCheckOut = new Date(booking.checkOut);
      const requestedCheckIn = new Date(checkIn);
      const requestedCheckOut = new Date(checkOut);

      const isOverlap =
        existingCheckIn <= requestedCheckOut &&
        requestedCheckIn <= existingCheckOut;

      if (isOverlap) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, checkIn, checkOut, guests, roomType } = formData;

    const isAvailable = await checkAvailability(roomType, checkIn, checkOut);

    if (!isAvailable) {
      alert("Room is already booked for selected dates!");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        name,
        email,
        checkIn,
        checkOut,
        guests,
        room: roomType
      });
      alert("Booking successful!");
      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "Himalaya View"
      });
    } catch (error) {
      console.error("Error booking room: ", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option>Himalaya View</option>
          <option>Front Side Deluxe</option>
          <option>Cozy Cottage</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

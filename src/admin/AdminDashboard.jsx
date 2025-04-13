// src/Admin/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Link to="/admin-dashboard/add-room" className="p-4 bg-white shadow hover:shadow-md rounded-lg">
          Add Room
        </Link>
        <Link to="/admin-dashboard/booking-details" className="p-4 bg-white shadow hover:shadow-md rounded-lg">
          Booking Details
        </Link>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;

// src/admin/AdminPanel.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AddRoomForm from "./AddRoomForm";
import BookingDetails from "./BookingDetails";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/add-room" element={<AddRoomForm />} />
          <Route path="/bookings" element={<BookingDetails/>} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;

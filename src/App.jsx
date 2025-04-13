import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Services from './components/Services';
// import Admin from './components/Admin';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';
import BookingForm from './components/BookingForm';
import AdminBookings from './admin/BookingDetails';
import AddRoomForm from './admin/AddRoomForm';
import BookingDetails from './admin/BookingDetails';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - fixed at the top */}
     
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
  <div className="w-full flex justify-between items-center px-6">
    
    {/* Logo */}
    <div>
      <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">Royal Mountain</h1>
    </div>

    {/* Navigation Links */}
    <div className="flex items-center space-x-6">
      <Link
        to="/"
        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        Home
      </Link>
      <Link
        to="/rooms"
        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        Rooms
      </Link>
      <Link
        to="/services"
        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        Services
      </Link>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
        <Link to="/booking">Book Now</Link>
      </button>
    </div>
  </div>
</nav>



      {/* Main content area - flex-grow takes remaining space */}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/admin-login" element={<AdminLogin/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/booking" element={<BookingForm/>}/>
          <Route path="/admin-dashboard/add-room" element={<AddRoomForm/>} />
          <Route path="/admin-dashboard/booking-details" element={<BookingDetails/>} />
          {/* <Route path="/admin-dashboard/bookings" element={<AdminBookings/>} /> */}

        </Routes>
      </main>

      {/* Footer at the bottom */}
      <footer className="bg-gray-800 text-white py-6 px-4">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
    <p className="text-sm">&copy; {new Date().getFullYear()} Royal Mountain Hotel. All Rights Reserved.</p>
    
    <Link
      to="/admin-login"
      className="text-sm text-gray-300 hover:text-white transition duration-200 mt-2 sm:mt-0"
    >
      Admin Login
    </Link>
  </div>
</footer>
    </div>
  );
}

export default App;
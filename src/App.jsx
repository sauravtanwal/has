import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Services from './components/Services';

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
        Book Now
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
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Royal Mountain Hotel. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
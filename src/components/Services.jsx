import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "24/7 Room Service",
      description: "Enjoy top-class room service at any time of the day.",
      icon: "🛎️",
    },
    {
      id: 2,
      title: "Free Wi-Fi",
      description: "Stay connected with our complimentary high-speed internet.",
      icon: "📶",
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our exclusive spa treatments.",
      icon: "💆‍♀️",
    },
    {
      id: 4,
      title: "Restaurant & Dining",
      description: "Taste luxury with gourmet meals prepared by top chefs.",
      icon: "🍽️",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We offer a wide range of services to make your stay memorable and comfortable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

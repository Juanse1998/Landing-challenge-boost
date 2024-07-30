import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Restaurant Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h5 className="text-2xl font-bold">Restaurant Name</h5>
            <p className="text-sm mt-1">1234 Foodie Lane, Culinary City, CA 12345</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h6 className="text-xl font-semibold mb-2">Quick Links</h6>
            <ul className="list-none space-y-1">
              <li><a href="#home" className="hover:underline hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:underline hover:text-yellow-300 transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:underline hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h6 className="text-xl font-semibold mb-2">Follow Us</h6>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">F</span>
                </div>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">T</span>
                </div>
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">I</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
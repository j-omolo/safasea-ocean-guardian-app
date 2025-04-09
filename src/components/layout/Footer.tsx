
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 mr-2 rounded-full bg-white flex items-center justify-center">
                <span className="text-ocean-dark font-bold">S</span>
              </div>
              <span className="font-bold text-xl">SafaSea</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Join the movement to protect our oceans and marine life from pollution.
              Together we can make a difference.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {["Home", "Report Pollution", "Interactive Map", "Education", "Community"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {["Blog", "Research", "Partners", "Press Kit", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Join Our Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Stay updated with the latest news and events in ocean conservation.
            </p>
            <div className="mt-4">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-gray-900 focus:ring-ocean focus:border-ocean"
                />
                <button
                  type="submit"
                  className="bg-coral hover:bg-coral-light text-white rounded-md px-4 py-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} SafaSea. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-300 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

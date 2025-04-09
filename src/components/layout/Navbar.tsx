
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Map, FileText, Users, Home, BookOpen, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Report", path: "/report", icon: <FileText className="h-5 w-5" /> },
    { name: "Map", path: "/map", icon: <Map className="h-5 w-5" /> },
    { name: "Learn", path: "/learn", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Community", path: "/community", icon: <Users className="h-5 w-5" /> },
    { name: "Events", path: "/events", icon: <Calendar className="h-5 w-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 mr-2 rounded-full bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl text-ocean-dark">SafaSea</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-ocean hover:bg-gray-100 flex items-center"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </Link>
            ))}
            <Button size="sm" className="bg-ocean hover:bg-ocean-dark text-white ml-4">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-ocean hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ocean hover:bg-gray-100 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
            <Button className="w-full mt-2 bg-ocean hover:bg-ocean-dark text-white">
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

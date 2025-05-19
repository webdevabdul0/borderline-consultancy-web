
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Application Process", path: "/application-process" },
    { name: "Appointments", path: "/appointments" },
    { name: "Contact Us", path: "/contact" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-gray-900 py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Borderline
          </span>
          <span className="text-lg font-medium text-white">Visa Consultancy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold animate-hover relative",
                isActive(link.path)
                  ? "text-blue-400 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 btn-hover font-bold">
            <a href="/#book-quote">Get Started</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 absolute w-full left-0 py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 px-4 rounded-md animate-hover font-medium",
                  isActive(link.path)
                    ? "text-blue-400 bg-gray-700 font-bold"
                    : "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full mt-2 btn-hover font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/#book-quote">Get Started</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

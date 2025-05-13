
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
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Borderline
          </span>
          <span className="text-lg font-medium">Visa Consultancy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium animate-hover relative",
                isActive(link.path)
                  ? "text-blue-600 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 btn-hover">
            <a href="/#book-quote">Get Started</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t absolute w-full left-0 py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 px-4 rounded-md animate-hover",
                  isActive(link.path)
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full mt-2 btn-hover"
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

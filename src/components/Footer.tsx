
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Borderline
                </span>
                <span className="text-lg font-medium text-white">Visa Consultancy</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for visa consultancy services with over 10 years of experience in the industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span>Office 26 M2 Floor, Eden Tower, Gulberg 3, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>+92 333 0481 399</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>+92 317 4848 375</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>info@borderlinevisa.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/application-process" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Application Process
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Appointments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on visa policies and services.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="gradient-primary hover:opacity-90 btn-hover">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Authorization Note */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Authorized by Chinese Embassy of Pakistan and asserted by Gerry Visa International
          </p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Borderline Visa Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

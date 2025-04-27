
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-90"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-700">Saurabh Upadhayay</Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`font-medium transition-colors ${location.pathname === "/" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>Home</Link>
          <Link to="/about" className={`font-medium transition-colors ${location.pathname === "/about" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>About</Link>
          <Link to="/experience" className={`font-medium transition-colors ${location.pathname === "/experience" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>Experience</Link>
          <Link to="/projects" className={`font-medium transition-colors ${location.pathname === "/projects" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>Projects</Link>
          <Link to="/contact" className={`font-medium transition-colors ${location.pathname === "/contact" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>Contact</Link>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 font-medium transition-colors ${location.pathname === "/" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`py-2 font-medium transition-colors ${location.pathname === "/about" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/experience" 
              className={`py-2 font-medium transition-colors ${location.pathname === "/experience" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              to="/projects" 
              className={`py-2 font-medium transition-colors ${location.pathname === "/projects" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 font-medium transition-colors ${location.pathname === "/contact" ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

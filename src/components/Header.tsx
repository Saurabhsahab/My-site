
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Increased header offset
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = () => {
    setIsMenuOpen(false);
    navigate('/projects');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const navItems = [
    { id: "home", label: "Home", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "experience", label: "Experience", type: "scroll" },
    { path: "/projects", label: "Projects", type: "route", onClick: handleProjectsClick },
    { id: "contact", label: "Contact", type: "scroll" }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/80' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Code2 className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">
                Saurabh Upadhayay
              </span>
              <p className="text-sm text-gray-600 font-medium">Software Engineer</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.type === "route" ? (
                  <button
                    onClick={item.onClick}
                    className={`relative font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl text-sm ${
                      location.pathname === item.path 
                        ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg transform scale-105" 
                        : "text-gray-700 hover:text-purple-700 hover:bg-purple-50/80 hover:scale-105"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id!)}
                    className={`relative font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl text-sm ${
                      activeSection === item.id && location.pathname === '/'
                        ? "text-purple-700 bg-purple-100/80 shadow-md transform scale-105"
                        : "text-gray-700 hover:text-purple-700 hover:bg-purple-50/80 hover:scale-105"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && location.pathname === '/' && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-x-1/2 translate-y-1"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>
          
          <div className="lg:hidden">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-white/95 border-2 border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-lg"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/80 shadow-xl z-[110]"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.type === "route" ? (
                    <button
                      onClick={item.onClick}
                      className={`block py-4 px-6 rounded-xl font-semibold transition-all duration-300 w-full text-left ${
                        location.pathname === item.path 
                          ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg" 
                          : "text-gray-700 hover:text-purple-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id!)}
                      className={`block py-4 px-6 rounded-xl font-semibold transition-all duration-300 w-full text-left ${
                        activeSection === item.id && location.pathname === '/'
                          ? "text-purple-700 bg-purple-100 shadow-md border border-purple-300"
                          : "text-gray-700 hover:text-purple-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

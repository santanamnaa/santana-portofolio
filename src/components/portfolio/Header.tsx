import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/projects", label: "projects" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500 py-4">
      <div className="container mx-auto px-6">
        <nav className={`bg-background/95 backdrop-blur-md border border-border/40 rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'px-4 py-3 shadow-lg shadow-black/5' 
            : 'px-6 py-4 shadow-md shadow-black/5'
        }`}>
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className={`font-semibold text-foreground transition-all duration-500 ${
                isScrolled ? 'text-sm' : 'text-base'
              } hover:opacity-70`}
            >
              santana mena
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium text-foreground transition-all duration-300 hover:opacity-100 ${
                      isActive 
                        ? 'opacity-100 font-semibold' 
                        : 'opacity-70'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* <Button
                asChild
                variant="ghost"
                size="sm"
                className={`gap-1 transition-all duration-500 ${
                  isScrolled ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'
                } hover:opacity-70`}
              >
                <a
                  href="/cv/CV_ATS_SantanaMena4.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-3 w-3" />
                  resume
                </a>
              </Button> */}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-3">
          <div className="container mx-auto px-6">
            <div className="bg-background/95 backdrop-blur-md border border-border/40 rounded-2xl px-6 py-4 space-y-3 shadow-lg shadow-black/5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium text-foreground transition-all duration-300 ${
                      isActive ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1 text-sm font-light mt-2"
              >
                <Download className="h-3 w-3" />
                resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
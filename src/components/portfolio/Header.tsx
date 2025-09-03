import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Santana</span> Mena
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className={`transition-colors ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={`transition-colors ${location.pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            About
          </Link>
          <Link 
            to="/services"
            className={`transition-colors ${location.pathname === '/services' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Services
          </Link>
          <Link 
            to="/projects"
            className={`transition-colors ${location.pathname === '/projects' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Projects
          </Link>
          <Link 
            to="/contact"
            className={`transition-colors ${location.pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Contact
          </Link>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/50">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-colors ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-colors ${location.pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
            <Link 
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-colors ${location.pathname === '/services' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Services
            </Link>
            <Link 
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-colors ${location.pathname === '/projects' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left transition-colors ${location.pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Contact
            </Link>
            <Button variant="outline" size="sm" className="gap-2 w-full">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
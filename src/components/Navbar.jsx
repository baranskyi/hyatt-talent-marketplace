import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Calendar, User, LayoutDashboard, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/shifts', label: 'Browse Shifts', icon: Briefcase },
    { path: '/my-shifts', label: 'My Shifts', icon: Calendar },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/admin', label: 'Admin', icon: LayoutDashboard },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-hyatt-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/hyatt-hotels.png"
              alt="Hyatt"
              className="h-10 w-auto"
            />
            <div className="hidden sm:flex items-center">
              <span className="text-white/50 mx-2">|</span>
              <span className="text-hyatt-gold font-semibold text-lg">Talent Marketplace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-hyatt-gold text-hyatt-blue'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <link.icon size={18} />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-hyatt-blue border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-hyatt-gold text-hyatt-blue'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <link.icon size={18} />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';
  import { useState, useEffect } from 'react';
  import Link from 'next/link';
  import { Menu, X } from 'lucide-react';
import Image from 'next/image';
  
  export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-white font-bold text-xl">
              <Image src="/ervin_logo.png" alt="Logo" width={120} height={40} />
            </Link>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
    const links = [
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#products', label: 'Products' },
      { href: '#contact', label: 'Contact' },
    ];
  
    return (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-white hover:text-secondary transition-colors ${
              mobile ? 'block px-3 py-2' : ''
            }`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        ))}
      </>
    );
  };
  
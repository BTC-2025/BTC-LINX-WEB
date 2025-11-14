'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Solutions', href: '/solutions-overview' },
    { name: 'AI Calling', href: '/ai-calling-solutions' },
    { name: 'Industries', href: '/industries-we-serve' },
    { name: 'Technology', href: '/technology-stack' },
  ];

  const moreMenuItems = [
    { name: 'About Us', href: '/about-us' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-soft border-b border-border' 
          : 'bg-background'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-foreground"
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground leading-none">
                BTC Linx
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                <span>More</span>
                <Icon name="ChevronDownIcon" size={16} />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/ai-calling-solutions"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              See AI Demo
            </Link>
            <Link
              href="/solutions-overview"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-soft hover:shadow-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "XMarkIcon" : "Bars3Icon"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-smooth ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-surface border-t border-border">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              {moreMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Link
                href="/ai-calling-solutions"
                onClick={closeMenu}
                className="block w-full text-center px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors duration-200"
              >
                See AI Demo
              </Link>
              <Link
                href="/solutions-overview"
                onClick={closeMenu}
                className="block w-full text-center px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
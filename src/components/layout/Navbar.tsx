"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "À propos", href: "#about" },
  { name: "Produits", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Galerie", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg font-display font-bold text-xl group-hover:bg-secondary transition-colors">
            EK
          </div>
          <span
            className={cn(
              "font-display font-bold text-2xl tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            El Kheir
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-dark/80" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block">
            <Button
              variant={isScrolled ? "default" : "secondary"}
              className={cn(
                "rounded-full gap-2",
                !isScrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Contactez-nous</span>
            </Button>
          </a>

          <button
            className={cn(
              "md:hidden p-2 rounded-md",
              isScrolled ? "text-dark" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark font-medium text-lg py-2 border-b border-gray-50 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 gap-2 rounded-full h-12">
              <Phone className="w-4 h-4" />
              <span>Contactez-nous</span>
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

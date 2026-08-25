import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoPath from '@assets/afl_logo.png';

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[hsl(var(--navy))]/95 backdrop-blur-sm border-b border-[hsl(var(--gold))]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={logoPath} alt="Anderson Futbol Lab" className="h-12 w-12 object-contain" />
            <span className="hidden sm:block text-white font-display text-lg tracking-wide">
              ANDERSON FUTBOL LAB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.href)
                    ? 'text-[hsl(var(--gold))]'
                    : 'text-white/90 hover:text-[hsl(var(--gold))]'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link href="/register">
              <Button
                className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold tracking-wide"
                data-testid="button-register-nav"
              >
                REGISTER NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--gold))]/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive(link.href)
                      ? 'text-[hsl(var(--gold))]'
                      : 'text-white/90'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold tracking-wide"
                  data-testid="button-register-mobile"
                >
                  REGISTER NOW
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

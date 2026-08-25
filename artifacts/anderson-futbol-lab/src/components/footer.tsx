import { Link } from 'wouter';
import { Instagram, Mail, Phone } from 'lucide-react';
import logoPath from '@assets/afl_logo.png';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logoPath} alt="Anderson Futbol Lab" className="h-12 w-12 object-contain" />
              <span className="font-display text-lg tracking-wide">ANDERSON FUTBOL LAB</span>
            </div>
            <p className="text-white/70 text-sm">
              Elite soccer development for youth athletes in Mississauga, Ontario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm mb-4 text-[hsl(var(--gold))]">QUICK LINKS</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors">
                Programs
              </Link>
              <Link href="/register" className="text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors">
                Register
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm mb-4 text-[hsl(var(--gold))]">CONTACT</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:AndersonFutbolLab@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors"
              >
                <Mail size={16} />
                AndersonFutbolLab@gmail.com
              </a>
              <a
                href="tel:4377765626"
                className="flex items-center gap-2 text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors"
              >
                <Phone size={16} />
                (437) 776-5626
              </a>
              <a
                href="https://www.instagram.com/andersonfutbollab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[hsl(var(--gold))] text-sm transition-colors"
              >
                <Instagram size={16} />
                @andersonfutbollab
              </a>
              <p className="text-white/70 text-sm mt-2">
                Mississauga, Ontario, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} Anderson Futbol Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

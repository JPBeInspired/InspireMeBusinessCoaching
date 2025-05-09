import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background-section border-t border-ui-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Inspire Me Business Coaching</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-primary mt-1" />
                <p className="text-text-secondary">84 Pier St, Altona VIC 3018</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-primary" />
                <a href="mailto:admin@beinspired.group" className="text-text-secondary hover:text-accent-primary transition-colors">
                  contact@beinspired.group
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-primary" />
                <a href="tel:0400000000" className="text-text-secondary hover:text-accent-primary transition-colors">
                  0400 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-ui-border">
          <p className="text-text-secondary text-center">
            © {new Date().getFullYear()} Inspire Me Business Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
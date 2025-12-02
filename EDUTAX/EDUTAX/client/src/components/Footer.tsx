import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5" />
              <span className="text-sm" data-testid="footer-email">Edutax@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5" />
              <span className="text-sm" data-testid="footer-phone">+62 91813 23 2309</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm" data-testid="footer-location">Somewhere in the World</span>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/benefits" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-benefits">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-courses">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-testimonials">
                  Our Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-faq">
                  Our FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-company">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-achievements">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/goals" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover-elevate rounded-md px-2 py-1 -ml-2 inline-block" data-testid="footer-link-goals">
                  Our Goals
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/80" data-testid="footer-copyright">
              © 2025 Edutax. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Social Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate rounded-md p-1.5"
                  aria-label="Facebook"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate rounded-md p-1.5"
                  aria-label="Twitter"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate rounded-md p-1.5"
                  aria-label="LinkedIn"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

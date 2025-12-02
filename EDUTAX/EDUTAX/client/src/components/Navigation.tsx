import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/about", label: "About Us" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <Link href="/courses">
            <div className="flex items-center justify-center gap-2 text-sm font-medium hover-elevate rounded-md -mx-2 px-2 py-1 cursor-pointer" data-testid="banner-courses-link">
              <span className="flex items-center gap-2">
                Limited Courses
                <span className="hidden sm:inline">●</span>
                <span className="hidden sm:inline">Ends Soon, Join It Now</span>
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 font-bold text-xl text-foreground hover-elevate rounded-md px-2 py-1 -ml-2 cursor-pointer" data-testid="logo-link">
                <span className="text-primary">EDUTAX</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div
                    className={`text-sm font-medium hover-elevate rounded-md px-3 py-2 transition-colors cursor-pointer ${
                      location === link.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                    data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {isLoading ? (
                <div className="w-20 h-9 bg-muted animate-pulse rounded-md" />
              ) : isAuthenticated ? (
                <Button
                  variant="outline"
                  asChild
                  data-testid="button-logout"
                >
                  <Link href="/api/logout">Logout</Link>
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    asChild
                    data-testid="button-signup"
                  >
                    <Link href="/api/login">Sign Up</Link>
                  </Button>
                  <Button
                    asChild
                    data-testid="button-login"
                  >
                    <Link href="/api/login">Login</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover-elevate rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <div
                      className={`block px-3 py-2 rounded-md text-sm font-medium hover-elevate cursor-pointer ${
                        location === link.path
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  {isLoading ? (
                    <div className="w-full h-9 bg-muted animate-pulse rounded-md" />
                  ) : isAuthenticated ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                      data-testid="mobile-button-logout"
                    >
                      <a href="/api/logout">Logout</a>
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full"
                        asChild
                        data-testid="mobile-button-signup"
                      >
                        <a href="/api/login">Sign Up</a>
                      </Button>
                      <Button
                        className="w-full"
                        asChild
                        data-testid="mobile-button-login"
                      >
                        <a href="/api/login">Login</a>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

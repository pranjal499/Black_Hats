import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, X, Bell, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: "Home", href: "/", active: location.pathname === "/" },
    { name: "Calendar", href: "/calendar", active: location.pathname === "/calendar" },
    { name: "Profile", href: "/profile", active: location.pathname === "/profile" },
    { name: "Admin", href: "/admin", active: location.pathname === "/admin" },
    { name: "Docs", href: "/docs", active: location.pathname === "/docs" },
    { name: "Help", href: "/help", active: location.pathname === "/help" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-accent bg-clip-text text-transparent">
                EventHub
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block ${
                    item.active 
                      ? "bg-primary text-primary-foreground shadow-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search opportunities..." 
              className="pl-10 w-80 bg-background/50 border-border/50 focus:border-primary focus:bg-background"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></span>
            </Button>

            {/* User Profile */}
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
                <User className="w-4 h-4" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    item.active 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search opportunities..." 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { id: "/", label: "Home" },
    { id: "/reward", label: "Reward" },
    { id: "/about", label: "About Us" },
    { id: "/menu", label: "Menu" },
    { id: "/order", label: "Order" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo-mr-coffee.svg"
              alt="Logo Mr Coffee"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-[#693D3D]">MR.COFFEE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.id} to={item.id}>
                <Button
                  variant="ghost"
                  className={
                    isActive(item.id)
                      ? "bg-[#693D3D] hover:bg-[#8A5A5A] text-white hover:text-white"
                      : "text-amber-900 hover:bg-gray-100"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 pb-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.id} to={item.id}>
                  <Button
                    variant="ghost"
                    className={
                      isActive(item.id)
                        ? "w-full justify-start bg-[#693D3D] hover:bg-[#8A5A5A] text-white hover:text-white"
                        : "w-full justify-start text-amber-900 hover:bg-gray-100"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

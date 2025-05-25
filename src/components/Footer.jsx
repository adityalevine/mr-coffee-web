import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">MR.COFFEE</span>
            </Link>
            <p className="text-amber-100">
              Premium coffee experience with the finest beans from around the
              world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-amber-100">
              <Link to="/" className="block hover:text-white transition-colors">
                Home
              </Link>
              <Link
                to="/reward"
                className="block hover:text-white transition-colors"
              >
                Reward
              </Link>
              <Link
                to="/about"
                className="block hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/menu"
                className="block hover:text-white transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/order"
                className="block hover:text-white transition-colors"
              >
                Order
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-amber-100">
              <p>📞 +62 812-3456-7890</p>
              <p>✉️ info@mrcoffee.com</p>
              <p>📍 Jl. Coffee Street No. 123, Jakarta</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-amber-100">
              <p>Monday - Friday: 07:00 - 22:00</p>
              <p>Saturday - Sunday: 08:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2025 MR.COFFEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

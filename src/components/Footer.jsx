import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-black">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-center md:text-start ">
            🍽️ RecipeHub
          </h2>
          <p className="text-sm mt-2 text-center md:text-start">
            Discover simple, delicious, and homemade recipes from around the
            world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/recipe" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:underline">
                  All Recipes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <div>
            <h3 className="font-semibold mb-2">Connect Us</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  to="https://github.com/master-farhan"
                  target="blank"
                  className="hover:underline"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/farhansadik0760/"
                  target="blank"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="#" target="blank" className="hover:underline">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 py-4 border-t border-gray-800white">
        &copy; {new Date().getFullYear()} RecipeHub by Farhan. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;

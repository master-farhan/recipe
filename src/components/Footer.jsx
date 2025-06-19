import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "All Recipes", to: "/recipes" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/master-farhan",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-farhan-sadik-467340316/",
    },
    {
      label: "Portfolio",
      href: "https://master-farhan.github.io/studio/",
    },
  ];

  return (
    <footer className="bg-grow text-back mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">🍽️ RecipeHub</h2>
          <p className="text-sm mt-2">
            Discover simple, delicious, and homemade recipes from around the
            world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="font-semibold mb-2">Connect With Us</h3>
          <ul className="space-y-1 text-sm">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-back/50 py-4 border-t border-gray-300">
        &copy; {currentYear} RecipeHub by Farhan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

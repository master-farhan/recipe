import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/recipes", label: "Recipes" },
  { path: "/about", label: "About" },
  { path: "/create-resipe", label: "Create Recipe" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-2 md:gap-10 lg:gap-20 py-3 lg:py-5 lg:px-[3%] text-back">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `px-2 font-semibold pb-[1px] rounded trans ${
              isActive ? "bg-primary text-white" : "bg-transparent"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

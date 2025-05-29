import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center md:gap-10 gap-1 lg:gap-20 mb-[3%] bg-[#372d27] lg:py-5 py-3 lg:px-[3%]">
      <NavLink to="/" className={(e) => (e.isActive ? "navA" : "nav")}>
        Home
      </NavLink>
      <NavLink to="/recipes" className={(e) => (e.isActive ? "navA" : "nav")}>
        Recipes
      </NavLink>
      <NavLink to="/about" className={(e) => (e.isActive ? "navA" : "nav")}>
        About
      </NavLink>
      <NavLink
        to="/create-resipe"
        className={(e) => (e.isActive ? "navA" : "nav")}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import RecipeDet from "../pages/RecipeDet";
import UpdateRecipe from "../components/UpdateRecipe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<RecipeDet />}>
        <Route path="update" element={<UpdateRecipe />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/create-resipe" element={<Create />} />
    </Routes>
  );
};

export default MainRoutes;

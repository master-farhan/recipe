import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useContext(recipeContext);


  const filteredRecipes = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative">
      <Hero onSearch={(term) => setSearchTerm(term)} />
      <h2 className="text-center text-3xl mt-15 mb-7 font-semibold text-primary">Featured Recipes</h2>
      <div className="p-4 lg:p-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.slice(0,3).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Home;

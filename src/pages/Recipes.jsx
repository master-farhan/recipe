import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipe = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <section className="px-4 lg:px-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 pt-30 relative">
      <h2 className="text-center absolute top-10 w-full text-2xl md:text-4xl">Explore Our Delicious Recipes</h2>
      {data.length > 0 ? (
        renderRecipe
      ) : (
        <h2 className="absolute top-1/2 left-1/2 -translate-1/2 text-2xl whitespace-nowrap">
          No Recipe Found😞
        </h2>
      )}
    </section>
  );
};
export default Recipes;

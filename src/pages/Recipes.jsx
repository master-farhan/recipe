import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipe = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <section className="grid gap-6 px-[3%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
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

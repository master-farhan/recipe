import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Featured = () => {
  const { data } = useContext(recipeContext);

const renderRecipe = data.slice(0, 8).map((recipe) => {
  return <RecipeCard key={recipe.id} recipe={recipe} />;
});

  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-screen p-[3%] relative pt-30">
      <h2 className="text-center absolute top-10 w-full text-3xl">Featured Recipes</h2>
      {data.length > 0 ? (
        renderRecipe
      ) : (
        <h2 className="absolute top-1/2 left-1/2 -translate-1/2 text-2xl whitespace-nowrap">
          No Recipe Found😞
        </h2>
      )}
    </div>
  );
};

export default Featured;

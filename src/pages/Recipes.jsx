import { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext"; // ✅ import the actual context
import { useForm } from "react-hook-form";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext); // ✅ use the context object
  const [searchTerm, setSearchTerm] = useState("");

  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    setSearchTerm(formData.search); // ✅ update state
  };

  const filteredRecipes = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-4 lg:px-10 pb-20 pt-30 relative">
      <h2 className="text-center font-semibold -ml-4 lg:-ml-10 text-primary absolute top-10 w-full text-2xl md:text-4xl">
        Explore Our Delicious Recipes
      </h2>

      <div className="flex justify-center items-center pb-10">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex rounded border border-primary"
        >
          <input
            className="text-primary font-medium border-none px-5 py-1 outline-0 text-lg w-full sm:w-90"
            placeholder="Search recipe"
            {...register("search")}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 px-5 py-1 cursor-pointer trans text-grow font-semibold"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid gap-15 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <h2 className="text-center col-span-3 font-semibold animate-pulse py-20 text-2xl whitespace-nowrap">
            No Recipe Found 😞
          </h2>
        )}
      </div>
    </section>
  );
};

export default Recipes;

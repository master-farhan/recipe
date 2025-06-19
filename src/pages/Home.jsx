import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import SupportSection from "../components/SupportSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useContext(recipeContext);

  const filteredRecipes = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative">
      <Hero onSearch={(term) => setSearchTerm(term)} />
      <h2 className="text-3xl text-center pt-20 sm:text-4xl font-bold text-primary">
        🍽️ Featured Recipes
      </h2>
      <p className="text-center my-5 text-lg">Handpicked dishes loved by our food community. Try something new today!</p>
      <div className="p-4 lg:p-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {filteredRecipes.slice(0, 6).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <SupportSection />
      <TestimonialSection />
    </section>
  );
};

export default Home;

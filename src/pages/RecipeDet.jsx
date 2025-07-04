import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeDet = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const deleteHandler = () => {
    const filterData = data.filter((f) => f.id != params.id);
    setData(filterData);

    localStorage.setItem("recipe", JSON.stringify(filterData));

    toast.success("Recipe Deleted");
  };

  return recipe ? (
    <section className="flex flex-col justify-between lg:flex-row overflow-auto py-20 px-[3%] relative w-screen md:min-h-3/5  lg:min-h-5/6">
      <div className="h-60 lg:w-[36vw] lg:h-[55vh]">
        <img
          src={recipe.image}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="lg:w-[55vw]  relative">
        <h1 className="text-4xl font-medium mb-3">{recipe.title}</h1>
        <h5 className="font-bold opacity-80">{recipe.chef}</h5>
        <p className="pb-3">{recipe.desc}</p>
        <p className="font-medium opacity-80">{recipe.catagory}</p>
        <p className="pb-3">{recipe.instruction}</p>
        <p className="mb-5">{recipe.ingredients}</p>

        <Link
          to={`update`}
          className="bg-primary hover:bg-primary/90 trans pt-1 pb-[5px] text-back  px-5 rounded active:scale-98 mr-5 transition duration-300"
        >
          Update
        </Link>
        <Link
          to="/recipes"
          onClick={deleteHandler}
          className="bg-red-600 hover:bg-red-500 pt-1 pb-[5px] text-back px-5 rounded active:scale-98 trans"
        >
          Delate
        </Link>
      </div>{" "}
      <Outlet />
    </section>
  ) : (
    <small className="absolute top-1/2 left-1/2 -translate-1/2 text-5xl animate-pulse growspace-nowrap tracking-wider">
      Loding...
    </small>
  );
};

export default RecipeDet;

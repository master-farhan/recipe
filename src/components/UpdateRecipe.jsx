import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, setData } = useContext(recipeContext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      instruction: recipe?.instruction,
      catagory: recipe?.catagory,
    },
  });

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);

    localStorage.setItem("recipe", JSON.stringify(copyData));

    toast.success("Recipe Updated!");
    navigate(-1);
  };
  return (
    <div>
      <div className="h-full w-full bg-black opacity-70 absolute top-0 left-0 "></div>
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="flex flex-col gap-5 w-[90vw] max-w-[500px] bg-grow rounded-xl shadow-lg py-5 px-4 md:px-10 border-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h2 className="text-2xl text-center font-semibold text-primary">Update Recipe</h2>

        <input
          {...register("image")}
          className="border-b-1 border-primary outline-none p-2 text-sm"
          type="url"
          placeholder="Enter image URL"
        />

        <input
          {...register("title")}
          className="border-b-1 border-primary outline-none p-2 text-sm"
          type="text"
          placeholder="Recipe title"
        />

        <textarea
          {...register("desc")}
          className="border-b-1 border-primary outline-none p-2 text-sm"
          rows={2}
          placeholder="Write recipe description"
        ></textarea>

        <textarea
          {...register("instruction")}
          className="border-b-1 border-primary outline-none p-2 text-sm"
          rows={2}
          placeholder="Write instructions"
        ></textarea>

        <input
          {...register("chef")}
          className="border-b-1 border-primary outline-none p-2 text-sm"
          type="text"
          placeholder="Chef name"
        />

        <div className="flex justify-between items-center mt-4">
          <select
            {...register("catagory")}
            className="border border-primary rounded-md px-4 py-2 text-sm outline-none"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>

          <div className="flex gap-3">
            <Link
              to={-1}
              className="bg-gray-500 text-grow px-4 py-2 rounded  text-sm transition duration-300"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-primary trans hover:bg-primary/90 cursor-pointer text-grow px-5 py-1 rounded text-sm transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipe;

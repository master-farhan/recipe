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
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
      desc: recipe.desc,
      instruction: recipe.instruction,
      ingredients: recipe.ingredients,
      catagory: recipe.catagory,
    },
  });

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    toast.success("Recipe Updated!");
    navigate(-1);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-2 w-full lg:w-3/5 bg-[#372D27] rounded-xl shadow-lg p-2 mt-5 md:mb-[17vw] lg:mb-5 border border-[#4f3c32]"
    >
      <h2 className="text-2xl font-semibold">Update Recipe</h2>

      <input
        {...register("image")}
        className="border-b-2 outline-none p-2 text-sm"
        type="url"
        placeholder="Enter image URL"
      />

      <input
        {...register("title")}
        className="border-b-2 outline-none p-2 text-sm"
        type="text"
        placeholder="Recipe title"
      />

      <textarea
        {...register("desc")}
        className="border-b-2 outline-none p-2 text-sm"
        rows={3}
        placeholder="Write recipe description"
      ></textarea>

      <textarea
        {...register("instruction")}
        className="border-b-2 outline-none p-2 text-sm"
        rows={3}
        placeholder="Write instructions"
      ></textarea>

      <textarea
        {...register("ingredients")}
        className="border-b-2 outline-none p-2 text-sm"
        rows={3}
        placeholder="List ingredients"
      ></textarea>

      <input
        {...register("chef")}
        className="border-b-2 outline-none p-2 text-sm"
        type="text"
        placeholder="Chef name"
      />

      <div className="flex justify-between items-center mt-4">
        <select
          {...register("catagory")}
          className="border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Supper">Supper</option>
          <option value="Dinner">Dinner</option>
        </select>

        <div className="flex gap-3">
          <Link
            to={-1}
            className="bg-gray-500 text-white px-4 py-2 rounded  text-sm"
          >
            Back
          </Link>
          <button
            type="submit"
            className="bg-[#F4722B] cursor-pointer text-white px-5 py-1 rounded text-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateRecipe;

import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const createHandler = (recipe) => {
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    setData(copyData);

    localStorage.setItem("recipe", JSON.stringify(copyData));

    reset();
    toast.success("New resipe created!");
    navigate("/recipes");
  };

  return (
    <div className="p-[3%] flex justify-center items-center lg:min-h-screen">
      <form
        onSubmit={handleSubmit(createHandler)}
        className="flex flex-col gap-5 md:gap-10 lg:gap-3 md:p-10 w-full max-w-100 rounded-2xl shadow-2xs p-5 bg-[#372D27] "
      >
        <h2 className="text-4xl font-semibold text-center text-white">
          Create Recipe
        </h2>

        <input
          {...register("image")}
          required
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          type="url"
          placeholder="Enter image URL"
        />

        <input
          {...register("title")}
          required
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          type="text"
          placeholder="Recipe title"
        />

        <textarea
          {...register("desc")}
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          placeholder="Write recipe description"
          rows={3}
        ></textarea>

        <textarea
          {...register("instruction")}
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          placeholder="Write instructions"
          rows={4}
        ></textarea>

        <textarea
          {...register("ingredients")}
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          placeholder="Ingredients of your recipe"
          rows={3}
        ></textarea>

        <input
          {...register("chef")}
          required
          className="border-b border-gray-400 outline-none py-2 px-1 text-sm"
          type="text"
          placeholder="Chef name"
        />

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
          <select
            {...register("catagory")}
            className="border bg-[#372D27]  border-gray-400 outline-none py-2 px-3 text-sm rounded-md"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="bg-[#F4722B] hover:bg-[#f4712bc4] cursor-pointer text-white px-6 py-2 rounded-md text-sm transition-transform active:scale-95"
          >
            Save Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

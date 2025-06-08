import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { title, id, image, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="flex flex-col justify-between gap-2 border border-[#d3d0cd] bg-[#e0d9d4] rounded-xl shadow p-6"
    >
      <h1 className="text-3xl font-medium px-2">{title}</h1>
      <img src={image} className="w-full h-30 object-cover" />
      <h4 className="font-bold opacity-80 px-2">{chef}</h4>
      <p className="p-2">
        {desc.slice(0 - 100)} ...
        <small className="text-blue-600">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;

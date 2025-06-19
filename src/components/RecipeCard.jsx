import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { title, id, image, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="flex flex-col justify-between gap-3 border border-transparent trans text-back hover:border-primary bg-grow rounded-xl shadow p-6"
    >
      <h1 className="text-2xl text-primary font-medium px-2">{title}</h1>
      <img src={image} className="w-full h-30 object-cover" />
      <h4 className="font-bold opacity-80 px-2">{chef}</h4>
      <p className="px-2">
        {desc.slice(0 - 100)} ...
        <small className="text-primary">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;

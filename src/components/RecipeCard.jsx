import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { title, id, image, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="flex flex-col justify-between gap-3 border border-transparent trans text-back hover:border-primary bg-grow rounded shadow p-5"
    >
      <img src={image} className="w-full h-30 object-cover rounded-t" />
      <h1 className="text-xl text-primary font-medium">{title}</h1>
      <h4 className="font-bold opacity-80">{chef}</h4>
      <p className="-mt-2">
        {desc.slice(0 - 100)} ...
        <small className="text-primary">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;

import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

// {
//     id: 1,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 2,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 3,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 31,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 11,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 21,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 41,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },
//   {
//     id: 111,
//     title: "Chicken Biryani",
//     image: "https://cdn.dummyjson.com/recipe-images/11.webp",
//     desc: "Download the React DevTools for a better development experience Download the React DevTools for a better development experience Download the React DevTools for a better development experience",
//     chef: "farhan",
//     instruction:
//       "nload the React DevTools for a better development experience Download the React DevTools for a better development experience Download the",
//     ingredients: "load the React, Deload the React, Deload the React De",
//     catagory: "Dinner",
//   },

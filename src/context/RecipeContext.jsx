import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Spaghetti Bolognese",
      image:
        "https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-12-768x1024.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare spaghetti bolognese go here.",
      desc: "A delicious recipe for spaghetti bolognese that's easy to prepare and full of flavor.",
    },
    {
      id: 2,
      title: "Chicken Curry",
      image:
        "https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare chicken curry go here.",
      desc: "A delicious recipe for chicken curry that's easy to prepare and full of flavor.",
    },
    {
      id: 3,
      title: "Fried Rice",
      image:
        "https://cicili.tv/wp-content/uploads/2024/08/Chicken-Fried-Rice-Small-2.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare fried rice go here.",
      desc: "A delicious recipe for fried rice that's easy to prepare and full of flavor.",
    },
    {
      id: 4,
      title: "Grilled Cheese Sandwich",
      image:
        "https://www.allrecipes.com/thmb/pnEUcAXDg5GUJ77fUDzZp41NWkE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-238891-Grilled-Cheese-Sandwich-beauty-4x3-362f705972e64a948b7ec547f7b2a831.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare grilled cheese sandwich go here.",
      desc: "A delicious recipe for grilled cheese sandwich that's easy to prepare and full of flavor.",
    },
    {
      id: 5,
      title: "Pancakes",
      image:
        "https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare pancakes go here.",
      desc: "A delicious recipe for pancakes that's easy to prepare and full of flavor.",
    },
    {
      id: 6,
      title: "Caesar Salad",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare caesar salad go here.",
      desc: "A delicious recipe for caesar salad that's easy to prepare and full of flavor.",
    },
    {
      id: 7,
      title: "Tomato Soup",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare tomato soup go here.",
      desc: "A delicious recipe for tomato soup that's easy to prepare and full of flavor.",
    },
    {
      id: 8,
      title: "Beef Tacos",
      image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare beef tacos go here.",
      desc: "A delicious recipe for beef tacos that's easy to prepare and full of flavor.",
    },
    {
      id: 9,
      title: "Vegetable Stir Fry",
      image:
        "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-SQ.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare vegetable stir fry go here.",
      desc: "A delicious recipe for vegetable stir fry that's easy to prepare and full of flavor.",
    },
    {
      id: 10,
      title: "Chicken Alfredo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGQ9qxmc9P8wxvuFOns88aDBmi9yQvRhjAg&s",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare chicken alfredo go here.",
      desc: "A delicious recipe for chicken alfredo that's easy to prepare and full of flavor.",
    },
    {
      id: 11,
      title: "Fish and Chips",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/960px-Fish_and_chips_blackpool.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare fish and chips go here.",
      desc: "A delicious recipe for fish and chips that's easy to prepare and full of flavor.",
    },
    {
      id: 12,
      title: "Shrimp Scampi",
      image:
        "https://www.allrecipes.com/thmb/gGiZlDOs_cqp65nB23gsVlcmBI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-19508-shrimp-scampi-VAT-hero-01-4x3-f5a1c9cadca542919285caa8dcf5d135.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare shrimp scampi go here.",
      desc: "A delicious recipe for shrimp scampi that's easy to prepare and full of flavor.",
    },
    {
      id: 13,
      title: "Veggie Burger",
      image:
        "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare veggie burger go here.",
      desc: "A delicious recipe for veggie burger that's easy to prepare and full of flavor.",
    },
    {
      id: 14,
      title: "Mushroom Risotto",
      image:
        "https://www.allrecipes.com/thmb/854efwMYEwilYjKr0FiF4FkwBvM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-DDMFS-4x3-a8a80a8deb064c6a8f15452b808a0258.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare mushroom risotto go here.",
      desc: "A delicious recipe for mushroom risotto that's easy to prepare and full of flavor.",
    },
    {
      id: 15,
      title: "Beef Stroganoff",
      image:
        "https://www.allrecipes.com/thmb/mSWde3PHTu-fDkbvWBw0D1JlS8U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25202beef-stroganoff-iii-ddmfs-3x4-233-0f26fa477e9c446b970a32502468efc6.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare beef stroganoff go here.",
      desc: "A delicious recipe for beef stroganoff that's easy to prepare and full of flavor.",
    },
    {
      id: 16,
      title: "Lentil Soup",
      image:
        "https://www.allrecipes.com/thmb/UeFtapHyGFBo4Lx-72GxgjrOGnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare lentil soup go here.",
      desc: "A delicious recipe for lentil soup that's easy to prepare and full of flavor.",
    },
    {
      id: 17,
      title: "Stuffed Peppers",
      image:
        "https://embed.widencdn.net/img/beef/t9bwp7fitq/exact/Stuffed%20Peppers%20-%20NCBA%20Beef%20Aug%20202431717.jpg?keep=c&u=7fueml",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare stuffed peppers go here.",
      desc: "A delicious recipe for stuffed peppers that's easy to prepare and full of flavor.",
    },
    {
      id: 18,
      title: "Egg Fried Rice",
      image:
        "https://www.allrecipes.com/thmb/GxHYGQD4Vh9BBu-EDlSv5XGBJNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-23298-egg-fried-rice-VAT-4x3-2closeup-ab653366830b41cc8d62627939ccc6c7.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare egg fried rice go here.",
      desc: "A delicious recipe for egg fried rice that's easy to prepare and full of flavor.",
    },
    {
      id: 19,
      title: "BBQ Chicken Wings",
      image:
        "https://www.thecookierookie.com/wp-content/uploads/2024/02/bbq-chicken-wings-recipe-featured-image.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare bbq chicken wings go here.",
      desc: "A delicious recipe for bbq chicken wings that's easy to prepare and full of flavor.",
    },
    {
      id: 20,
      title: "Chicken Caesar Wrap",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnkHMqoT9P_r1LMD8r1B8UGydHOXYZu4vYQ&s",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare chicken caesar wrap go here.",
      desc: "A delicious recipe for chicken caesar wrap that's easy to prepare and full of flavor.",
    },
    {
      id: 21,
      title: "Garlic Butter Salmon",
      image:
        "https://www.recipetineats.com/tachyon/2021/03/Garlic-Butter-Salmon_9-SQ.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare garlic butter salmon go here.",
      desc: "A delicious recipe for garlic butter salmon that's easy to prepare and full of flavor.",
    },
    {
      id: 22,
      title: "Greek Salad",
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_salad_16407_16x9.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare greek salad go here.",
      desc: "A delicious recipe for greek salad that's easy to prepare and full of flavor.",
    },
    {
      id: 23,
      title: "Chocolate Chip Cookies",
      image:
        "https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_448_448.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare chocolate chip cookies go here.",
      desc: "A delicious recipe for chocolate chip cookies that's easy to prepare and full of flavor.",
    },
    {
      id: 24,
      title: "Banana Bread",
      image:
        "https://www.mybakingaddiction.com/wp-content/uploads/2024/05/sliced-peanut-butter-banana-bread-hero.jpg",
      ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
      instruction: "instruction to prepare banana bread go here.",
      desc: "A delicious recipe for banana bread that's easy to prepare and full of flavor.",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(data));

    setData(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

// const recipe = [
//   {
//     id: 25,
//     title: "French Toast",
//     image: "https://source.unsplash.com/featured/?french-toast",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare french toast go here.",
//     desc: "A delicious recipe for french toast that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 26,
//     title: "Chicken Noodle Soup",
//     image: "https://source.unsplash.com/featured/?chicken-noodle-soup",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare chicken noodle soup go here.",
//     desc: "A delicious recipe for chicken noodle soup that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 27,
//     title: "Baked Ziti",
//     image: "https://source.unsplash.com/featured/?baked-ziti",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare baked ziti go here.",
//     desc: "A delicious recipe for baked ziti that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 28,
//     title: "Tuna Salad",
//     image: "https://source.unsplash.com/featured/?tuna-salad",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare tuna salad go here.",
//     desc: "A delicious recipe for tuna salad that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 29,
//     title: "Avocado Toast",
//     image: "https://source.unsplash.com/featured/?avocado-toast",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare avocado toast go here.",
//     desc: "A delicious recipe for avocado toast that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 30,
//     title: "Mac and Cheese",
//     image: "https://source.unsplash.com/featured/?mac-and-cheese",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare mac and cheese go here.",
//     desc: "A delicious recipe for mac and cheese that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 31,
//     title: "Chili Con Carne",
//     image: "https://source.unsplash.com/featured/?chili-con-carne",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare chili con carne go here.",
//     desc: "A delicious recipe for chili con carne that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 32,
//     title: "Eggplant Parmesan",
//     image: "https://source.unsplash.com/featured/?eggplant-parmesan",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare eggplant parmesan go here.",
//     desc: "A delicious recipe for eggplant parmesan that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 33,
//     title: "Teriyaki Chicken",
//     image: "https://source.unsplash.com/featured/?teriyaki-chicken",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare teriyaki chicken go here.",
//     desc: "A delicious recipe for teriyaki chicken that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 34,
//     title: "Pulled Pork Sandwich",
//     image: "https://source.unsplash.com/featured/?pulled-pork-sandwich",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare pulled pork sandwich go here.",
//     desc: "A delicious recipe for pulled pork sandwich that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 35,
//     title: "Veggie Pizza",
//     image: "https://source.unsplash.com/featured/?veggie-pizza",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare veggie pizza go here.",
//     desc: "A delicious recipe for veggie pizza that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 36,
//     title: "Beef Burger",
//     image: "https://source.unsplash.com/featured/?beef-burger",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare beef burger go here.",
//     desc: "A delicious recipe for beef burger that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 37,
//     title: "Coconut Curry",
//     image: "https://source.unsplash.com/featured/?coconut-curry",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare coconut curry go here.",
//     desc: "A delicious recipe for coconut curry that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 38,
//     title: "Tandoori Chicken",
//     image: "https://source.unsplash.com/featured/?tandoori-chicken",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare tandoori chicken go here.",
//     desc: "A delicious recipe for tandoori chicken that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 39,
//     title: "Falafel Wrap",
//     image: "https://source.unsplash.com/featured/?falafel-wrap",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare falafel wrap go here.",
//     desc: "A delicious recipe for falafel wrap that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 40,
//     title: "Tofu Stir Fry",
//     image: "https://source.unsplash.com/featured/?tofu-stir-fry",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare tofu stir fry go here.",
//     desc: "A delicious recipe for tofu stir fry that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 41,
//     title: "Chicken Fajitas",
//     image: "https://source.unsplash.com/featured/?chicken-fajitas",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare chicken fajitas go here.",
//     desc: "A delicious recipe for chicken fajitas that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 42,
//     title: "Spinach Quiche",
//     image: "https://source.unsplash.com/featured/?spinach-quiche",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare spinach quiche go here.",
//     desc: "A delicious recipe for spinach quiche that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 43,
//     title: "Zucchini Noodles",
//     image: "https://source.unsplash.com/featured/?zucchini-noodles",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare zucchini noodles go here.",
//     desc: "A delicious recipe for zucchini noodles that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 44,
//     title: "Biryani",
//     image: "https://source.unsplash.com/featured/?biryani",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare biryani go here.",
//     desc: "A delicious recipe for biryani that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 45,
//     title: "Hummus and Pita",
//     image: "https://source.unsplash.com/featured/?hummus-and-pita",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare hummus and pita go here.",
//     desc: "A delicious recipe for hummus and pita that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 46,
//     title: "Miso Soup",
//     image: "https://source.unsplash.com/featured/?miso-soup",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare miso soup go here.",
//     desc: "A delicious recipe for miso soup that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 47,
//     title: "Ramen",
//     image: "https://source.unsplash.com/featured/?ramen",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare ramen go here.",
//     desc: "A delicious recipe for ramen that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 48,
//     title: "Sushi Rolls",
//     image: "https://source.unsplash.com/featured/?sushi-rolls",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare sushi rolls go here.",
//     desc: "A delicious recipe for sushi rolls that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 49,
//     title: "Chicken Parmesan",
//     image: "https://source.unsplash.com/featured/?chicken-parmesan",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare chicken parmesan go here.",
//     desc: "A delicious recipe for chicken parmesan that's easy to prepare and full of flavor.",
//   },
//   {
//     id: 50,
//     title: "Gnocchi with Tomato Sauce",
//     image: "https://source.unsplash.com/featured/?gnocchi-with-tomato-sauce",
//     ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
//     instruction: "instruction to prepare gnocchi with tomato sauce go here.",
//     desc: "A delicious recipe for gnocchi with tomato sauce that's easy to prepare and full of flavor.",
//   },
// ];

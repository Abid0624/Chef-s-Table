import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-6">
              <img
                className="md:h-52 w-full rounded-xl"
                src={recipe.recipe_image}
                alt="recipe-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-medium text-gray-800">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-600 text-base">
                {recipe.short_description}
              </p>
              <h3 className="text-lg font-medium text-gray-800">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul className="ml-8">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx} className="list-disc text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

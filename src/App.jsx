import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already exist in the queue");
    }
  };

  // console.log(recipeQueue);

  const handleRemoved = (id) => {
    // find which recipe to delete
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => {
    const timeNumber = parseInt(time);
    const caloriesNumber = parseFloat(calories);
    setTotalTime(totalTime + timeNumber);
    setTotalCalories(totalCalories + caloriesNumber);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes section */}
      <OurRecipes></OurRecipes>
      {/* recipes card section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* card section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* side bar */}
        <Sidebar
          handleRemoved={handleRemoved}
          recipeQueue={recipeQueue}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;

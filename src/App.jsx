import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
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
        <Recipes></Recipes>
        {/* side bar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;

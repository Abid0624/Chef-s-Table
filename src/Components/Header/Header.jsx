const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
      {/* Name */}
      <h1 className="font-bold text-4xl">Chef's Table</h1>
      {/* menu start */}
      <ul className="flex gap-6 text-gray-600 font-semibold text-base">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
      </ul>
      {/* search bar and logo */}
      <div className="flex justify-between items-center gap-6">
        {/* search */}
        <div className="flex justify-between items-center relative gap-2">
          <input
            className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray-800 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <div className="absolute -left-1 pl-4 flex items-center justify-center text-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* menu bar */}
          <div className="bg-green-400 w-12 h-12 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-user text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

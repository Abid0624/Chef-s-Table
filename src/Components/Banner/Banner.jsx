const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl md:w-full py-20 h-full mb-10"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/0Gw3hxr/Rectangle-1.png)",
      }}
    >
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center space-y-6 py-4">
        <h1 className="font-bold text-white md:text-[3.25rem]">
          Discover an exceptional cooking class tailored from you
        </h1>
        <p className="text-white text-lg">
          Indulge in a dining experience like no other, where every dish is
          crafted with passion and the finest ingredients. Join us for a
          memorable meal, where comfort meets exceptional flavor in every bite.
        </p>
        <div className="flex gap-4 text-xl font-semibold">
          <button className="btn bg-green-500 rounded-full border-none">
            Explore Now
          </button>
          <button className="btn btn-outline text-white hover:bg-green-500 rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const My_Favorites = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-primary p-4 h-[50vh] flex flex-col items-center justify-center space-y-10 text-center">
        <p className="font-light text-4xl">
          Download Free Vectors, Photos, Icons, Unveal Your Creativity Today!
        </p>

        <div className="flex items-center max-w-screen-md w-full bg-white rounded-2xl justify-around">
          <p className="ml-4">Assests</p>
          <i className="ri-arrow-drop-down-line text-3xl"></i>
          <input
            type="text"
            name="search"
            className="p-4 w-3/4 outline-none"
            placeholder="Search all assets..."
          />
          <i className="ri-search-line mr-4 bg-tertiary px-4 py-2 rounded-2xl text-xl text-white"></i>
        </div>
      </section>
      <section className="p-4 flex flex-col items-center md:grid grid-rows-6 grid-cols-3 gap-x-4">
        <div className="mt-10 hover:brightness-75 hover:transition-transform duration-300 relative">
          <img
            src="./assests/image1.webp"
            alt="img1"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex justify-around items-center absolute bottom-4 w-full">
            <p className="">This is a title</p>
            <div>
              <i className="ri-heart-3-line text-xl p-3 hover:bg-tertiary hover:text-white hover:cursor-pointer rounded-full"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default My_Favorites;

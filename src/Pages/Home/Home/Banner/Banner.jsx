import banner from "../../../../assets/banner.jpg";
const Banner = () => {
  return (
<div className="relative">
      <img src={banner} alt="" className="w-full h-auto" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <div className="max-w-md mx-auto  p-6 rounded-md relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 px-4 pr-12 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="absolute inset-y-0 right-0 mt-1 mr-1 bg-blue-500 text-white px-4 h-12  rounded-md focus:outline-none hover:bg-blue-600 top-5">
            Search
          </button>
        </div>
        <div>
            <h3 className="text-5xl font-bold">Welcome <span className="text-pink-600 font-bold">THINK <span className="text-gray-200">UP</span></span></h3>
            <p className="text-white mt-5">THINK UP It is possible that such a website exists or has been created since then.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Navbar from "../grid/component/navbar";


const FlexContainer = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-4 shadow-lg rounded-lg flex flex-wrap justify-center">
        <div className="bg-blue-500 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 m-2 flex justify-center items-center rounded-full">
          1
        </div>
        <div className="bg-green-500 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 m-2 flex justify-center items-center rounded-full">
          2
        </div>
        <div className="bg-yellow-500 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 m-2 flex justify-center items-center rounded-full">
          3
        </div>
        <div className="bg-red-500 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 m-2 flex justify-center items-center rounded-full">
          4
        </div>
      </div>
      <Navbar/>
    </div>

  );
};

export default FlexContainer;

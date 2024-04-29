import Navbar from "./(group)/grid/component/navbar";

export default function Home() {
  return (
    <div id={"Home"} >
    <div className="backdrop-contrast-50 bg-blue/30 p-4 border-4 border-dashed min-h-[300]py-5 m-5">
      <h1 className="text-4xl md:text-6xl text-center italic font-semibold font-serif text-orange-700 bg-yellow-300 py-5 m-5 underline underline-offset-8 hover:bg-purple-400 ">
        MY FIRST HEADING
      </h1>
      <p className="text-lg md:text-xl text-gray-500 italic font-light font-serif bg-red-300 py-5 px-5 md:px-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nam
        voluptatibus maxime, ab quidem saepe magnam corporis odit fugiat
        consequatur velit quo nihil ducimus dolor doloribus{" "}
        <span className="text-red-400 underline underline-off-set-8 bg-sky-500 hover:bg-sky-700 decoration-white">
          {" "}
          hafiz naveed uddin{" "}
        </span>
        dolorum culpa libero! Temporibus. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Ad nam voluptatibus maxime, ab quidem
        saepe magnam corporis odit fugiat consequatur velit quo nihil ducimus
        dolor doloribus dolorum culpa libero! Temporibus.
      </p>
      <Navbar/>
      
    </div>
    </div>
  );
}

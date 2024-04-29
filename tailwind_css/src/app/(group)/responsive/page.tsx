import Navbar from "../grid/component/navbar";


export default function Responsive() {
  return (
    <div className="flex flex-col md:flex-row gap-5 bg-origin-border p-4 border-4 border-dashed p-5 m-5">
      <div className="md:w-1/3">
        <h1 className="text-3xl font-bold text-white mb-5">My First Web Page</h1>
        <div className="text-[18px] text-gray-400 font-serif italic mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          voluptatibus eveniet rerum culpa perferendis doloribus repudiandae,
          corrupti, molestias quod tempore repellendus nihil accusantium amet,
          aut quisquam. Dolore quam ullam itaque.
        </div>
      </div>
      <div className="md:w-2/3 flex flex-col items-center">
        <div className="text-[18px] text-red-400 font-serif italic mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores dolorem enim repellendus fuga. Tempora molestiae repellendus
          debitis odio harum, ut iure incidunt voluptate assumenda totam
          inventore obcaecati a eum.
        </div>
        <div className="text-[18px] text-pink-400 font-serif italic mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          exercitationem veritatis delectus. Minus quas totam ab facilis,
          eveniet quo qui a veniam cupiditate? Repellendus iusto unde placeat
          commodi ab? Sunt!
        </div>
      </div>
      <Navbar/>
    </div>
  );
}

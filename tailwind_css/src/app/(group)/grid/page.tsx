import Navbar from "./component/navbar";

export default function Grid(){
    return(
        <div id="grid">
        <div className="grid grid-row-4 gap-5 py-5 m-5 ">
            <div className="text-[36px] text-pink-400 bg-purple-500 font-serim italic m-5 ">item one</div>
            <div className="grid grid-cols-[200px,1fr] min-h-[400px] gap-5 text-center">
            <div className="text-[36px] text-pink-300 bg-gray-300 font-serim italic m-5 row-span-10"> item two </div>
            <div className="text-[36px] text-yellow-700 bg-blue-600 font-serim italic m-5 row-span-10"> item three</div>
            </div>
            <div className="text-[36px] text-pink-600 bg-purple-200 font-serim italic m-5"> item four</div>
           <Navbar/>
        </div>
        </div>
        
    )
}
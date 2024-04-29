export default function Grid2(){
    return(
        <div className="grid grid-rows-6 gap-1 m-16 bg-blue-200">
        <div className="bg-red-400 text-center ">one</div>
        <div className="bg-pink-400 cols-span-3 text-center row-span-4">2nd is the best</div>
        <div className="bg-purple-400 text-center row-span-1">Three</div>
        <div className="bg-red-400 text-center">4th</div>
        <div className="bg-pink-400 text-center ">5th</div>
        <div className="bg-purple-400 text-center">6th</div>
        
    </div>
    
    )
}
import Link from "next/link"


export default function Navbar(){
    return(
        <div>
        <Link className="bg-purple-300 font-bold gap-4" href="/shade2">SHADE2 </Link>
        <Link  className="bg-purple-300 font-bold" href="/shade3">SHADE3 </Link>
        <Link className="bg-purple-300 font-bold" href="/shade4">SHADE4 </Link>
        <Link className="bg-purple-300 font-bold" href="/shade5">SHADE5 </Link>
        
        </div>
    )
}
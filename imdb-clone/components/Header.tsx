import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
export default function Header() {
  return (
    <div className="flex justify-between mx-4 my-3 max-w-6xl sm:mx-auto items-center" >
        <div className="flex ">
        <MenuItem title="Home" address="/" Icon={AiFillHome}/>
        <MenuItem title="About" address="" Icon={AiFillInfoCircle}/>
        </div>
        <div className="flex"> 
        <h2 >
        <span className="text-2xl bg-amber-600 rounded-lg font-bold py-1 px-2">IMDb</span>
        </h2>
        <span><p className="text-2xl mx-1 my-1">Clone</p></span>
        
        </div>
    </div>
  )
}

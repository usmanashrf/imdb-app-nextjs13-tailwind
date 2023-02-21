import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between mx-4 my-3 max-w-6xl sm:mx-auto items-center" >
        <div className="flex ">
        <MenuItem title="Home" address="/" Icon={AiFillHome}/>
        <MenuItem title="About" address="" Icon={AiFillInfoCircle}/>
        </div>
        <div className="flex items-center space-x-5"> 
        <DarkModeSwitch/>
        <Link href={"/"}>
        <h2 >
        <span className="text-2xl bg-amber-600 rounded-lg font-bold py-1 px-2">IMDb</span>
        </h2>
        </Link>
        <p className="text-2xl my-1">Clone</p>
        
        </div>
    </div>
  )
}

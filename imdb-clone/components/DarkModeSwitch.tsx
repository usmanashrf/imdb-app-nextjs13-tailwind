'use client';
import {MdLightMode} from 'react-icons/md';
import {BsMoonFill} from "react-icons/bs";
import {useTheme} from "next-themes";

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme==="systme"? systemTheme:theme;
  return (
    <>
    {currentTheme === "dark" ? (
    <button onClick={()=>setTheme("light")}> <MdLightMode/>
    </button>):

    (<button  onClick={()=>setTheme("dark")}>
        <BsMoonFill/>
    </button>
    )
    }
     </>
  )
}

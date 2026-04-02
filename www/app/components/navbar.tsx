
"use client";
import { useTheme } from "next-themes"
import Link from "next/link"


export const Navbar  = () =>{
    const {theme , setTheme , resolvedTheme} = useTheme();

    return(
        <header className="w-full flex justify-center ">
            <nav className="max-w-2xl w-full py-2 md:pl-4 ">
                <ul className="flex gap-2">
                   <Link href="/">
                   <li className="">
                        Home
                    </li>
                   </Link> 
                   <button
                   onClick={()=> setTheme(resolvedTheme === "light" ? "dark" : "light")}
                   className="cursor-pointer"
                   >
                 {
                    theme === "light" ? <p>Dark</p>
                     : <p>Light</p>
                 }
                   </button>
                </ul>
            </nav>
        </header>
    )
}
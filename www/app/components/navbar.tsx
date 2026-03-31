
"use client";
import { useTheme } from "next-themes"
import Link from "next/link"


export const Navbar  = () =>{
    const {theme , setTheme , resolvedTheme} = useTheme();

    return(
        <header>
            <nav>
                <ul>
                   <Link href="/">
                   <li className=" ">
                        Home
                    </li>
                   </Link> 
                   <button
                   onClick={()=> setTheme(resolvedTheme === "light" ? "dark" : "light")}
                   >
                    Theme
                   </button>
                </ul>
            </nav>
        </header>
    )
}
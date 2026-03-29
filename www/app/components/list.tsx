
"use client";

import { useState } from "react"
import { dummyDataFirst } from "../data/dummy";
export const List =  () =>{
    const [currentList , setCurrrentList] = useState<number| null>(0);

    return(
        <div className="">
            {
                dummyDataFirst.map((el , id) =>{
                    return (
                        <div className={currentList == id ? `bg-neutral-300 text-black md:w-80 py-2 px-8 `: `bg-neutral-200 text-black md:w-80 py-2 px-8 `} key={id} onClick={() =>setCurrrentList(id)}>
                            {
                                el.name
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
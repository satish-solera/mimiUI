"use client";
import { KeyboardEventHandler, useEffect, useRef, useState } from "react"
import { dummyDataSecond } from "../data/dummy"
export const  CleanList = () =>{
    const [selectedList , setSelectedList] = useState<number>(0);

    const listRef = useRef<( HTMLLIElement |null)[]>([]);

    useEffect(() =>{
        listRef?.current[selectedList]?.focus()
    } , [selectedList])

    const handleKeyDown = (e : React.KeyboardEvent<HTMLElement>) =>{
        if(e.key == "ArrowDown"){
            setSelectedList((prev) => (prev + 1) % dummyDataSecond.length )
        }
    }

    const handleArrowUp = (e : React.KeyboardEvent<HTMLElement>) =>{
        if(e.key == "ArrowUp"){
            setSelectedList((prev) => prev == 0 ? dummyDataSecond.length - 1 : prev - 1);
        }
    }

    // const  handleKeyEnter = (e)=>{
    //     if(e.key == "Enter"){
    //         alert("you select);
    //     }
    // }
  
    return (
      <div className="">
        <ul 
        
        aria-label="dummy list"
        className="md:w-80   rounded-sm ">
          {dummyDataSecond.map((el, id) => {
            return (
              <li
              ref={ (el) => {
    listRef.current[id] = el;
  }}
                autoFocus
                aria-selected={id == selectedList}
                role="option"
                tabIndex={0}
                aria-label={el.name}
                key={id}
                className={
              
                  selectedList == id
                    ? `py-3 scale-[200px] transition-all ease-in duration-200 pl-4 px-10   rounded-sm select-none  cursor-pointer dark:text-black border border-gray-200 bg-neutral-300`
                    : `py-2 pl-4 px-10  rounded-sm select-none   bo cursor-pointer dark:text-black border border-gray-200 hover:bg-neutral-200` 
                }
                onClick={() => setSelectedList(id)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleArrowUp}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
}
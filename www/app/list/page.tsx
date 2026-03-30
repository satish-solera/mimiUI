import { Description } from "../components/information"
import { List } from "../components/list"
import { CleanList } from "../components/list2"
import { DataForFirst, DataForSecond } from "../data/dummy"



export default function ListPage (){
    return (
        <div className="md:p-20 p-4 w-full">
            <h1
                aria-label="list-label"
                className="text-2xl md:text-4xl font-semibold md:pl-20">Simple List</h1>
            <div className="md:p-10 p-5">
                <div className="h-80 w-fit px-10 md:w-3xl bg-neutral-100 border border-gray-200 rounded-lg   mx-auto">
                    <div className="p-5 flex justify-center items-center h-full">
                        <List />
                    </div>
                </div>
                <div className="md:ml-40 ml-5 p-5">
                    <Description data={DataForFirst} />
                </div>
            </div>

            <div className="w-full border border-neutral-200 dark:border-neutral-800 my-5"></div>

            <h1
                aria-label="list-label"
                className="text-2xl md:text-4xl font-semibold md:pl-20">Accessible list with keyboard navigation</h1>
            <div className="md:p-10 p-5">
                <div className="h-80 w-fit px-10 md:w-3xl bg-neutral-100 border border-gray-200 rounded-lg   mx-auto">
                    <div className="p-5 flex justify-center items-center h-full">
                        <CleanList />
                    </div>
                </div>
                <div className="md:ml-40 ml-5 p-5">
                    <p>Press arrow <span className="bg-neutral-100 dark:bg-neutral-800 py-px px-3 rounded-md ">Up</span> for prevous list item</p>
                    <p className="pb-5">Press arrow <span className="bg-neutral-100 dark:bg-neutral-800 py-px px-3 rounded-md">Down</span> for next list item</p>
                    <p className="py-2">Now supports</p>
                    <Description data={DataForSecond} />

                </div>
            </div>

        </div>
    )
}

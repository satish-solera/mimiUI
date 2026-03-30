

export const Description = ({data} : {data : any}) =>{
    return(
        <div className="">
            {
                data.map((el: any, id: any) => {
                    return (
                        <div className="flex gap-2" key={id}>

                       <span>-</span>
                        <p className="text-neutral-500 dark:text-neutral-200/90 font-mono " key={id}>
                            {
                                el.point
                            }
                        </p>
                            </div>
                    )
                })
            }
        </div>
    )
}
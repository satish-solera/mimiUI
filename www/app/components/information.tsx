

export const Description = ({data} : {data : string[]}) =>{
    return(
        <div className="">
            {
                data.map((el: any, id: any) => {
                    return (

                        <p className="text-neutral-500 dark:text-neutral-200/90 font-mono " key={id}>
                            {
                                el.point
                            }
                        </p>
                    )
                })
            }
        </div>
    )
}
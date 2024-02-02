export function VideoCard(props : any){
    return <div className = "p-2 cursor-pointer">
        <img className = "rounded-xl" src = {props.image}></img> 
        <div className = "grid grid-cols-12 ">
            <div className = "col-span-1">
                <img  className = {"rounded-full w-20 h-18"} src = {props.thumbImage}></img>
            </div>
            <div className = "col-span-11 pl-3 ">
                <div>
                    {props.title}
                </div> 
                <div className = "text-gray-400 text-xs">
                    {props.channelName}  
                </div>
                <div className = "text-gray-400 text-xs">
                    {props.views} 
                </div>
            </div>
        </div>
        <div className = ""></div>
    </div>
} 
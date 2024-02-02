import { VideoCard } from "./VideoCard";

const Video = [{
    id : 0 ,
    image : "photo1.jpg" ,
    thumbImage : "photo2.jpg" , 
    title : "Bangladesh V India | Match Highlights | U19 CWC 2024" ,
    channelName : "ICC" , 
    views : "3.8M views . 4 days ago "
} , 
{
    id : 1 ,
    image : "photo1.jpg" ,
    thumbImage : "photo2.jpg" , 
    title : "Bangladesh V India | Match Highlights | U19 CWC 2024" ,
    channelName : "ICC" , 
    views : "3.8M views . 4 days ago "
},
{
    id : 2 ,
    image : "photo1.jpg" ,
    thumbImage : "photo2.jpg" , 
    title : "Bangladesh V India | Match Highlights | U19 CWC 2024" ,
    channelName : "ICC" , 
    views : "3.8M views . 4 days ago "
},
{
    image : "photo1.jpg" ,
    thumbImage : "photo2.jpg" , 
    title : "Bangladesh V India | Match Highlights | U19 CWC 2024" ,
    channelName : "ICC" , 
    views : "3.8M views . 4 days ago "
},
{
    image : "photo1.jpg" ,
    thumbImage : "photo2.jpg" , 
    title : "Bangladesh V India | Match Highlights | U19 CWC 2024" ,
    channelName : "ICC" , 
    views : "3.8M views . 4 days ago "
}]
export const VideoGrid = () =>{
    return <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "> 
        {Video.map(video => <div>
            <VideoCard
                image = {video.image} 
                thumbImage = {video.thumbImage}  
                title = {video.title}  
                channelName = {video.channelName} 
                views = {video.views} 
            ></VideoCard>
        </div>)}
    </div>
}

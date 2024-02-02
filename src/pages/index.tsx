import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard" ;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
      image = "photo1.jpg" 
      thumbImage = "photo2.jpg" 
      title = "Bangladesh V India | Match Highlights | U19 CWC 2024" 
      channelName = "ICC" 
      views = "3.8M views . 4 days ago "
      ></VideoCard> 
    </div>
  );
}

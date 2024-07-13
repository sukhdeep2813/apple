import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDiviRef = useRef([]);

    const[video, setvideo] =useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false, 
    }) 

    const [loadData,setLoadedData]  = useState([])
  //Destructuring 
    const [ isEnd ,startPlay, videoId, isLastVideo, isPlaying ]  = video;
  
    useEffect(()=>{
if(loadData.length >3){
    if(!isPlaying){
        video.current[videoId].pause();
    }else {
        startPlay && video.current[videoId].play();
    }
}
    })
     
  //for rendering of video
     useEffect(() =>{
 
     },[startPlay, videoId, isPlaying, loadData])
    //Animating progress but, we don't know where is that  progress
    
    useEffect(() => {
        const currentProgress = 0;
        let span = videoSpanRef.current;

        if(span[videoId]){
            //animate the progress of the video
            let anim = gsap.to(span[videoId],{
                onUpdate: () =>{

                },

                onComplete: () =>{

                }
            })
        }
    })
  return (
    <>
       <div>
           {hightlightsSlides.map((list, i) =>(
            <div key={list.id} id="slider"
            className="sm:pr-20 pr-10">
                <div className="video-carousel_container">
                    <div className="bg-black w-full h-full flex-center rounded-3xl overflow-hidden">
                         <video id="video"
                          playsInline={true}
                          muted
                          preload="auto"
                         >
                             <source src={list.video} type="video/mp4"/>

                         </video>
                    </div>
                     <div className="top-12 absolute left-[5%] z-10">
                        {list.textLists.map((text) => (
                            <p key={text} className="mt:text-2xl
                            text-xl front-medium">
                                {text}
                            </p>
                        ))}
                  </div>
                </div>
            </div>
           ))}
       </div>
    </>
  )
}

export default VideoCarousel
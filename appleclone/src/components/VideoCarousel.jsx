import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { pauseImg, playImg } from "../utils"


const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDiviRef = useRef([]);

    const[video, setVideo] =useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false, 
    }) 

    const [loadData,setLoadedData]  = useState([])
  //Destructuring 
    const {isEnd ,startPlay, videoId, isLastVideo, isPlaying }  = video;
  

     
  //for rendering of video
     useEffect(() =>{
       if(loadData.length > 3){
        if(!isPlaying){
            videoRef.current[videoId].pause();

        }else{
            startPlay && videoRef.current[videoId].play();
        }
       }
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
    },[videoId, startPlay])

   const handleProcess = (type, i) => {
    switch(type){
        case 'video-end':
            setVideo((pre) => ({...pre, isEnd: true,
            videoId: i+1  }))
            break;
        case 'video-last':
            setVideo((pre) => ({...pre, isLastVideo: 
            true}))
            break;
        case 'video-reset':
                setVideo((pre) => ({...pre, isLastVideo: false,
                videoId: 0}))
                break;
        case 'play':
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
                break;
    
         default:
            break  
    }
   }
    
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
                          ref={(el) => (videoRef.current[i] = el)}
                          onPlay={() =>{setVideo((prevVideo)=> ({
                            ...prevVideo, isPlaying: true
                          }))}}
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
        
        <div className="flex-center mt-5 relative">
            <div className="flex-center py-5 px-7 bg-gray-300 
            backdrop-blur rounded-full">
                {videoRef.current.map((_, i) =>(
                    <span
                    key={i}
                    ref={(el) => (videoRef.current[i] =el)}
                    className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative current pointer">
                        <span className="absolute h-full w-fullcrounded-full" 
                        ref={(el) => (videoSpanRef.current[i]  =el)}
                        />
                    </span>
                ))}
            </div>
            <button className="control-btn">
                <img
                  src={isLastVideo ? replaying:
                    !isPlaying ? playImg: pauseImg}
                    alt={isLastVideo ? "replay" :
                        !isPlaying ? "play": "pause"
                    }
                    onClick={isLastVideo 
                        ? () => handleProcess("video-reset")
                        : !isPlaying 
                        ? () =>handleProcess('play')
                        : () =>handleProcess('pause')
                    }
                />
            </button>
        </div>
   
    </>
  )
}

export default VideoCarousel
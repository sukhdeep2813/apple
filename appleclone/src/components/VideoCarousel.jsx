import { hightlightsSlides } from "../constants"


const VideoCarousel = () => {
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
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

const Highlight = () => {
   useGSAP(() => {
    gsap.to("title", {})
   }, [])
  return (
   <section id="#highlights"
   className="w-screen overflow-hidden h-full common-padding bg-zinc" > 
      <div className="screen-max-width">
          <div>
              <h1 id="#title" className="section-heading"></h1>
          </div>
      </div>
   </section>
  )
}

export default Highlight;
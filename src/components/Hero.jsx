// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import NavBar from "./NavBar";

const Hero = () =>{
    // useGSAP(
      

        useEffect(() => {
          const tl = gsap.timeline();

        
          tl.fromTo("#hero", 
            { opacity: 0, scale: 0.8,y:0, }, 
            { opacity: 1, scale: 1.5, y: 0, duration: 2, ease: 'slow' }
          );
          tl.to("#title",{
            opacity:1, delay: 0,
          })
        
          tl.to("#anime",{
            opacity:1, delay: 0.5
          }
          )
          tl.to(".sub",{
            opacity:1, delay: 1
          })
          tl.to(
            ".note",{
              ease:"back.in",
              color:"yellow",
              delay:0.6,
            }
          )

          return () => {
            tl.kill(); 
          };
        }, []);

    return(
      <>
        <NavBar />
        <section className="w-full h-screen">
            <div className="h-2/3 w-full flex items-center justify-center align-center flex-col gap-y-3">
                <p id="hero" className="text-red-600 mt-10 mb-5 text-5xl sm:text-8xl font-bold opactiy-0 max-md:mb-3 overflow-hidden uppercase">
                  <span id="title" className="opacity-0">N</span>
                    <span id="anime" className="opacity-0">etflix</span>
                </p>
                <div id="sub" className="flex flex-col text-white text-l sm:text-xl items-center justify-center text-center  opacity-0 sub"> 
                    <div className="sub text-white text-base py-10 px-10 sm:px-20">This project, which was created using React Js technology for self-learning purposes, employs scrollTrigger to move the section below and the GSAP library to animate the term "NetFlix" in the Hero section. The project's CSS framework is called Tailwind CSS. <br/> <span className="note">**The majority of the features are still in development, therefore you might not find them usable. When it's finished, these will be updated.</span> </div>
                </div>
                

            </div> 
            
        </section>
      </>
    )
}

export default Hero;
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

import Hero from "./components/Hero";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import SectionWrapper from "./components/SectionWrapper";
import { cateogeries, data, logo } from "./Utilities/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CategoryContext= createContext();

gsap.registerPlugin(ScrollTrigger); 

function App() {
  const containerRef= useRef(null);
  const [category,setCategory]=useState(cateogeries);
  useEffect(()=>{
    const section=gsap.utils.toArray('.section_panel');
    const container=containerRef.current;
    gsap.to(section,
        {
            xPercent: -100 *(section.length -1),
            ease:"none",
            scrollTrigger:{
                trigger: container,
                start:"top top",
                pin:true,
                scrub:1,
                snap:{
                    snapTo: 1/(section.length-1),
                    duration:{
                        min:0.2,
                        max:0.4,
                    },
                    delay:0.5
                },
                end: ()=> `+=${container.offsetWidth}`
            }
        }
    );
    return ()=>{
        ScrollTrigger.getAll().forEach(trigger=>trigger.kill());
    }
},[]);

  return (
    <div className="App">

      <Hero/>
      <div className="flex w-screen h-screen  overflow-x-hidden" ref={containerRef}>
        {
          category.map((cat)=>(
            <div key={cat.ctgID} className="section_panel">
              <CategoryContext.Provider value={cat}>
                  <SectionWrapper/> 
              </CategoryContext.Provider>
              
            </div>
          ))
        }
      </div>
    </div>
    
    
  );
}

export default App;

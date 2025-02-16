import { useCallback, useEffect, useState } from "react";
import { genres,languages } from "../Utilities/constants";


const Template =(prop)=>{
    const {object}= prop;
    const [langs,setLangs]=useState(0);
    const [svgChng,setSvgChnge]= useState(
        {
            fillColor:"",
            text:""
        }
    )
    const [status,setStatus]= new useState(false);
    const handleSaveButton=()=>{
        setSvgChnge((svgChng)=>({
            ...svgChng,
            fillColor:"white",
            text:"Saved"
        })) 
    }
    const updateSvgChnge = useCallback(() => {
        setSvgChnge((svgChng) => ({
            ...svgChng,
            fillColor: "transparent",
            text: "Add to List"
        }));
    }, [setSvgChnge]);

    useEffect(() => {
        updateSvgChnge();
        setLangs(object.lg_ids.length);
    }, [object, updateSvgChnge]);

    return(
        <>
                <div className="flex flex-col gap-2 items-center md:items-start md:justify-start justify-center w-full h-full">
                    <div className="text-2xl  font-bold ml-5">
                       {object.title} ({object.year})<br/>
                    </div>
                    <div className="grid grid-cols-3 divide-x-2 divide-white items-center">
                            <div className="px-5 text-sm font-normal md:text-l text-center" >
                            {object.duration}
                            </div>
                            <div className="px-5 text-sm font-semibold md:text-l text-center">
                                {object.certifted}
                            </div>
                            <div className="px-5 text-sm font-normal md:text-l text-center">
                                { 
                                    langs === 1 ? (
                                        <div className="ml-1">
                                            { 
                                                languages.filter((lang)=>(
                                                    lang.id.match(object.lg_ids)
                                                )).map((lang)=>(
                                                    <span key={lang.id}>{lang.lang}</span>
                                                ))
                                            }
                                        </div> 
                                        
                                    ):(
                                        <span className="ml-1">{langs} Languages</span> 
                                    )
                                } 
                            </div>
                    </div>
                    
                    <div className="text-l px-2 mt-2">
                        {
                            object.seasons && <span className="text-blue-500 font-bold">{object.seasons} Seasons</span>
                        }
                    <p className="text-sm md:text-base mt-2 text-white md:max-w-3xl">
                           {object.description}
                        </p>
                        <div className="flex flex-row gap-1 mt-4 justify-center md:justify-start">
                            <button id="WatchButton" className="py-1 px-4  rounded-md text-sm md:text-xl md:px-8 " type="button" onClick={()=>{setStatus(!status)
                                }}> 
                                <div className="flex flex-row gap-1 md:gap-2 justify-center items-center drop-shadow-lg">
                                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="white"/>
                                <polygon points="10.8,7.2 24,15 10.8,22.8" fill="#0f172a"/>
                                </svg>
                                <p className="text-base font-semibold ml-1 text-white">Watch Now</p>
                                </div>
                            </button>
                            <button id="TrailerButton" className=" py-1 px-4 rounded-md text-sm md:text-xl md:px-8" type="button" onClick={handleSaveButton}> 
                                <div className="flex flex-row gap-1 md:gap-2 justify-center items-center ">
                                    <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 5h20a2 2 0 0 1 2 2v28l-12-8-12 8V7a2 2 0 0 1 2-2z" fill={svgChng.fillColor} stroke="white" strokeWidth={3}/>
                                    </svg>
                                    <p className="text-base font-semibold ml-1 text-white">{svgChng.text}</p>
                                    </div>
                            </button>
                        </div>
                        {status===true && <p className="py-[2px] text-yellow-300 text-center  md:text-start">Subscribe now to watch !!!</p>}
                        <div className="py-2 underline">Play Trailer</div>
                        <div className="flex flex-1 flex-wrap gap-2 mt-5 mb-10">
                            {
                                object.genre_ids.map((gID)=>(
                                    <div className="py-1 px-5 text-sm font-semibold border-2 border-gray-700 text-center max-w-lg rounded-full bg-gray-900 bg-opacity-80">
                                        {
                                            genres.map((genre,index)=>(
                                               <>
                                               {genre.id===gID && <span key={index}>{genre.genre_name}</span>}
                                               </>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                                
                                
                                
                        </div>
                        
                        </div>

                </div>


       </>
  
    )
}

export default Template;
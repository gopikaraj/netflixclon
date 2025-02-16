import { useContext, useEffect, useState } from "react";
import { data } from "../Utilities/constants";
import Template from "./Template";
import { Link } from "react-router-dom";
import { CategoryContext } from "../App";

const ModuleWrapper = (prop) => {
    const [selectedObject, setSelectedObject] = useState(null);
    const [isVisible,setIsVisible]=useState(false);
    const [fliteredObj, setFliteredObj] = useState(data);
    const [searchTrem,setSearchTerm] = useState("");
    const category=useContext(CategoryContext);
    const {ctgID}=category||"Ctg_001"||"Ctg_002"||"Ctg_003";
    const {ctg_Name}=category || "Movies"||"Series"||"TV Shows";
    const { children,moduleID } = prop;
    
    const handleSearch=(event)=>{
        setSearchTerm(event.target.value);
    } 
    useEffect(() => { 
        
            const fliteredList = fliteredObj.filter((obj)=>
                obj.title.toLowerCase().includes(searchTrem.toLowerCase()));
                setFliteredObj(fliteredList);
                if( searchTrem===""){
                    setFliteredObj(data)
                    } 
    }, [searchTrem,fliteredObj])
    


    return (

            <div className="relative w-screen h-screen">
                {
                    selectedObject ? (
                        <div className="absolute">
                            <img src={selectedObject.bg_img} alt="" className="h-screen w-screen object-cover opacity-[45%]" />
                            <div>
                            </div>

                        </div>
                    ) : (
                        <div className="absolute">

                            <img src="https://image.tmdb.org/t/p/original/mgz5gJCSDdOHwPtM7jnEtxTNHtI.jpg" alt="" className="h-screen w-screen object-cover object-center" />
                        </div>
                    )
                }

                <div className="absolute bg-gradient-to-b from-gray-900 from-4% via-transparent to-black to-70% h-full break-words w-full left-0">
                    <div className="flex flex-1 items-center">
                        <div className=" w-1/2 md:w-3/5 px-5">
                            {children}
                        </div>
                        <div className="flex flex-1 justify-end w-1/2 mr-5 md:w-2/5 divide-x-2">
                            {/* Search Bar */}
                            <div className="flex px-5 items-center">
                                {
                                    isVisible && <div className="px-3">
                                    <input type="text" value={searchTrem} onChange={handleSearch} placeholder="Search your favourites...................." className="block px-[10px] py-1 w-full text-[8px] md:text-sm text-gray-300 bg-transparent"/>
                                </div>
                                }
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer " onClick={()=>{
                                    setIsVisible(true)
                                }}>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            {/* Home */}
                            <div className="px-5 hidden md:flex">
                                <Link to="/netflixclon/home">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="30"
                                    fill="white"
                                >
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="px-10 lg:px-40 w-full">
                        {
                            selectedObject && <Template object={selectedObject} />
                        }
                    </div>



                    <div className="fixed md:bottom-0 w-full">
                        <div className="flex flex-1 items-center justify-start w-creen">
                            <div className="px-5 w-3/5 mt-5">
                                <h1 className="text-l font-semibold">Popular in {ctg_Name}</h1>
                            </div>
                            <div className="px-5 w-2/5">
                                <div className=" flex flex-1 gap-4 py-6 justify-end">
                                    <button type="button">
                                        <div className="flex flex-1 items-center justify-center">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 64 64"
                                                width="20"
                                                fill="white"
                                            >
                                                <rect x="4" y="4" width="24" height="24" rx="6" ry="6" fill="white" />
                                                <rect x="36" y="4" width="24" height="24" rx="6" ry="6" fill="white" />
                                                <rect x="4" y="36" width="24" height="24" rx="6" ry="6" fill="white" />
                                                <circle cx="48" cy="48" r="12" fill="white" />
                                            </svg>
                                            <span className="hidden md:flex text-sm px-3">Genres</span>
                                        </div>
                                    </button>

                                    <button type="button">
                                        <div className="flex flex-1 items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>

                                            <span className=" hidden md:flex text-sm px-3">Languages</span>
                                        </div>
                                    </button>

                                </div>
                            </div>

                        </div>
                        
                        <div className=" flex flex-1 h-full py-5 px-5 overflow-x-scroll overflow-y-hidden h-56 posters">
                            {
                                fliteredObj.map((obj,index) => (
                                    <div key={index} >
                                        {
                                            (obj.cID === (ctgID?ctgID:moduleID))  && <img src={obj.asset} alt="" height={"auto"} onClick={() => setSelectedObject(obj)} className="mr-1 max-w-[120px] max-h-full focus:ring-4 focus:ring-white-600" />
                                        }
                                    </div>

                                ))
                                
                            }
                            {
                                fliteredObj.length === 0 && <span className="mb-20">No Results</span>
                            }

                        </div>
                    </div>


                </div>

            </div>

    )
}
export default ModuleWrapper;

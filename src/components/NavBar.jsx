import { Link } from "react-router-dom";
import { navItem } from "../Utilities/constants";
import { useEffect, useState } from "react";

const NavBar= () =>{
    const [avatarStatus,setAvatarStatue]= useState(false);
    // const [avatar, setAvatar]=useState({
    //         username:"",
    //         abbrev:""
    // });

    // useEffect(()=>{
    //     setAvatar((avatar)=>({
    //         ...avatar,
    //         username:"Unknown",
    //         abbrev:"UN"
    //     }))
    // },[avatar])

    return (
        <header className="w-full py-8 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full ">
                <div className="fle x flex-1">
                    <img width={45} height={"auto"} src="https://static.vecteezy.com/system/resources/previews/024/273/839/original/netflix-logo-transparent-free-png.png" alt="Logo" />
                </div>
                <div className="flex flex-1 justify-center max-sm:hidden ">
                           <Link to="/sections/Movies/Ctg_001" smooth="true" duration={800} className="px-5 text-sm cursor-pointer text-white hover:underline">
                                Movies
                           </Link>
                           <Link to="/sections/Series/Ctg_002" smooth="true" duration={800} className="px-5 text-sm cursor-pointer text-white hover:underline">Series</Link>
                           <Link to="/sections/TV Shows/Ctg_003" smooth="true" duration={800} className="px-5 text-sm cursor-pointer text-white hover:underline">TV Shows</Link>
                    {/* {navItem.map((nav)=>(
                        <div key={nav} className="px-5 text-sm cursor-pointer text-white hover:underline">
                           <button type="button">{nav}</button> 
                           
                        </div>
                    ))} */}
                </div>
                <div className="flex flex-col items-center gap-5 max-sm:justify-end  px-5 ">
                    <button className="relative inline-flex items-center justify-center right-10 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" onClick={()=>setAvatarStatue(!avatarStatus)}>
                        <span className="font-medium text-gray-600 dark:text-gray-300 text-sm uppercase">UN</span>
                    </button>
                    {/* {
                        avatarStatus && <div className="flex absolute top-[60px] items-center right-10 mt-3 justify-between w-full md:flex md:w-auto md:order-1" >
                            <ul className="flex flex-col font-medium p-4 md:p-2 mt-4 border border-gray-700 rounded-lg  rtl:space-x-reverse md:mt-0 md:border-2 bg-transparent ">
                                <li className="block py-2 px-3 text-white text-[14px] text-center">Unknown</li>
                                <li className="block mb-2 px-3 text-white text-sm  items-center justify-center">
                                    <button type="button" className="bg-red-500 px-5 py-1 rounded-full">Sign In</button>
                                </li>
                            </ul>
                        </div>
                    } */}
                </div>
            </nav>
             
        </header>
        
    )
}

export default NavBar;
// import { useState } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ModuleWrapper from "./ModuleWrapper";
import { logo } from "../Utilities/constants";

import { CategoryContext } from "../App";

const SectionWrapper=(props)=>{
    const {param,id}=useParams();
    const category=useContext(CategoryContext);
    const {ctg_Name,ctg_Id}=category || {};
    const location= useLocation();
    useEffect(()=>{
        if(location.hash){
            const section= document.getElementById(location.hash.substring(1));
            if (section) {
                section.scrollIntoView({behavior:"instant"});
            } 
        }
    },[location])

    return( 
        
        <div className="flex w-screen h-screen">
            <section className="w-screen h-screen bg-blue-600 bg-opacity-25 items-center justify-center" id={ctg_Name?ctg_Name:param}>
                <ModuleWrapper moduleID={ctg_Id?ctg_Id:id} className="flex ">
                    <div className="flex flex-1 gap-1 w-screen py-[30px] px-5 items-center justify-start">
                    <div className="">
                        <img src={logo} alt="logo" width={40} height={"auto"} />
                    </div>
                    <div className="text-3xl font-bold">
                        {ctg_Name?ctg_Name:param}
                    </div>
                    </div>
                </ModuleWrapper>
            </section>        
        </div>
        
    )
}

export default SectionWrapper;
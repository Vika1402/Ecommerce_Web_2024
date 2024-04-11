import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
const Spinner = ({path='login'}) => {
  const [count,setCount]=useState(3)
  const navigate=useNavigate()
  const location =useLocation()
  useEffect(()=>{
    const interval =setInterval(()=>{
setCount((prevValue)=>--prevValue)
    },1000)
    count===0 &&  navigate(`/${path}`,{
      state:location.pathname
    })
    return ()=>clearInterval(interval)
  },[count,navigate,location,path])
  return (
    <>
    <div className="spinner" style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:"center",flexDirection:"column"}}>
    <h1 className="Text-center"> redirecting to you in {count} Second</h1>
    <div
          class="d-flex justify-content-center spinner"
        >
          <div class="spinner-border text-success" role="status"></div>
        </div>
    </div>
      
       

    </>
  );
};

export default Spinner;

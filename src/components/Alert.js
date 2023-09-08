import React, { useEffect } from 'react';


const Alert = (props) => {

  useEffect(()=>{
    if(props.alert){
      let x = document.getElementById("alert");

      x.classList.remove("bg-green-100","border-green-400","text-green-700","bg-red-100","border-red-400","text-red-700","bg-yellow-100","border-yellow-400","text-yellow-700")

      if(props.alert.type === "success" ){
        x.classList.add("bg-green-100","border-green-400","text-green-700");
      }
      else if(props.alert.type === "fail" ){
        x.classList.add("bg-red-100","border-red-400","text-red-700");
      }
      else if(props.alert.type === "warning" ){
        x.classList.add("bg-yellow-100","border-yellow-400","text-yellow-700");
      }
      
    }
  },[props.alert]);

  return (
    props.alert && <div id="alert" className={`border-2 px-4 py-3 rounded absolute w-full`} role="alert">
      <strong className="font-bold">{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)} : </strong>
      <span className="block sm:inline">{props.alert.msg}</span>
    </div>

  )   
}

export default Alert; 
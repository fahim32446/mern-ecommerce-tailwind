import React from 'react'
import { useState } from "react";
import BarLoader  from "react-spinners/BarLoader ";

const override = {
    position: "absolute",
    width: "30%",
  };

const Loading = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FF0000");

  return (
     <div className="w-full h-screen flex items-center justify-center">
      <BarLoader 
        color={color}
        loading={loading}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className='mt-10'>Please Wait!!</p>
    </div>
  )
}

export default Loading
import React from 'react'
import img1 from '../images/download (1).jpeg';

const project5 = () => {
    const mobiles=[{
        brand:"vivo",
        model:"z1",
        price:"18k",
        img:<img src={img1}></img>
    },{
        brand:"oppo",
        model:"reno2 pro",
        price:"25k"
    },{
        brand:"redmi",
        model:"note8 pro",
        price:"20k",
    },{
        brand:"realme",
        model:"11 pro",
        price:"10k",
    },{
        brand:"samsung",
        model:"galaxy 12 pro max",
        price:"32k",
    }]
  return (
    <div>
        {
            mobiles.map((details)=>{
                return(
                    <>
                <p>{details.brand}</p>
                <p>{details.model}</p>
                <p>{details.price}</p>
                    </>
                )
                
            })
        }
    </div>
  )
}

export default project5;







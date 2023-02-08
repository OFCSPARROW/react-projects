import React from 'react'
import { useState } from 'react'

export default function Project7() {
  const [data,setData]=useState(null);
  const [info,setPrint]=useState(false);

  function getDataName(e) {
    setData(e.target.value);
    setPrint(false)
    console.log(e.target.value);
  }
  return (
    <div>
      {
        info?<h1>{data}</h1>:null
      }
      <input type='text' name="txt1" onChange={getDataName}     placeholder='Enter Your Name'>     </input>
      {/* <input type='text' name='txt3' onChange={getDataAge}      placeholder='Enter Your Age'>      </input>
      <input type='text' name='txt2' onChange={getDataEmail}    placeholder='Enter Your E-mail'>   </input>
      <input type='text' name='txt2' onChange={getDataPassword} placeholder='Enter Your Password'> </input>
      <input type='text' name='txt3' onChange={getDataLocation} placeholder='Enter Your Location'> </input> */}
    </div>
    
  )
}



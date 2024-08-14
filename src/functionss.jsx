import React from 'react'

function Functionss() {
    const x= 2;
    const y = 3;
    const fun = ()=>{
        
        console.log(x+y)
    }
  return (
    <div>
            <h1 onClick={fun}></h1>

    </div>
  )
}

export default Functionss
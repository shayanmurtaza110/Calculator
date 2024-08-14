import React, {useState} from 'react'
import Functionss from './functionss'


function Calculator() {

    const [calc, setCalc] = useState('')
    const clickMe =(output)=>{
        if (output==='='){
            setCalc(eval(calc))
        }else if (output==='c'){
            setCalc('')
        }else {
            setCalc(calc+output)
        }
    }


  return (
    <>
    <Functionss/>
    
    <div className='flex justify-center items-center'>

        <div className='bg-blue-950 w-[28%] p-4 rounded-lg mt-6'>

        <input type="text" className='bg-slate-500 w-full py-8 rounded-lg px-4 text-white' value={calc} />

        <div className='grid grid-cols-4 gap-2 mt-3 text-white '>
            <button className='bg-red-500  p-6   col-span-2 rounded-lg' onClick={()=>clickMe("c")}>C</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("/")}>/</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("*")}>*</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("7")}>7</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("8")}>8</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("9")}>9</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("-")}>-</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("4")}>4</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("5")}>5</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("6")}>6</button>
            <button className='bg-blue-900 p-6 row-span-2  rounded-lg' onClick={()=>clickMe("+")}>+</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("1")}>1</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("2")}>2</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("3")}>3</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("0")}>0</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe("00")}>00</button>
            <button className='bg-blue-900 p-6  rounded-lg' onClick={()=>clickMe(".")}>.</button>
            <button className='bg-blue-500 p-6  rounded-lg' onClick={()=>clickMe("=")}>=</button>
        </div>

        </div>

    </div>
    
    </>
  )
}

export default Calculator
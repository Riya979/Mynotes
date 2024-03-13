import { useState } from "react"

export const Hook1:React.FC<{}>=()=>{
    let [value,setValue]=useState('1')
    return<h1>
        <input type="text" name="" id="" onChange={(e)=>{setValue(e.target.value)}}/>
        {value}
    </h1>
}
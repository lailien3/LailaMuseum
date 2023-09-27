import  React, { useState , useEffect } from 'react'
import './DateTime.css'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div className='date-time-container'>
            <p className='time'>{date.toLocaleTimeString()}</p>
            <p className='date'>{date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime
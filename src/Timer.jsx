import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [data, setData] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString())
        },60000)
        console.log(time)
    })

    useEffect(()=>{
        let callAPI = async ()=>{
            let resp = await fetch("https://fakestoreapi.com/products")
            let res = await resp.json()
            // console.log(res)
            setData(res)
        }
        callAPI()
    },[data])

  return (
    <div>
      {time}
      <br />
      <button onClick={()=>{
        setTime(32)
      }}>Change Time</button>
      {data.map((val)=>{
        return <h4>{val.title}</h4>
      })}
    </div>
  )
}

export default Timer

import { useState } from "react"
export default function BtnRightClick (){
    const [count ,setCount ]= useState(0)
    function rightClick(e){
        e.preventDefault()
        console.log("right click")
        setCount(count+1)

    }
    return(
        <button
        style={{
            width: '200px',
            height: '100px',
            backgroundColor: '#eee',
            textAlign: 'center',
            lineHeight: '100px',
            margin: '50px auto',
      }}

        onContextMenu={rightClick}>
            <h1>right click {count}</h1>
        </button>

    )
}
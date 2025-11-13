import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment, Reset } from "./action"

export default function TestRedux(){
    const num = useSelector(data=>data.num)
    const nom = useSelector(data=>data.nom)
    const dispatch = useDispatch()
    return(
        <>
            <div className="App">
                <div>{num}</div>
                <div>le nom est {nom}</div>
                <div>
                    <button onClick={()=>dispatch(Increment())}>Increment</button>
                    <button onClick={()=>dispatch(Decrement())} >Decrement</button>
                    <button onClick={()=>dispatch(Reset())} >Reset</button>
                </div>
            </div>
        </>
    )
}
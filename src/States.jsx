import { useState } from "react"


 function changes (){
    const[winner,setwinner] = useState("Who was winning the asian cup leauge ?")
    return (
        <div>
        <h6 style={{color:'red'}}>{winner}</h6>
        <button onClick={() => setwinner('India has winned !')}>Winner</button>
        <button onClick={() => setwinner('Pakistan has losed !')}>Loser</button>
        <Props />
        </div>
    )
 } export default changes 
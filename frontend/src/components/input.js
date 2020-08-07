import React, { useState } from 'react'

function Input(){
    const [value, setValue] = useState("Placeholder");
    const [placeholder, setPlaceHolder] = useState("");

    function setH(someVal){
        setValue(someVal);
    }

    return (
        <div>
            <h1>{value}</h1>
            <textarea onChange={e => setPlaceHolder(e.target.value)}></textarea>
            <button onClick={e => setValue(placeholder)}>Sumit</button>
        </div>
    )

}


export default Input;
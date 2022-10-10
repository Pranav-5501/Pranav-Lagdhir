import React from 'react'

// function Greet(){
//     return <h1>Hello Pranav</h1>
// }

// export default Greet

export const Greet = (props)=>{ 
    return(
    <div>
        <h1>Hello {props.name} {props.lname}</h1>
        {props.children}
    </div>
    )
}
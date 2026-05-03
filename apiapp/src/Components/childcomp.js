import React from "react";

const childComp=(props)=>{
    return(
        <div>
            <h2>
                This is Child Commponent
            </h2>
            <p>Item:{props.itemPrice}</p>
            <button type="button" onClick={()=>props.myEvent()}></button>
        </div>
    )
}
export default childComp;
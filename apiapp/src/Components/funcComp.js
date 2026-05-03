
import React, { Component } from 'react';   

const funcComp=(props)=>{
   
    return(
        <div>
            <h1>Prabhanshu Lakshakar</h1>
            <p>Name:{props.empName},Post:{props.empPost},salary:{props.empSalary}</p>
        </div>
    )
  


}

export default funcComp;
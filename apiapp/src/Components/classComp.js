import React, { Component } from "react";

class classComp extends Component{
    render(){
        return(
            <div>
                <h1>Prabhanshu Lakshakar</h1>
                <p>Name:{this.props.empName},Post:{this.props.empPost},salary:{this.props.empSalary}</p>
            </div>
        )
    }
}
export default classComp;
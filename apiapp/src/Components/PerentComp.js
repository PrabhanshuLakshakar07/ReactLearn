import React, { Component } from "react";
import childComp from "./childcomp";

class PerentComp extends Component{
    constructor(props){
        super(props);
        this.state={
               Menu:"Samosa",
               Price:30
        }
    }

    // greating=()=>{
    //     window.alert("Bhai Yaa kya kar raha h tu yaar !!!!!");
    // }
    changestate=()=>{
        this.setState({Menu:"Sandwich",Price:this.state.Price+60})
        // this.setState((prevState)=>({
        //     Menu:"pizza",Price:prevState.salary+200

        // }));

    };
    render(){
        return(
            <div>
                <h1>Menu</h1>
                  <p>Name:<strong>{this.state.Menu}</strong></p>
                <p>salary:<strong>{this.state.Price}</strong></p>
                {/* <p>Name:{this.props.empName},Post:{this.props.empPost},salary:{this.props.empSalary}</p> */}
           
           <button type="button" onClick={()=>this.changestate()}>Change State</button>
           {/* <button type="button" onClick={()=>this.greating()}></button> */}
           {/* <h2 onMouseOver={()=>this.greating()}>Bhai Yaa kya kar raha h tu yaar </h2> */}
           <hr/>
           <h1>Menu</h1>
                  <p>Name:<strong>{this.state.Menu}</strong></p>
                <p>salary:<strong>{this.state.Price}</strong></p>
<button type="button" onClick={()=>this.changestate()}>Change State</button>
           <childComp item={this.state.Menu} itemPrice={this.state.Price} myEvent={this.changestate}/>
            </div>
        )
    }
}
export default PerentComp;
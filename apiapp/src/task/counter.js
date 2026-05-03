import React, { Component } from "react";

class Counter extends Component{

   constructor(props){
        super(props);
        this.state={

                        Counter:0
        }
    }

    // greating=()=>{
    //     window.alert("Bhai Yaa kya kar raha h tu yaar !!!!!");
    // }
    // changestate=()=>{
    //     this.setState({myName:"Mr Prabhanshu  Lakshakar",salary:this.state.salary+5000})
    //     // this.setState((prevState)=>({
    //     //     myName:"MR.Don",salary:prevState.salary+5000

    //     // }));

    // };
 ADD=()=>{
        this.setState({Counter:this.state.Counter+1})
        // this.setState((prevState)=>({
        //     myName:"MR.Don",salary:prevState.salary+5000

        // }));

    };
    Substract=()=>{
        this.setState({Counter:this.state.Counter-1})
        // this.setState((prevState)=>({
        //     myName:"MR.Don",salary:prevState.salary+5000

        // }));

    };
    Resetcount=()=>{
        this.setState({Counter:this.state.Counter=0})
        // this.setState((prevState)=>({
        //     myName:"MR.Don",salary:prevState.salary+5000

        // }));

    };



    render(){
        return(
            <div>
                {/* <h1>Prabhanshu Lakshakar</h1>
                  <p>Name:<strong>{this.state.myName}</strong></p>
                <p>salary:<strong>{this.state.salary}</strong></p>
                <p>Name:{this.props.empName},Post:{this.props.empPost},salary:{this.props.empSalary}</p> */}
           <p>salary:<strong>{this.state.Counter}</strong></p>
           <button type="button" onClick={()=>this.ADD()}>ADD</button>
           <button type="button" onClick={()=>this.Substract()}>Substract</button>
           <button type="button" onClick={()=>this.Resetcount()}>Reset</button>
           {/* <button type="button" onClick={()=>this.changestate()}>Change State</button>
           <button type="button" onClick={()=>this.greating()}>Click Me</button>
           <h2 onMouseOver={()=>this.greating()}>Bhai Yaa kya kar raha h tu yaar </h2> */}

           
            </div>
        )
    }
}
export default Counter;
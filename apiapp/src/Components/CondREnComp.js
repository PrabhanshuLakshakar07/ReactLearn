import React, { Component } from 'react'

 class CondREnComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isCond:true
      }
    }
  render() {
    let msg="";
   if(this.state.isCond){
    // return <h1>Admin Login</h1>
    msg="<h1>Admin Login</h1>"
   }else{
     msg="<h1>User Login</h1>"
   }
  return msg;
  //yese bhi likhege
//return <h1>msg</h1>; 
//return <h1>{msg}</h1>; 
// return this.state.isCond ? <h2> Admin Login</h2> : <h2> User Login </h2>
// return this.state.isCond && <h2> Admin Login</h2>
  }
}

export default CondREnComp


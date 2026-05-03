
import React, { Component } from 'react'
import './external.css'
import MyCss from './mycss.module.css'

 class MyCssComp extends Component {

    MyCss={
        color:"Yello",
        fontSize:"25px",
        backgroundColor:"blue"
    }
  

  render() {
    return (
      <div>
        
        <h3 style={{color:"red",fontSize:"30px",textTransform:"capitalize",backgroundColor:"lightgray"}}>Hello</h3>

        <h2 style={this.MyCss}>Hello</h2>
        <strong className='txt-danger'>YCPAIT</strong>
        <emp className='txt-success'>mumbai</emp>
        <div className={MyCss.circle}>Hello</div>
       
            </div>
    )
  }
}

export default MyCssComp
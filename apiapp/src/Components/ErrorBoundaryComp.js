import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {
constructor(props) {
    super(props)    
    this.state = {
     isCond:false
    }
  }
  static getDerivedStateFromError(error){
    return {isCond:true}
  }

  componentDidCatch(error,info){
    console.log("Error:",error);
    console.log("Info:",info);
  }

  render() {
   
    if(this.state.isCond){
        return <div>Not A user</div>
    }
    return this.props.children;

  }
}

export default ErrorBoundaryComp
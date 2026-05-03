import React from 'react'


const UserComp =(props)=>{

    if(props.name==="Prabhanshu"){
        throw new Error("This is not a valid user");
    }

    return (
        <div>
            <h1>This is User Component</h1>
            <div>Name: <strong>{props.name}</strong></div>
        </div>
    )
}
export default UserComp
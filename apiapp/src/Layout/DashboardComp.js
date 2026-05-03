import React from 'react'
import { Outlet } from 'react-router'
import NavComp from '../Layout/NavComp'

const DashboardComp = () => {
    return (
        <div className='container'>
            <NavComp/>
            <h1>This is Dashboard Component</h1>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default DashboardComp

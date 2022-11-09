import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WithAction from '../Components/Navbar'
import Home from './Home'

const Routers = () => {
    return (
        <div>
            <WithAction />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routers
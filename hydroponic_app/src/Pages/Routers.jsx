import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Hydroponic from './Hydroponic'
import OurStory from './OurStory'
import Services from './Services'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hydroponicfarm' element={<Hydroponic />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about-us' element={<OurStory />} />
            </Routes>
        </div>
    )
}

export default Routers

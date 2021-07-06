import React from 'react'
import './Navinshorts.css';
import HamburgerDrawer from  './HamburgerDrawer';
function Navinshorts({setCategory}) {
    return (
        <div className="nav">
            <div className = "icon">
                <HamburgerDrawer setCategory = {setCategory}/>
            </div>
            <img  src="http://www.inshorts.com/dist/images/home_page/logo.png" alt = "News_logo"/>
        </div>
    )
}

export default Navinshorts

import React from "react";
import Typed from "react-typed";


const Header = () => {
    return(
    <div className="header-wrapper">
    <div className="main-info">
        <h1>Web DEV and Web Promos</h1>
        <Typed 
        className="typed-text"
        strings={["text1", "text 2", "text 3", "text 4" ]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a href= "#" className="btn-main-offer">contact me</a>
    </div>
    </div>
    )
}

export default Header
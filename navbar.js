import "./navbar.css"
import React, {component} from "react"
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav>
               <a>
                <NavLink  exact to="/" className="Logo">Kampus Coding</NavLink>
               </a> 
                <div>
                    <ul id="Nav">
                        <li>
                             <NavLink to="/Course" className="Course">Course</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Testimonial" className="Testimonial">Testimonial</NavLink>
                        </li>
                        <li>
                            <NavLink to="/FAQ" className="FAQ">FAQ</NavLink>
                        </li>
                        <li>
                            <a className="Search">Search</a>
                        </li>
                        <li>
                            <NavLink to="/Sign-in" className="Sign-in">Sign in</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Sign-up" className="Sign-up">Sign up</NavLink>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
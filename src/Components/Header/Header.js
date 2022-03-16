import React from "react";
import {ReactComponent as Logo} from './../../assets/instagram.svg';
import {ReactComponent as Home} from './../../assets/home.svg';
import {ReactComponent as Explore} from './../../assets/explore.svg';
import { Link, NavLink , useNavigate } from "react-router-dom";
import './header.css';

const Header = ({isLogged}) => {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className="div-header">
                <div className="div-svg" onClick={() => navigate('/')}>
                    <Logo />
                </div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <NavLink to={'/'}>
                        <Home className='div-svg'/>
                    </NavLink>
                    <NavLink to={'/explore'}>
                        <Explore className='div-svg' />
                    </NavLink>
                    <button className="button-header" onClick={handleClick}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
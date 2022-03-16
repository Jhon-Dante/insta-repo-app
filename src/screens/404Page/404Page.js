import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    let navigate = useNavigate();
    return (
        <div style={{marginLeft:'10px'}}>
            <h2>404Page</h2>
            <p>Redirecting to<span style={{color: 'dodgerblue'}} onClick={() => navigate(`/`)}>Login Page</span></p>
        </div>
    );
}

export default NoMatch;
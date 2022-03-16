import React from "react";
import { useNavigate} from 'react-router-dom'

const User = ({name,username, email}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${username}`, {state: { username: username, email:email, name:name}})
    }

    return(
        <div style={{padding: '10px 0', height:'20px'}}>
            <div style={{fontSize:'1.3rem',width:'min-content', cursor:'pointer'}} onClick={handleClick}>{username}</div>
            <div style={{fontSize:'0.6rem', color:'silver'}}>{name}</div>
        </div>
    )
}

export default User;
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {ReactComponent as User} from '../../assets/user.svg';

const Profile = () => {
    const location = useLocation()
    return(
        <div style={{width:'80%',margin:'0 auto', display:'flex',flexDirection:'row', marginTop:'25px'}}>
            <div style={{width:'40%'}}>
                <User style={{width:'150px', position:'relative', left:'50%'}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:'2.5rem'}}>{location.state.username}</div>
                <div style={{fontWeight:'bold'}}>{location.state.name}</div>
                <div>{location.state.email}</div>
            </div>
        </div>
    )
}

export default Profile;
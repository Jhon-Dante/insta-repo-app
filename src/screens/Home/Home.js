import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Explore from "../Explore/Explore";
import NewHome from "../NewHome/NewHome";
import Profile from "../Profile/Profile";

const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <Routes>
                <Route exact path={'/'} element={<NewHome />} />
                <Route exact path={'/explore'} element={<Explore />} />
                <Route path={'/:username'} element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Home;
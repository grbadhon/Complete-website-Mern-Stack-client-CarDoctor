import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import welcomeImg from '../../../../images/10808.jpg'

const MainDash = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = sessionStorage.getItem('user');
    if (user) {
        var name = user.substring(0, user.indexOf("@"));
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center ">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center"><img style={{ height: '150px' }} src={welcomeImg} alt="..."></img></div>

                    <div className="col-12"><h1 className="text-center"> {user && name.toUpperCase()} <br></br><br></br>This is Your Dashboard</h1></div>
                </div>

            </div>

        </div>
    );
};

export default MainDash;
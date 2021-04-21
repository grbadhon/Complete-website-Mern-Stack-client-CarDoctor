import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import firebaseConfig from '../../Login/firebase.config';
import { handleSignOut } from '../../Login/loginManager';
import firebase from "firebase/app";
import './Navbar.css';

const Navbar = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                history.push("/home");
                window.location.reload()


            })
    }

    const user = sessionStorage.getItem('user');
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://ancient-crag-54960.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            });


    }, [user])


    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }

    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <Link to="/home"><img className="navimg" src={logo} alt="..."></img></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ms-auto mb-2 mb-lg-0">

                        <Link to="/home" className="nav-link active nav-a fw-bolder m-1" aria-current="page">Home</Link>
                        <Link to="/appoinments" className="nav-link active nav-a fw-bolder m-1" >Appoinments</Link>
                        <Link to="/" className="nav-link active nav-a fw-bolder m-1" >Projects</Link>
                        <Link to="/" className="nav-link active nav-a fw-bolder m-1" >Contact</Link>
                        <Link to="/dashboard" className="nav-link active nav-a fw-bolder m-1" >Dashboard</Link> 

                        {
                            (loggedInUser.email || sessionStorage.getItem('token')) ?
                                <button onClick={signOut} className="btn  nav-a mt-1 fw-bolder custom-btn" >Log Out</button> :
                                <Link to="/login" className="nav-link active nav-a fw-bolder m-1 " >Login</Link>


                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
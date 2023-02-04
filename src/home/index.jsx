import LeftNavBar from "../left-side-nav";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import firebase from "../login/firebase";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const email = useState("");
    const password = useState("");

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            localStorage.clear();
            window.location.href = "http://localhost:3000/login";
        }
        });
    }, []);

    const handleLogin = () => {
        console.log("Login successful");
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            setIsLoggedIn(true);
        })
        .catch((error) => {
            console.error(error.message);
        });
    };

    const handleLogout = () => {
        console.log("logout successfully");
        firebase
        .auth()
        .signOut()
        .then(() => {
            setIsLoggedIn(false);
        });
    };

    return (
        <>
        <div className="container-fluid">
            <div className="row">
            <LeftNavBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    {isLoggedIn ? (
                    <button
                        className="btn btn-danger mx-3"
                        onClick={handleLogout}
                    >
                        <a style={{ color: "white" }} href="#">
                        Logout
                        </a>
                    </button>
                    ) : (
                    <>
                        <button
                        className="btn btn-success mx-3"
                        onClick={handleLogin}
                        >
                        <a style={{ color: "white" }} href="/login">
                            Login
                        </a>
                        </button>
                        {/* <button className="btn btn-primary mx-3">
                        <a style={{ color: "white" }} href="/register">
                            Register
                        </a>
                    </button> please enable if you need to register  */}
                    </>
                    )}
                </div>
                </div>
                <Outlet />
            </main>
            </div>
        </div>
        </>
    );
    }

export default Home;

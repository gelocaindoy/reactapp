    import React, { useState } from "react";
    import firebase from "../register/firebase";
    import "../login/login.css";
    import Logo from "../img/gelo.png";
    import { Link } from 'react-router-dom';

    function RegistrationForm() {
    const [fullname, setfullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showRegisteredAlready, setShowRegisteredAlready] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "fullname") {
        setfullname(value);
        }
        if (id === "email") {
        setEmail(value);
        }
        if (id === "password") {
        setPassword(value);
        }
        if (id === "confirmPassword") {
        setConfirmPassword(value);
        }
    };

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
        }
        if (!password || !confirmPassword) {
        alert("Both password and confirm password are required");
        return;
        }
        if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
        }
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            await userCredential.user.updateProfile({
            displayName: fullname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
            });
            let obj = {
            fullname: fullname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
            };
            firebase
            .database()
            .ref("employees")
            .orderByChild("email")
            .equalTo(email)
            .once("value")
            .then((snapshot) => {
                if (snapshot.exists()) {
                setShowRegisteredAlready(true);
                setfullname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                } else {
                const newPostRef = firebase.database().ref("employees").push();
                const newPostKey = newPostRef.key;
                const updates = {};
                updates[`/${newPostKey}`] = obj;
                firebase
                    .database()
                    .ref("employees")
                    .update(updates)
                    .then(() => {
                    setShowSuccess(true);
                    setTimeout(() => {
                        window.location.href = "/admin/dashboard";
                    }, 3000);
                    })
                    .catch((error) => {
                    alert(error.message);
                    });
                }
            });
        })
        .catch((error) => {
            console.log(error.message);
            if (error.code === "auth/email-already-in-use") {
                alert("Please login.");
              }
        });
    };

    return (
        <div className="main-outer-div">
        {showSuccess && (
            <div className="alert alert-success">
            <p>Registration successful! you will be redirected in 3 seconds</p>
            </div>
        )}
        {showRegisteredAlready && (
            <div className="alert alert-danger">
            <p>Registration failed!</p>
            </div>
        )}

        <div id="logo-div">
            <img src={Logo} className="logo-img" alt="" />
        </div>
        <h2 className="title text-center">Register</h2>

        <input
            className="login-form-input"
            type="text"
            value={fullname}
            onChange={(e) => handleInputChange(e)}
            id="fullname"
            placeholder="Full name"
        />

        <input
            type="email"
            id="email"
            className="login-form-input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
        />

        <input
            className="login-form-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
        />

        <input
            className="login-form-input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
        />

        <div>
            <button
            onClick={() => handleSubmit()}
            type="submit"
            className="login-form-input"
            >
            Register
            </button>
            <button className="btn btn-danger container"><Link to="/login" style={{color: "white"}}>Login</Link></button>
        </div>
        </div>
    );
    }
    export default RegistrationForm;

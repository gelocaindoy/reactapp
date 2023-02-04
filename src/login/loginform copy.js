import React, { useState, useEffect } from "react";
import firebase from "../login/firebase";
import "./login.css";
import "./google.css";
import Logo from "../img/gelo.png";
import { Link } from "react-router-dom";
import gIcon from "../img/g-normal.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User", user);
        setIsLoggedIn(true);
        // window.location.href = '/admin/dashboard'
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(true);
        // window.location.href = "/admin/dashboard";
      })
      .catch((error) => {
        console.error(error.message);
        if (error.code === "auth/wrong-password") {
          alert("Please enter the correct password.");
        } else if (error.code === "auth/too-many-requests") {
          alert(
            "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
          );
        } else if (error.code === "auth/user-not-found") {
          alert("There is no user record for this email. Please sign up");
        }
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      });
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;

    firebase.auth().signInWithPopup(provider).then((result) => {
      const currentUser = result.user;
      const userRef = firebase.database().ref(`/users${currentUser.uid}`);
      userRef.once('value').then(snapshot => {
        if (!snapshot.exists()) {
          userRef.set({
            email: currentUser.email,
            displayName: currentUser.displayName
          });
        } else {
          userRef.update({
            email: currentUser.email,
            displayName: currentUser.displayName
          });
        }
      });
    });

  return (
    <div className="main-outer-div">
      <div id="logo-div">
        <img src={Logo} className="logo-img" alt="" />
      </div>
      <h2 className="title text-center">Login</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="login-form-input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input
              className="login-form-input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="login-form-input" type="submit">
            Login
          </button>
          <button
            className="btn btn-danger container"
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            <Link to="/register" style={{ color: "white" }}>
              Sign Up
            </Link>
          </button>
          <span className="mt-5">Sign in with:</span>
          <button
            id="customBtn"
            className="customGPlusSignIn"
            onClick={handleGoogleLogin}
          >
            <div id="gSignInWrapper">
              <img className="icon" src={gIcon} alt="" />
              <span className="buttonText ">Google</span>
            </div>
          </button>
        </form>
      )}
    </div>
  );
}}

export default LoginForm;

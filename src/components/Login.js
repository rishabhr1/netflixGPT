import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        // Validate form data
        setErrorMessage(
            validate(
                name?.current?.value,
                email.current.value,
                password.current.value
            )
        );

        if (errorMessage) return;

        // Sign In/Up
        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:
                            "https://avatars.githubusercontent.com/u/73957359?v=4",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode + ": " + errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div>
                <img
                    className="absolute"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""
                />
            </div>
            <div className="flex h-screen">
                <form className="relative items-center p-12 bg-opacity-90 bg-black w-3/12 m-auto right-0 left-0 text-white rounded-sm">
                    <h1 className="font-bold text-3xl my-2 mb-8">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="rounded-sm bg-opacity-70 bg-slate-700  p-2 my-2 w-full "
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="rounded-sm bg-opacity-70 bg-slate-700  p-2 my-2 w-full "
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="rounded-sm bg-opacity-70 bg-slate-700 p-2 my-2 w-full"
                    />
                    <button
                        className="p-2 my-2 bg-red-600 hover:bg-red-700 rounded-sm w-full"
                        onClick={(e) => handleButtonClick(e)}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="text-red-500 text-sm pt-2">{errorMessage}</p>
                    {isSignInForm ? (
                        <p className="py-4" onClick={toggleSignInForm}>
                            New to Netflix?{" "}
                            <span className="hover:underline hover:cursor-pointer">
                                Sign up now
                            </span>
                            .
                        </p>
                    ) : (
                        <p className="py-4" onClick={toggleSignInForm}>
                            Already registered?{" "}
                            <span className="hover:underline hover:cursor-pointer">
                                Sign in now
                            </span>
                            .
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;

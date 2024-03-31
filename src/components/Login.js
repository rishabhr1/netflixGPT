import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
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
                <form className="relative items-center p-12 bg-opacity-80 bg-black w-3/12 m-auto right-0 left-0 text-white rounded-sm">
                    <h1 className="font-bold text-3xl my-2 mb-8">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="rounded-sm bg-opacity-70 bg-slate-700  p-2 my-2 w-full "
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="rounded-sm bg-opacity-70 bg-slate-700  p-2 my-2 w-full "
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-sm bg-opacity-70 bg-slate-700 p-2 my-2 w-full"
                    />
                    <button className="p-2 my-2 bg-red-600 hover:bg-red-700 rounded-sm w-full">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
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

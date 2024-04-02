import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {

            navigate("/");
          }).catch((error) => {
            navigate("/error")
          });
    };

    return (
        <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && <div className="flex">
                <img
                    className="w-8 h-8 my-auto"
                    src={user.photoURL}
                    alt="user icon"
                />
                <button type="button" onClick={handleSignOut} className="text-red-700 hover:text-white font-bold border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-2 py-1 flex my-auto ml-3 h-[35px] text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 m-0 p-0 dark:focus:ring-red-900">Sign Out</button>
            </div>}
        </div>
    );
};

export default Header;

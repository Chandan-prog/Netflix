import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
    const navigate = useNavigate()

    const user = useSelector((store) => store.user)

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName } = user;
            // update store
            dispatch(
              addUser({
                uid: uid,
                email: email,
                name: displayName,
              })
            );
           navigate('/browse')
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/')
          }
        });
      }, []);

    const signOutHandler = () => {
        signOut(auth).then(() => {
            // navigate('/');
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt='logo'
            className="w-44"
            />
            {user && <div className="flex p-2">
                <img 
                className="w-12 h-12"
                alt="img-sc" 
                src='https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4'/>
                <button onClick={signOutHandler} className="text-white">Sign out</button>
            </div>}
        </div>
    )
}
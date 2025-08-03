import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/url";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"; // ✅ merged into one import
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"; // ✅ added this
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Header = ({ isLogged }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ added this

  const handleSignout = () => {
    const authInstance = getAuth();
    signOut(authInstance)
      .then(() => {
        // navigate("/");
      })
      .catch(() => {
        navigate("/error");

      });
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=>{
unsubscribe()
    }
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black  z-10 w-full flex justify-between">
      <img className="w-48 mx-16 object-fit" src={LOGO_URL} />
      {isLogged && (
        <div className="text-white flex ">
          <img
            className="w-16 mx-2 h-16 my-4 p-2"
            src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          />
          <button
            className="my-4 mx-2 p-2 text-lg font-semibold cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

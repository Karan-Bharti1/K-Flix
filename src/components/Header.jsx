import React, { useEffect } from "react";
import { LOGO_URL, PROFILE_URL } from "../utils/url";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"; // ✅ merged into one import
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // ✅ added this
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { toggleGPTSearchView } from "../utils/gptSlice";
import lang, { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { updateLanguage } from "../utils/languageSlice";

const Header = ({ isLogged }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ added this
  const showGpt = useSelector((state) => state?.gpt?.showGptSearch);
  const language=useSelector(state=>state?.lang?.language)
  const handleSignout = () => {
    const authInstance = getAuth();
    signOut(authInstance)
      .then(() => {
        // navigate("/");
      })
      .catch(() => {
        // navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageChange = (event) => {
    dispatch(updateLanguage(event.target.value))
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black  z-100 w-full flex justify-between">
      <h1 className="text-red-500 text-5xl  w-48 ml-16 m-4 font-semibold font-mono">
        K-Flix
      </h1>
      {isLogged && (
        <div className="text-white flex my-2">
          <select
            className="bg-red-500/50 my-4 mx-2 rounded-lg p-2"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES?.map((lan, i) => (
              <option  key={i} value={lan?.identifier}>
                {lan?.name}
              </option>
            ))}
          </select>

          <button
            className="rounded-lg bg-red-500/50 my-4 py-0  mx-2 p-4  font-semibold cursor-pointer"
            onClick={handleGPTSearch}
          >
            {!showGpt ? lang[language].gptSearch :   lang[language].browse}
          </button>
          <button
            className="rounded-lg bg-red-500/50  my-4 mx-2 py-0 p-4  font-semibold cursor-pointer"
            onClick={handleSignout}
          >
            {lang[language].signout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

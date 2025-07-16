import React, { useEffect, useRef, useState } from "react";
import userIcon from "../assets/netflix-user.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { toggleGptSearch } from "../utils/store/slices/gptSearchSlice";
import { changeLangauge } from "../utils/store/slices/configSlice";
import { SUPPORTED_LANGAUGES } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchActive = useSelector(
    (store) => store.gptSearch.gptSearchActive
  );
  const selectedLanguage = useRef(null);
  const closeTimeoutRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Auth state monitoring
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully");
      setDropdownOpen(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = () => {
    if (selectedLanguage.current) {
      dispatch(changeLangauge(selectedLanguage.current.value));
    }
  };

  // Handlers for hover - keep dropdown open while hovering trigger or dropdown
  const openDropdown = () => {
    clearTimeout(closeTimeoutRef.current); // cancel pending close
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // small delay to allow hover into dropdown
  };

  return (
    <>
      {/* Header bar */}
      <div className="absolute w-full flex justify-between items-center px-4 py-2 bg-gradient-to-b from-black z-50">
        {/* Netflix Logo */}
        <img
          className="w-32 md:w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />

        {/* User controls */}
        {user && (
          <div className="flex items-center gap-5">
            {/* Language Selector */}
            <select
              id="language"
              name="language"
              onChange={handleLanguageChange}
              defaultValue="en"
              ref={selectedLanguage}
              className="w-full sm:w-48 bg-black/50 border border-gray-500 text-white px-3 py-2 rounded-md focus:outline-none"
            >
              {SUPPORTED_LANGAUGES.map(({ identifier, name }) => (
                <option key={identifier} value={identifier}>
                  {name}
                </option>
              ))}
            </select>

            {/* GPT Search Toggle */}
            <button
              onClick={handleGptToggle}
              className="p-2 rounded-md bg-purple-400 text-lg cursor-pointer"
            >
              {gptSearchActive ? "Explore Netflix" : "GPT Search"}
            </button>

            {/* User Profile and Dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {/* Trigger + Dropdown inside */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                ref={triggerRef}
              >
                <img
                  className="w-8 h-8 md:w-10 md:h-10 rounded-md"
                  src={userIcon}
                  alt="Netflix User Icon"
                />
                <IoMdArrowDropdown size={22} color="white" />
              </div>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-black text-white rounded shadow-lg w-48 z-50"
                  ref={dropdownRef}
                >
                  <div className="flex justify-end pr-2">
                    <TiArrowSortedUp size={24} color="white" />
                  </div>
                  <div className="p-3">
                    <h2 className="text-green-400 mb-2">
                      Hi, {user.displayName}
                    </h2>
                    <span className="hover:underline cursor-pointer block mb-2">
                      Account
                    </span>
                    <span className="hover:underline cursor-pointer block mb-2">
                      Help Center
                    </span>
                    <hr className="border-gray-600 my-2" />
                    <span
                      onClick={handleSignOut}
                      className="hover:underline cursor-pointer block"
                    >
                      Sign out of Netflix
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default Header;

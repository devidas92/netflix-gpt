import userIcon from "../assets/netflix-user.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
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
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Sign Out successfully");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      {" "}
      <div className="absolute w-full flex justify-between items-center px-4 py-2 bg-gradient-to-b from-black z-50">
        {/* Netflix Logo */}
        <img
          className="w-32 md:w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />

        {/* User Profile & Dropdown */}
        {user && (
          <div className="relative group ">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-8 h-8 md:w-10 md:h-10 rounded-md"
                src={userIcon}
                alt="Netflix User Icon"
              />
              <IoMdArrowDropdown size={22} color="white" />
            </div>

            <div className="right-0 mt-2  absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex justify-end pr-2">
                <TiArrowSortedUp size={24} color="white" />
              </div>
              {/* Dropdown menu */}
              <div className="w-48 bg-black text-white text-sm rounded shadow-lg ">
                <h2 className="p-2 text-green-400 ">Hi, {user.displayName}</h2>
                <div className="flex flex-col gap-2 px-4 py-3">
                  <span className="hover:underline cursor-pointer">
                    Account
                  </span>
                  <span className="hover:underline cursor-pointer">
                    Help Center
                  </span>
                  <hr className="border-gray-600" />
                  <span
                    onClick={handleSignOut}
                    className="hover:underline cursor-pointer"
                  >
                    Sign out of Netflix
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Header;

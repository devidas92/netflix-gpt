import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;

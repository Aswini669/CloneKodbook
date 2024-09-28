import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/home";
import Index from "./Pages";
import SignUp from "./Pages/signUp";
import NewPost from "./Pages/newPost";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/editProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="home" element={<Home />} />
      <Route path="openSignUp" element={<SignUp />} />
      <Route path="openNewPost" element={<NewPost />} />
      <Route path="openProfile" element={<Profile />} />
      <Route path="openEditProfile" element={<EditProfile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

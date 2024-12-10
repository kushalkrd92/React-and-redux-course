import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { path: "/", element: <PostList /> }, 
    { path: "/home", element: <PostList /> }, 
    { path: "/create-post", element: <CreatePost /> },
  ]},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
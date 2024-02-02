import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Layout from './component/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';
import Register from './pages/Register';
import Author from './pages/Author';
import AuthorPost from './pages/AuthorPost';
import PostDetails from './pages/PostDetails';
import Dashboard from './pages/Dashboard';
import DeletePost from './pages/DeletePost';
import EditPost from './pages/EditPost';
import UserProfile from './pages/UserProfile';
import CatogryPage from './pages/CatogryPage';
import CreatePost from './pages/CreatePost';
import LogOut from './pages/LogOut';
import ErrorPage from './pages/ErrorPage';


const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children : [
      { index: true, element: <Home />},
      {path: "Login", element: <Login />},
      {path: "Post/User/:id", element: <AuthorPost />},
      {path: "Author", element: <Author />},
      {path: "Register", element: <Register />},
      {path: "Post/:id", element: <PostDetails />},
      {path: "MyPost/:id", element: <Dashboard />},
      {path: "Post/:id/Delete", element: <DeletePost />},
      {path: "Post/:id/Edit", element: <EditPost />},
      {path: "Profile/:id", element: <UserProfile />},
      {path: "Post/Catogry/:Catogry", element: <CatogryPage />},
      {path: "Post/Create", element: <CreatePost />},
      {path: "LogOut", element: <LogOut />},

      
    ]
    
  }
]); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
    
  </React.StrictMode>
  
);



import PostIdPage from '../pages/PostIdPage'
import About from '../pages/About'
import Posts from '../pages/Posts';
import React from 'react';
import Login from './../pages/Login';


export const privatRoutes = [
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/posts/', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '*', element: <Posts/>},
]

export const publicRoutes = [
    {path: '/login/', element: <Login/>},
    {path: '*', element: <Login/>},
]
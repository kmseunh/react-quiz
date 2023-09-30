import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Quiz from './pages/Quiz.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/quiz',
        element: <Quiz />,
    },
    {
        path: '/profile',
        element: <UserProfile />,
    },
    {
        path: '/leaderboard',
        element: <Leaderboard />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

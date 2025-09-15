import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// We will import everything here to be 100% sure
import App from './App.jsx';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Assuming you renamed the file

// This is a standard, known-good router configuration.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This is a clearer way to define the default page
        element: <HomePage />,
      },
      {
        path: 'login', // No leading slash needed for child routes
        element: <LoginPage />,
      },
      {
        path: 'signup', // No leading slash needed for child routes
        element: <SignupPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
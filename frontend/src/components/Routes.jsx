import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LogementFiche from './pages/LogementFiche.jsx';
import Error from './pages/Error.jsx';
import './styles/index.css'

function Routes() {
    const router = BrowserRouter([
        {path:"/", element:<Home />, errorElement:<Error />},
        {path:"/about", element:<About />, errorElement:<Error />},
        {path:"/logement", element:<LogementFiche />, errorElement:<Error />},
        {path:"*", element:<Error />,},
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Routes

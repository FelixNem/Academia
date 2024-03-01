import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider
} from 'react-router-dom';

import {routerAcademia } from './router/AppRouter'

// import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ routerAcademia } />
  </React.StrictMode>,
)

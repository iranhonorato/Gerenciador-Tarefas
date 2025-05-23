import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Styles/index.css'
import App from './Pages/App.jsx'


const routerList = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerList}/>
  </StrictMode>,
)

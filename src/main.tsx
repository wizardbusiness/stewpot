import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Root from '../src/views/Root.tsx';
import '../src/views/Root.tsx';
import RouterErrorPage from './components/RouterError.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RouterErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

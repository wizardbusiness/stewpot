import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '../src/views/Root.tsx';
import Favorites from './views/Favorites.tsx';
import Pantry from './views/Pantry.tsx';
import FindRecipes from './views/FindRecipes.tsx';
import RouterErrorPage from './components/RouterError.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RouterErrorPage />,
    children: [
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'pantry',
        element: <Pantry />
      },
      {
        path: 'find%recipes',
        element: <FindRecipes />
      }
  ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

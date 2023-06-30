import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactDOM from 'react-dom/client'
import App from './App';
import Favorites from './views/Favorites';
import Pantry from './views/Pantry';
import FindRecipes from './views/FindRecipes';
import RouterErrorPage from './components/RouterError';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GenerateRecipe from './views/GenerateRecipe';
import LandingPage from './views/LandingPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouterErrorPage />,
    children: [
      {
        path: 'home',
        element: <LandingPage />
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'pantry',
        element: <Pantry />
      },
      {
        path: 'find-recipe',
        element: <FindRecipes />
      },
      {
        path: 'generate-recipe',
        element: <GenerateRecipe />
      }
  ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)



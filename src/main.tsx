import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Favorites from './views/Favorites.tsx';
import Pantry from './views/Pantry.tsx';
import FindRecipes from './views/FindRecipes.tsx';
import RouterErrorPage from './components/RouterError.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GenerateRecipe from './views/GenerateRecipe.tsx';
import LandingPage from './views/LandingPage.tsx';


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



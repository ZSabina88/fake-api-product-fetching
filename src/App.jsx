import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import ProductItem from "./components/ProductItem.jsx";
import ErrorPage from './pages/Error.jsx';
import ProductsErrorPage from './pages/ProductsError.jsx';
import LoginPage from './pages/Login.jsx';
import SignUpPage from './pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsPage />,
        errorElement: <ProductsErrorPage />
      },
      {
        path: "products/:id",
        element: <ProductItem />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "signup",
        element: <SignUpPage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

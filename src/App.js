import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Services from './component/Services/Services';
import Main from './leyout/Main'




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () =>  fetch('tshirt.json'),
          
          
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/services',
          element:<Services></Services>  
        },
        {
          path: '/orders',
          element:<Orders></Orders>
        },
        {
          path: '/footer',
          element:<Footer></Footer>
        }
      ]
    }
  ])
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
import RootLayout from './component/RootLayout';

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Dashboard/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

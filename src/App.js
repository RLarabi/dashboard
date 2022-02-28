import './App.css';
import SideBar from './components/SideBar/SideBar';
import Categories from './components/Pages/Categories'
import Products from './components/Pages/Products';
import Dashboard from './components/Pages/Dashboard';
import Orders from './components/Pages/Orders'
import Customers from './components/Pages/Customers'
import {Routes,Route} from 'react-router-dom';
import Login from './components/Pages/Login';
import PageNotFound from './components/Pages/PageNotFound';

function App() {
  return (
    <div className="App"> 
        <div className=''>
        <SideBar/>
        <Routes> 
          <Route path='/categories' element={<Categories/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='orders' element={<Orders/>}/> 
          <Route path='customers' element={<Customers/>}/>
          <Route path='login' element={<Login/>}/>    
          <Route path='*' element={<PageNotFound/>} />      
        </Routes>
        </div>
    </div>
  );
}

export default App;

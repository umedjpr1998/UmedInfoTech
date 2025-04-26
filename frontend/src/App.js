import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import FAQPage from './components/FAQPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProducts from './components/AddProducts';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/products' element={<Layout><Products /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/faqs' element={<Layout><FAQPage /></Layout>} />
        <Route path='/login' element={<Layout><Login /></Layout>} />
        <Route path='/signup' element={<Layout><Signup /></Layout>} />
        <Route path='/addproducts' element={<AddProducts />} />


        <Route path='*' element={<Layout><PageNotFound /></Layout>} />
      </Routes>
    </>
  );
}

export default App;

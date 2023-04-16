import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../homepage/MainPage';
import ProductPage from '../productpage/ProductPage';

export default function NavPage() {
  return (
    <Router>
      <Routes>
      <Route path='/home' element={<MainPage/>}  />
      <Route path='/products' element={<ProductPage/>}  />
      </Routes>
    </Router>
  );
} 

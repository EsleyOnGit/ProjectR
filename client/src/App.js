import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Card.css';
import './styles/Add.css';
import './styles/Edit.css';
import './styles/Delete.css';
import './styles/Show.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCadastro from './pages/autenticação/LoginCadastro';
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';
import ShowProducts from './pages/ShowProducts';
import NotFound from './pages/NotFound';
import Cadastro from './pages/autenticação/RegistryPage';

// Rota de erro - corresponderá a todas as URLs não correspondidas
// R
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginCadastro />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/show" element={<ShowProducts />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* Rota de erro - corresponderá a todas as URLs não correspondidas */}
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}
//sdsdcs
export default App;

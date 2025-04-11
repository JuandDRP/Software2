import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Personalizar from './pages/Personalizar';
import EstadoPedido from './pages/EstadoPedido';
import './App.css'; // o './styles.css' según cómo lo nombraste

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/personalizar/:tipo" element={<Personalizar />} />
        <Route path="/estado/:id" element={<EstadoPedido />} />
      </Routes>
    </Router>
  );
}

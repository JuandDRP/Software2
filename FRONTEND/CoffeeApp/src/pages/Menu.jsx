import { useEffect, useState } from 'react';
import { obtenerMenu } from '../api/menu';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarMenu = async () => {
      try {
        const datos = await obtenerMenu();
        setMenu(datos);
      } catch (error) {
        console.error('Error al cargar el menú:', error);
      }
    };

    cargarMenu();
  }, []);

  return (
    <div className="container">
      <h2>Menú de Bebidas</h2>
      {menu.length === 0 ? (
        <p>Cargando menú...</p>
      ) : (
        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              <span>{item.nombre} - ${item.precio}</span>
              <button onClick={() => navigate(`/personalizar/${item.tipo}`)}>
                Personalizar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { consultarEstado } from '../api/pedido';

export default function EstadoPedido() {
  const { id } = useParams();
  const [estado, setEstado] = useState('');

  useEffect(() => {
    const intervalo = setInterval(async () => {
      const data = await consultarEstado(id);
      setEstado(data.estado);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [id]);

  return (
    <div className="container">
      <h2>Estado del Pedido</h2>
      <p>Pedido #{id}: {estado}</p>
    </div>
  );
}

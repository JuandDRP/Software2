import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { personalizarBebida } from '../api/personalizacion';

export default function Personalizar() {
    const { tipo } = useParams();
    const navigate = useNavigate();
    const [estrategias, setEstrategias] = useState({
        leche: false,
        azucar: false,
        canela: false
    });

    //   const aplicar = async () => {
    //     try {
    //       await personalizarBebida(tipo, estrategias);
    //       alert('Personalización aplicada');
    //       navigate('/'); // 👈 redirige al menú
    //     } catch (error) {
    //       console.error('Error al personalizar:', error);
    //     }
    //   };
    const aplicar = async () => {
        try {
            console.log('Aplicar personalización ejecutado');
            const estrategiasSeleccionadas = Object.entries(estrategias)
                .filter(([_, activo]) => activo)
                .map(([clave]) => clave);
    
            console.log('Estrategias seleccionadas:', estrategiasSeleccionadas);
    
            const respuesta = await personalizarBebida(tipo, estrategiasSeleccionadas);
            console.log('Respuesta del backend:', respuesta);
    
            alert('Personalización aplicada');
            navigate('/');
        } catch (error) {
            console.error('Error al personalizar:', error);
        }
    };
    

    return (
        <div>
            <h2>Personalizar {tipo}</h2>
            <label>
                <input
                    type="checkbox"
                    checked={estrategias.leche}
                    onChange={() => setEstrategias({ ...estrategias, leche: !estrategias.leche })}
                />
                Leche
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={estrategias.azucar}
                    onChange={() => setEstrategias({ ...estrategias, azucar: !estrategias.azucar })}
                />
                Azúcar
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={estrategias.canela}
                    onChange={() => setEstrategias({ ...estrategias, canela: !estrategias.canela })}
                />
                Canela
            </label>
            <br />
            {/* <button onClick={() => console.log('clic')}>Aplicar Personalización</button> */}
            {/* <button onClick={() => alert('¡Click detectado!')}>Aplicar Personalización</button> */}
            <button onClick={() => {
                console.log("🧪 Click detectado, llamando aplicar...");
                aplicar();
            }}>Aplicar Personalización 1</button>

        </div>
    );
}

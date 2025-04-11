export async function personalizarBebida(tipo, estrategias) {
  const res = await fetch('http://localhost:4002/personalizar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tipo, estrategias }),
  });
  return await res.json();
}

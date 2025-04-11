# CoffeeApp 

## Arquitectura del Proyecto
Este proyecto está basado en microservicios:
- `MenuService` (3001)
- `PedidoService` (3002)
- `NotificacionService` (3004)
- `UsuarioService` (3005)
- `PersonalizacionService` (4002)

## Patrones de Diseño Aplicados

### 1. Strategy
Utilizado en el servicio de personalización para representar cada adición como una estrategia modificadora de la bebida.

### 2. Decorator
Cada estrategia se implementa como una clase decoradora que envuelve una bebida base, agregando funcionalidades sin alterar las clases originales.

## Antipatrón Identificado

### God Object
La clase `Cafe` y `Te` manejan múltiples responsabilidades: nombre, precio, comportamiento, y personalización. Esto las convierte en objetos con demasiadas responsabilidades.

## Caso Cotidiano
Aplicación de pedidos y personalización para una cafetería.

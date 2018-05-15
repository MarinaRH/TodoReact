# BUYTICKET (JOINNUS)

## Objetivo:

- Desarrollar una plataforma que permita realizar la compra de tickets  para eventos de tipo teatro,considerando que los escenarios pueden tener mas de un piso.

## Desarrollado para [Laboratoria](http://laboratoria.la)
## Flujo

- Identificar los componentes de la vista principal.

![component](componentes.png)

-Reconocer los componentes que se convertiran en containers y seran los **statefull** aquellos que realizaran las acciones de nuestro proyecto

- Identificar las acciones y los estados que ingresaran como parámetros.

- Se identifico la accion **SELECCIONAR_SECCION** y mediante el evento click se muestra la siguiente vista,donde se seleccionará las butacas para la compra de tickets.

- Para navegar entre la vista primncipal y la vista de selección de asientos,se creo una nueva acción llamada **NAVIGATOR_TO** que nos permite interactuar con las páginas.

```javascript

const reducer=(state,action)=>{

  switch (action.type) {
		case 'SELECCIONAR_SECCION':
			return {
				...state,
				seccionSeleccionada: action.seccion
			}
		case 'NAVIGATE_TO':
			return {
				...state,
				paginaActual: action.pagina
			}
		default:
			return state;
	}
```


## Demo

![vista1](vista1.PNG)

![vista2](vista2.PNG)

![vista3](vista3.png)

## Principales Herramientas
- React
- Redux

## Participantes
- Melyna Pernia
- Marina Rodriguez# TodoReact

## Challenge:
La idea es tratar de levantar una app sencilla que consuma un endpoint publico y mostrar la data recibida.

La app es simplemente un buscador que te sugiere tragos según tu busqueda (no estoy seguro que campos estan
indexados en la busqueda, pero se puede ingresar nombres de tragos, ingredientes, etc...)

Objetivo
- Crear una app con react, preferentemente > 16.8
- Permitir al usuario ingresar un texto de busqueda y mostrar los resultados en una lista (al menos imagen, nombre y categoria)
- Indicar el estado de carga mientras se esta procesando la busqueda
- Implementar una lista de favoritos. Mostrarla en alguna parte
- Permitir al usuario agregarlos o quitarlos de la lista. (mediante algun boton o clickeando el item)
- Mostrar un indicador al lado del nombre del trago si este se encuentra en la lista de favoritos

Opcional:
- Debounce
- Typescript
- Implementar algun test

*La idea de la lista de favoritos es utilizar algun contexto o algun otro metodo para compartir
data entre diferentes componentes (la lista propiamente dicha y el indicador al lado del nombre*

*No es necesario que la lista perdure, Sugerencia: usar contexto de react, redux, mobx, o incluso
el localStorage*

*No hace falta que la ui sea compleja mientras cumpla lo especificado*

API:
https://www.thecocktaildb.com/api/json/v1/1/search.php

- La api en cuestion acepta peticiones GET con el parametro "s" como campo de busqueda.
- La longitud debe ser mayor a 3 caracteres

La respuesta es un JSON con esta interfaz (simplificada)
~~~
interface Cocktail {
    dateModified: Date;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    ...
}
~~~

Example
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka


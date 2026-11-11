# Proyecto_medio_ciclo
Aqui se subiran los avances del proyecto de medio ciclo
//segundo se verifica si el codigo style.css (que se compartidos por las 3 paginas) cumple con los requisitos del CSS Validation Service pero sin errores.
//style.css
*CSS:El validador del W3C reporto 4 errores sintacticos entre las lineas 31 y 34  a continuacion los errores:
En la linea 31:el error de analisis sintactico es en {5 width: 100%; provocado por un caracter sobrante 5 al inicio de la propiedad width.
En la linea 32: El error de analisis sintactico es en padding: 8px; derivado de que la regla anterior no se cerro ni se estructuro correctamente debido al error tipografico del numero 5.
En la linea 33:El error de analisis sintactico es en margin-top: 4px; por la continuacion del mal formato de la regla CSS anterior.
y en la linea 34:El error de analisis sintactico es en la llave de cierre } es debido a que la estructura del bloque quedo mal interpretada por el validador por el mismo motivo.

*Correcciones en el style.css  
los cambios  de la corregidos fueron:
Eliminar el caracter sobrante (5): Se quito el numero 5 que estaba escrito por error justo despues de la llave de apertura, quedando la propiedad limpia como width: 100%;.
Y se Corrigio la sintaxis del bloque: Al remover ese caracter invalido, el analizador del W3C ya puede interpretar correctamente las propiedades del codigo style.css
/*
1) Foco en el INPUT del nombre
2) Al pulsar Intro salta al INPUT de los puntos
3) Al pulsar Intro en el INPUT de los puntos:
    a) Sólo acepta números enteros
    b) Si OK:
        * se guarda la puntuación con el nombre
        * se vacían los campos
        * el foco vuelve al INPUT del nombre
        * se actualiza la tabla en pantalla (si necesario)
4) En la tabla:
    a) Se muestran las puntuaciones de mayor a menor
    b) Sólo se muestran las 5 mejores aunque internamente
        haya muchas más almacenadas
5) Al refrescar la página, los puntos no se pierden
*/
dpg-d58nnpm3jp1c73bkmp0g-a
5432
curso_nestjs
curso_nestjs_user
kuXJLu3a2IFevAfuqHeviIwR91WYSGjk
postgresql://curso_nestjs_user:kuXJLu3a2IFevAfuqHeviIwR91WYSGjk@dpg-d58nnpm3jp1c73bkmp0g-a.virginia-postgres.render.com/curso_nestjs


Objetivo: Desarrollar y desplegar una API RESTful escalable utilizando NestJS,
PostgreSQL y TypeORM.

### Ubicación del Proyecto:
https://github.com/briammt-cmyk/mini-Netflix_proy.git


### Ubicación en RENDER
https://mini-netflix-proy.onrender.com

POSTMAN
https://mini-netflix-proy.onrender.com/auth/register

{
"username":"LuisThor",
"email":"luis4@gmail.com",
"password":"123456789"
}
https://mini-netflix-proy.onrender.com/auth/login
{
  "email": "luis3@gmail.com",
  "password": "123456789"
}

###COMPIAR EL TOKEN

###registro de la Serie

https://mini-netflix-proy.onrender.com/Serie
{
  "titulo": "La Coreana 2",
  "genero": "accion pruebas",
  "sinopsis": "accion",
  "urlPortada": "www.prueba.com6"
}



###Patch editar una serie
https://mini-netflix-proy.onrender.com/Serie/1
{
  "titulo": "La Coreana Venganza!",
  "genero": "Ciencia/Ficcion",
  "sinopsis": "Peleas de Ninjas pruebas",
  "urlPortada": "www.netwey.com"
}

###Eliminar una serie
https://mini-netflix-proy.onrender.com/Serie/1 

###Registrar un episodio
https://mini-netflix-proy.onrender.com/episodio
{
  "titulo": "El Tren Infinito",
  "duracion": 60,
  "Num_Cap": 2,
  "serieId": 2
}

###listar Episodios 
https://mini-netflix-proy.onrender.com/episodio

###listar Episodios por id
https://mini-netflix-proy.onrender.com/episodio/10
respuesta
{
    "id": 10,
    "titulo": "El Treb Infinito",
    "duracion": 60,
    "Num_Cap": 3,
    "serie": {
        "titulo": "DemonSlayer"
    }
}

###PATCH Actualizar episodios https://mini-netflix-proy.onrender.com/episodio/10
{
  "titulo": "El Tren Infinito",
  "duracion": 45, 
  "Num_Cap": 6,
  "serieId": 2
}

###Eliminar Episodio
 https://mini-netflix-proy.onrender.com/episodio/10


#CREDENCIALES.
BASE DE DATOS
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'crud_db'

  #ENDPOINTS
-cargarProductos
-crearProducto
-editarProducto
-eliminarProducto


#PUERTOS Y QUE CORRE EN CADA PUERTO
frontend:
      - "8081:80"
adminer:
      - "8080:8080"
db:
      - "3307:3306"
backend:
      - "3000:3000"

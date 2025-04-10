# Imagen base de Node.js
FROM node:23-slim


# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de la app al contenedor
COPY package.json ./
RUN npm install

COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]

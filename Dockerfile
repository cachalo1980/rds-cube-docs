# --- STAGE 1: Build ---
# Usamos una imagen de Node para construir el proyecto
FROM node:18-alpine AS builder

WORKDIR /app

# Copiamos solo los archivos de dependencias y las instalamos
# Esto aprovecha el caché de Docker si no cambian las dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Construimos el sitio estático
RUN npm run build

# --- STAGE 2: Production ---
# Usamos una imagen de Nginx súper ligera para servir los archivos
FROM nginx:1.23-alpine

# Copiamos la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos estáticos generados en el stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
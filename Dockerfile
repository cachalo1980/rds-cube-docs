# --- ETAPA 1: Construcción (La "Fábrica") ---
# Usamos una imagen oficial de Node.js (versión 18, ligera 'alpine') como base.
# Esta etapa solo existe para "construir" el sitio web. No irá al servidor final.
FROM node:18-alpine AS builder

# Establecemos el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copiamos los archivos de definición de dependencias PRIMERO.
# Docker es inteligente: si estos archivos no cambian, reutilizará la caché
# de este paso en futuras construcciones, haciéndolas mucho más rápidas.
COPY package.json ./
COPY package-lock.json ./

# Instalamos las dependencias del proyecto (Astro, Starlight, etc.).
RUN npm install

# Ahora copiamos el resto del código fuente de nuestro proyecto.
COPY . .

# Ejecutamos el comando de construcción de Astro.
# Esto compila la web y genera los archivos HTML/CSS/JS estáticos
# en una carpeta llamada 'dist'.
RUN npm run build


# --- ETAPA 2: Producción (El "Escaparate") ---
# Usamos una imagen oficial de Nginx, un servidor web súper ligero y rápido.
# Esta es la única parte que se desplegará en nuestro VPS.
FROM nginx:stable-alpine

# Antes de copiar nuestros archivos, eliminamos el contenido por defecto de Nginx.
RUN rm -rf /usr/share/nginx/html/*

# Copiamos ÚNICAMENTE la carpeta 'dist' (nuestra web ya construida)
# desde la etapa 'builder' al directorio donde Nginx sirve los archivos.
COPY --from=builder /app/dist /usr/share/nginx/html

# Le decimos a Docker que este contenedor expondrá el puerto 80
# (el puerto estándar para tráfico web HTTP).
EXPOSE 80

# Este es el comando que se ejecutará cuando el contenedor se inicie.
# Arranca el servidor Nginx en primer plano para que el contenedor se mantenga activo.
CMD ["nginx", "-g", "daemon off;"]
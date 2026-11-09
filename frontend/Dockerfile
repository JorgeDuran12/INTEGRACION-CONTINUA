# Etapa 1: Compilación de Vite/React
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: Servidor Web con Nginx versión fija
FROM nginx:1.25-alpine

# Copiar el resultado de la compilación de Vite al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
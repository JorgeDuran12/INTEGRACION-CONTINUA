Plataforma de Servicios Digitales

Descripción

Aplicación web tipo catálogo que permite explorar servicios digitales, visualizar su información detallada e interactuar con ellos mediante funcionalidades como favoritos y contacto.

Funcionalidades
Visualización de servicios en tarjetas dinámicas
Detalle completo de cada servicio
Sistema de favoritos con persistencia (localStorage)
Formulario de contacto con validaciones
Creación de nuevos servicios (CRUD básico)
Eliminación de servicios

Tecnologías utilizadas
React
Vite
Tailwind CSS
JavaScript (ES6)
LocalStorage

Estructura del proyecto

/src
/components
/pages
/data
/utils

# Entrega Proyecto 1: Docker con Dos Contenedores Comunicados

Este repositorio contiene la solución para la **Entrega Proyecto 1 (Escenario 3)** de la asignatura de Integración Continua. Se compone de dos servicios independientes orquestados mediante Docker Compose.

 ## Arquitectura del Proyecto

1. **Frontend (`/frontend`)**: Aplicación web construida con React y Vite, servida mediante Nginx en el puerto `3000`.
2. **Backend (`/backend`)**: API REST construida con Node.js y Express, ejecutándose en el puerto `5000`.

## 🛠️ Requisitos Previos

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
* [Git](https://git-scm.com/) para el control de versiones.

## 🚀 Comandos para Levantar el Proyecto

### 1. Clonar el Repositorio

git clone <URL_DE_TU_REPOSITORIO_GITHUB>
cd plataforma-servicios
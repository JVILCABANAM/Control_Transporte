# 🚛 Sistema de Gestión Logística

Es un sistema para la gestión de operaciones logísticas, incluyendo administración de camiones, conductores, rutas, entregas y tareas.

---

## 📋 Descripción

Este sistema permite gestionar todos los aspectos de una operación logística, desde el seguimiento de vehículos y conductores hasta la planificación de rutas y entregas. Incluye:

- Panel de control con estadísticas en tiempo real  
- Gestión de usuarios con roles y permisos  
- Asistente virtual para consultas rápidas

---

## ✨ Características

- 📊 **Panel de Control**: Visualización de estadísticas 
- 🚚 **Gestión de Camiones**: Registro y seguimiento de vehículos  
- 👨‍✈️ **Gestión de Conductores**: Administración de información de conductores  
- 🗺️ **Planificación de Rutas**: Creación y gestión de rutas  
- 📦 **Gestión de Entregas**: Seguimiento de entregas y estados  
- 📝 **Asignación de Tareas**: Creación y asignación de tareas a conductores  
- 👥 **Sistema de Usuarios**: Gestión de roles y permisos  
- 👤 **Perfil de Usuario**: Información personal y cambio de contraseña  
- 🤖 **Asistente Virtual**: Chatbot para consultas rápidas

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- React Vite  
- Tailwind CSS  
- React Router  
- Axios  
- Recharts  
- Lucide React

### Backend

- Node.js  
- Express  
- MySQL  
- bcrypt

---

   🚀INSTALACIONES🚀

## Frontend
 -  npm create vite@latest                                            
 -  npm install                                                       
 -  npm install tailwindcss @tailwindcss/forms postcss autoprefixer -D  
 -  npx tailwindcss init -p
 -  npm install react-icons                                          
 -  npm install axios                                                
 -  npm install react-dom                                            
## Backend
 - npm init -y                           
 - npm install express mysql2 cors      
 - npm install bcrypt                   
-  npm install dotenv                   


## Docker
  docker-compose down         
  docker-compose up --build   



## 📁 Estructura del Proyecto

```plaintext
Sistema-Gestion-Logistica/
├── Frontend/                  # Aplicación React
│   ├── src/
│   │   ├── app.jsx            # Punto de entrada
│   │   ├── Autenticacion/     # Componentes de autenticación
│   │   ├── componentes/       # Componentes reutilizables
│   │   ├── context/           # Contextos de React
│   │   ├── pages/             # Páginas principales
│   │   ├── routes/            # Configuración de rutas
│   │   └── styles/            # Estilos CSS
│   ├── index.html
│   └── vite.config.js
│
├── Server/                    # Backend Node.js/Express
│   ├── controlador/           # Controladores de la API
│   ├── routes/                # Rutas de la API
│   ├── sql/                   # Scripts SQL
│   ├── database.js            # Configuración de la base de datos
│   ├── index.js               # Punto de entrada del servidor
│   └── initDb.js              # Inicialización de la base de datos
│
└── docker-compose.yml         # Configuración de Docker

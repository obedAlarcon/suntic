# SunTIC – Backend de Gestión de Dispositivos de sistema cctv en  Hospital

SunTIC es una **aplicación backend** diseñada para la **gestión, control y seguimiento de dispositivos tecnológicos en cctv** dentro de un hospital.  
Centraliza la información técnica de los dispositivos, los recorridos diarios por áreas y las tareas operativas asociadas.

---

## 📌 Descripción

El sistema permite administrar la información de **todos los dispositivos de la institución**, organizados por áreas, y registrar los **recorridos diarios de inspección** que se realizan normalmente en las mañanas.

Durante cada recorrido se recolecta información como:
- Estado de funcionamiento de los dispositivos
- Responsable o jefe de área en turno
- Tareas realizadas o pendientes
- Observaciones técnicas

SunTIC expone esta información a través de una **API REST**, facilitando su consulta, registro y actualización.

---

## 🚀 Funcionalidades principales

### 🖥️ Gestión de dispositivos
- Registro de dispositivos por área
- Información técnica detallada:
  - IP
  - Número de serie
  - Año de fabricación
  - Estado (activo / fuera de servicio / fijo)
  - Imagen
  - Area 
  - Usuario
  - Password 
  - Ubicacion 
- Actualización del estado operativo

### 🏥 Áreas y responsables
- Organización de dispositivos por área
- Registro del jefe o responsable de área por turno

### 🔁 Recorridos diarios
- Registro de recorridos de inspección
- Verificación del estado de cada dispositivo
- Observaciones por área y dispositivo

### 📝 Tareas
- Listado de tareas asociadas a los recorridos
- Seguimiento de actividades realizadas
- Control operativo diario

---

## 🧰 Tecnologías utilizadas

- **Node.js**
- **Express**
- **JavaScript**
- **Sequelize** (ORM)
- **Base de datos relacional**
- **Docker / Docker Compose**
- **Variables de entorno (.env)**

---

## 📦 Instalación y ejecución local

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/obedAlarcon/suntic.git
cd suntic


inatallar  dependencias
npm install


Ejecucion de la aplicacion
docker-compose up -d postgres
docker-compose up -d pgadmin
  
  Estructura del proyecto


 suntic/
├── .editorconfig
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .sequelizerc
├── docker-compose.yml
├── index.js                    # Punto de entrada de la API
├── package.json
├── package-lock.json
│
├── config/
│   └── config.js               # Configuración general de la aplicación
│
├── db/
│   ├── config.js               # Configuración de Sequelize
│   ├── migrations/             # Migraciones de base de datos
│   └── models/                 # Modelos ORM
│       ├── area.model.js
│       ├── bosses.model.js
│       ├── customer.model.js
│       ├── devices.model.js
│       ├── maint.model.js
│       ├── order-maint.model.js
│       ├── task.model.js
│       ├── technicians.model.js
│       ├── tool.model.js
│       ├── tours.model.js
│       ├── user.model.js
│       └── index.js             # Inicialización y asociaciones de modelos
│
├── libs/
│   ├── postgres.js             # Conexión directa a PostgreSQL
│   ├── postgres.pool.js        # Pool de conexiones
│   └── sequelize.js            # Inicialización de Sequelize
│
├── middlewares/
│   ├── auth.handler.js         # Autenticación y autorización
│   ├── error.handler.js        # Manejo centralizado de errores
│   └── validator.handler.js    # Validación de datos
│
├── routes/
│   ├── areas.router.js
│   ├── bosses.router.js
│   ├── customer.router.js
│   ├── devices.router.js
│   ├── maint.router.js
│   ├── order-maint.router.js
│   ├── tasks.router.js
│   ├── technicians.router.js
│   ├── tools.router.js
│   ├── tours.router.js
│   ├── users.router.js
│   └── index.js                # Registro de rutas (/api/v1)
│
├── schemas/
│   ├── areas.schema.js
│   ├── bosses.schema.js
│   ├── customer.schema.js
│   ├── devices.schema.js
│   ├── maint.schema.js
│   ├── order-maint.schema.js
│   ├── tasks.schema.js
│   ├── technicians.schema.js
│   ├── tool.schema.js
│   ├── tours.schema.js
│   └── user.schema.js
│
├── services/                   # Lógica de negocio
├── postgres_data/              # Volumen de datos PostgreSQL (Docker)
└── README.md

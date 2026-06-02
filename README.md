# 🌾 Campo Admin - Sistema de Gestión Agrícola

Sistema integral de gestión agrícola para cultivos, ganadería y administración de hacienda.

## 🎯 Características Principales

### 🌱 Gestión de Cultivos
- Registro de siembras y cosechas
- Rotación de cultivos
- Cultivos soportados: Cebada, Cereales, Soja, Trigo, Papa
- Calendario agrícola
- Seguimiento del ciclo de cultivo

### 💧 Control de Riego y Clima
- Registro de datos climáticos
- Control de riego (programado y manual)
- Alertas de condiciones climáticas
- Integración con sensores IoT (opcional)

### 🔧 Inventario
- Gestión de herramientas
- Control de maquinaria
- Registro de mantenimiento
- Seguimiento de disponibilidad

### 💰 Gestión Financiera
- Registro de gastos y ganancias
- Control de costos por cultivo
- Reportes financieros
- Análisis de rentabilidad

### 🐄 Gestión de Hacienda
- Registro de animales
- Control de rotación de pastos
- Historial de salud animal
- Producción ganadera

### 🗺️ Mapeo de Parcelas
- Visualización interactiva de terrenos
- Delimitación de parcelas
- Historial de uso de terrenos
- Análisis de cobertura

### 🐛 Control de Plagas y Enfermedades
- Registro de incidencias
- Tratamientos aplicados
- Monitoreo de plagas
- Alertas de enfermedades

### 👥 Gestión de Empleados
- Registro de trabajadores
- Asignación de tareas
- Control de asistencia
- Historial laboral

### 📊 Reportes y Análisis
- Reportes de cosechas
- Análisis de rentabilidad
- Estadísticas de producción
- Exportación de datos

## 🏗️ Arquitectura del Proyecto

```
campo-admin/
├── backend/                 # API REST (Node.js + Express)
├── frontend-web/            # Interfaz Web (React)
├── mobile/                  # App Mobile (React Native)
├── database/                # Scripts SQL
├── docs/                    # Documentación
└── docker-compose.yml       # Orquestación de servicios
```

## 🛠️ Stack Tecnológico

### Backend
- **Node.js** + Express
- **PostgreSQL** - Base de datos
- **Sequelize** - ORM
- **JWT** - Autenticación
- **Multer** - Gestión de archivos

### Frontend Web
- **React** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Leaflet** - Mapeo
- **Chart.js** - Gráficos
- **Axios** - Cliente HTTP

### Mobile
- **React Native** + Expo
- **Redux** - State management
- **SQLite** - Almacenamiento local
- **Mapbox** - Mapeo mobile

## 🚀 Instalación Rápida

### Requisitos
- Node.js v16+
- PostgreSQL 12+
- Git

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm start
```

### Frontend Web
```bash
cd frontend-web
npm install
npm run dev
```

### Mobile
```bash
cd mobile
npm install
npm start
```

## 📚 Documentación

- [Setup Inicial](./docs/SETUP.md)
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Contribución](./docs/CONTRIBUTING.md)

## 👤 Autor

**OskiNexium**

## 📝 Licencia

MIT License - Ver LICENSE.md

---

**Estado del Proyecto**: 🚧 En desarrollo

Última actualización: 2026-06-02

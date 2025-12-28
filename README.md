# Relatos de Papel

Aplicación web para la gestión de una librería online desarrollada con React, TypeScript y Vite.

## 🏗️ Arquitectura

Este proyecto sigue una **arquitectura hexagonal** (hexagonal architecture) para mantener una separación clara entre la lógica de negocio y los detalles de implementación.

### Estructura de Módulos

Cada módulo sigue la misma estructura hexagonal:

```
modules/
  └── [module-name]/
      ├── domain/              # Capa de dominio (modelos y puertos/interfaces)
      │   ├── [model].model.ts
      │   └── ports/           # Interfaces (input-service y output-repository)
      ├── application/         # Capa de aplicación (servicios de negocio)
      │   └── [service].service.ts
      ├── adapters/
      │   ├── input/           # Componentes React (vista)
      │   │   ├── [component].tsx
      │   │   ├── [component].scss
      │   │   └── index.scss
      │   └── output/          # Repositorios (acceso a datos)
      │       ├── [repository].mock.ts
      │       ├── [repository]-http.repository.ts
      │       └── repository.provider.ts
      └── index.ts             # Exportaciones del módulo
```

### Módulos del Proyecto

- **books**: Gestión de libros (listado, búsqueda, detalles)
- **cart**: Carrito de compras (Context API para estado global)
- **checkout**: Proceso de pago
- **home**: Página principal (lista de libros)
- **landing**: Vista de acceso/landing page

## 🛠️ Tecnologías

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router v6** - Enrutamiento
- **TanStack Query** - Gestión de estado del servidor
- **SCSS** - Estilos con metodología BEM
- **Arquitectura Hexagonal** - Separación de responsabilidades

## 📁 Estructura del Proyecto

```
src/
├── assets/                    # Recursos globales
│   └── global.style.scss     # Estilos globales (importa todos los módulos)
├── common/                    # Código compartido
│   ├── context/              # Contextos globales (DI Context)
│   ├── domain/               # Interfaces y modelos comunes
│   └── utils/                # Utilidades (env-manager, provider-factory)
├── modules/                   # Módulos de negocio (estructura hexagonal)
├── routes/                    # Configuración de rutas
│   └── pages/                # Definición de rutas
├── utils/                     # Utilidades generales
│   └── config/               # Configuraciones (QueryClient, etc.)
└── environments/             # Archivos de entorno
    ├── .env.mocked
    ├── .env.local
    ├── .env.development
    ├── .env.test
    └── .env.production
```

## ⚙️ Configuración de Entornos

El proyecto utiliza variables de entorno para configurar el comportamiento según el ambiente. Los archivos de entorno se encuentran en `src/environments/`.

### Variables de Entorno

- **VITE_ENVIRONMENT**: Define el entorno actual
  - `mocked`: Usa datos mock (por defecto)
  - `local`: Entorno local
  - `development`: Entorno de desarrollo
  - `test`: Entorno de test
  - `production`: Entorno de producción
  
- **VITE_API_URL**: URL de la API (solo se usa cuando no es `mocked`)

### Provider Factory

El proyecto utiliza un sistema de **provider factory** que selecciona automáticamente el repositorio correcto (mock o HTTP) según el entorno configurado en `VITE_ENVIRONMENT`.

## 🚀 Instalación

```bash
npm install
```

## 💻 Desarrollo

### Scripts Disponibles

```bash
# Desarrollo genérico (sin especificar entorno)
npm run dev

# Entorno mock (por defecto, usa datos mock)
npm run start

# Entorno local
npm run start:local

# Entorno de desarrollo
npm run start:dev

# Entorno de test
npm run start:test
```

Los scripts automáticamente copian el archivo de entorno correspondiente desde `src/environments/` a la raíz del proyecto antes de ejecutar.

### Configuración Manual (Opcional)

Si prefieres configurar manualmente, copia el archivo de entorno correspondiente:

```bash
# Linux/Mac
cp src/environments/.env.mocked .env
cp src/environments/.env.local .env
cp src/environments/.env.development .env
cp src/environments/.env.test .env

# Windows
copy src\environments\.env.mocked .env
copy src\environments\.env.local .env
copy src\environments\.env.development .env
copy src\environments\.env.test .env
```

## 🏗️ Build

```bash
# Build por defecto
npm run build

# Build para entornos específicos
npm run build:local
npm run build:dev
npm run build:test
npm run build:production
```

## 👀 Preview

```bash
npm run preview
```

## 🧪 Linting

```bash
npm run lint
```

## 📝 Rutas de la Aplicación

- `/` - Landing (vista de acceso)
- `/books` - Home (página principal con lista de libros)
- `/book/:id` - BookDetail (detalles de un libro)
- `/checkout` - Checkout (proceso de pago)

## 🎨 Estilos

Los estilos están organizados siguiendo la metodología **BEM** (Block Element Modifier) y se importan centralmente en `src/assets/global.style.scss` usando `@forward` (sintaxis moderna de Sass).

Cada módulo tiene su propio archivo `index.scss` en `adapters/input/` que importa los estilos de sus componentes.

## 🔧 Configuración de Git

El repositorio está configurado con:
- **Usuario**: Santiago Barrios
- **Email**: santiagobarriosgijalba.08@gmail.com
- **Remote**: https://github.com/Santiago-Barrios/relatos-de-papel-unir.git

La configuración es **local** (solo para este repositorio) y no afecta otros proyectos en tu PC.

## 📚 Convenciones

- **Arquitectura Hexagonal**: Separación clara entre dominio, aplicación y adaptadores
- **TypeScript**: Tipado estricto habilitado
- **Path Aliases**: Uso de `@modules`, `@common`, `@utils`, `@app`
- **SCSS Moderno**: Uso de `@forward` en lugar de `@import` (deprecado)
- **Provider Factory**: Selección automática de repositorios según entorno
- **DI Context**: Inyección de dependencias mediante Context API

## 🤝 Contribuir

1. Asegúrate de tener la última versión del código
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios siguiendo la arquitectura hexagonal
4. Ejecuta `npm run lint` antes de hacer commit
5. Haz commit y push de tus cambios
6. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte del máster de Desarrollo Web Full Stack de la UNIR.

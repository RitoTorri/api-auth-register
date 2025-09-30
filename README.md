# 🔐 AuthAPI 

Una API de autenticación robusta y fácil de implementar que elimina la carga repetitiva de manejar registro y autenticación de usuarios en tus proyectos.

## 🎯 Objetivo

**Autenticación sin complicaciones** - Esta API está diseñada para liberarte de la tarea repetitiva de implementar sistemas de registro y login. Proporciona un sistema seguro y listo para usar que retorna tokens de acceso JWT.

## ✨ Características

- ✅ **Registro de usuarios** seguro con validación
- ✅ **Autenticación** con verificación de credenciales
- ✅ **Generación de tokens JWT** para acceso seguro
- ✅ **Validación de tokens** para proteger endpoints
- ✅ **Base de datos personalizable** según tus necesidades
- ✅ **Manejo de errores** completo y descriptivo

## 🛠 Tecnologías

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-336791?style=for-the-badge&logo=postgresql)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/RitoTorri/auth-api

# Navegar al directorio
cd auth-api

# Instalar dependencias
yarn install

# Iniciar en modo desarrollo
yarn dev
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=auth_db
DB_PORT=5432
ACCESS_KEY=tu_llave_secreta_super_segura
```

## 🗃️ Base de Datos

Crea la tabla de usuarios en PostgreSQL:

```sql
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 🎨 Personalización

**¡Puedes personalizar la base de datos!** Solo necesitas:

1. Agregar campos adicionales a la tabla `Usuarios`
2. Modificar los endpoints para recibir los nuevos parámetros
3. Actualizar la consulta de registro

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta API, no dudes en hacer un fork y crear un pull request.

---
*¿Te gustó la API? ¡Dale una ⭐ en GitHub!*

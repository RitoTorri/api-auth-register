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

**Ejemplo de campos adicionales:**
```sql
ALTER TABLE Usuarios ADD COLUMN nombre VARCHAR(100);
ALTER TABLE Usuarios ADD COLUMN apellido VARCHAR(100);
ALTER TABLE Usuarios ADD COLUMN telefono VARCHAR(15);
```

## 📡 Endpoints

### 🔑 Autenticación

#### `POST /api/v1/login`
Autentica un usuario y retorna un token JWT con los datos del usuario con el id y el email.

**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseñaSegura123"
}
```

**Respuestas:**
- `200` - ✅ Login exitoso, retorna token
- `400` - ❌ Faltan credenciales o contraseña incorrecta
- `404` - ❌ Usuario no encontrado
- `422` - ❌ Formato de email o contraseña inválido
- `500` - ❌ Error interno del servidor

### 📝 Registro

#### `POST /api/v1/register`
Registra un nuevo usuario en el sistema.

**Body:**
```json
{
  "email": "nuevo@usuario.com",
  "password": "contraseñaSegura123"
}
```

**Respuestas:**
- `201` - ✅ Usuario creado exitosamente
- `400` - ❌ Faltan parámetros requeridos
- `409` - ❌ El usuario ya existe
- `422` - ❌ Formato de parámetros inválido
- `500` - ❌ Error interno del servidor

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta API, no dudes en hacer un fork y crear un pull request.

---
*¿Te gustó la API? ¡Dale una ⭐ en GitHub!*

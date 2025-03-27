# 🦉 Owl Systems – Website Frontend

Este proyecto es parte del entorno monorepo de **Owl Systems**, utilizando **NX** y **Lerna** para la gestión inteligente de paquetes y builds.

> 📦 Paquetes clave:
>
> - `@owl-systems/ui-kit` → Librería de componentes reutilizables
> - `@owl-systems/website` → Sitio web principal (este repositorio)

---

## 🚀 Setup

### 🔧 Requisitos previos

Asegurate de tener instaladas las siguientes herramientas:

- [NVM (Unix/macOS)](https://github.com/nvm-sh/nvm) / [NVM (Windows)](https://github.com/coreybutler/nvm-windows)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

---

### 📦 Instalación del entorno

1. Instalar versión correcta de Node (definida en `.nvmrc`):

\`\`\`bash
nvm install
nvm use
\`\`\`

2. Instalar dependencias del monorepo:

\`\`\`bash
yarn install
\`\`\`

---

## 🛠️ Comandos útiles

> Todos los scripts están optimizados con **NX** para evitar builds innecesarios usando **caché automático**.

### 🧪 Ejecutar el website (modo dev)

\`\`\`bash
yarn dev
\`\`\`

Esto ejecutará el script `dev` del sitio web (`@owl-systems/website`) y compilará automáticamente su dependencia (`@owl-systems/ui-kit`) si es necesario.

> ✅ Si no hay cambios en `ui-kit`, NX usará cache y evitará recompilar.

---

### 🧪 Ejecutar en modo desarrollo con watch activo

\`\`\`bash
yarn watch
\`\`\`

Esto ejecuta **simultáneamente**:

- `yarn dev` → corre el sitio web en modo `hot reload`
- `yarn watch:ui-kit` → activa watch del `ui-kit` para recompilar en caliente ante cambios

---

## 📚 Otros comandos disponibles

| Comando                | Descripción                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `yarn build`           | Build completo de `@owl-systems/website` y sus dependencias |
| `yarn build:ui-kit`    | Compila solo el paquete `@owl-systems/ui-kit`               |
| `yarn build:storybook` | Compila todos los storybooks disponibles                    |
| `yarn eslint`          | Lint global con ESLint en todos los paquetes                |
| `yarn format`          | Formatea todo el proyecto con ESLint + Prettier             |
| `yarn check-format`    | Verifica formato sin aplicar cambios                        |
| `yarn prepare`         | Instala hooks de Husky                                      |
| `yarn storybook`       | Corre storybook local (si está configurado por paquete)     |

---

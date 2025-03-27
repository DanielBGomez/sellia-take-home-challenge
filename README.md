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

## 📖 Storybook – Documentación de Componentes

Este proyecto incluye una instancia de [Storybook](https://storybook.js.org/) para documentar visualmente todos los componentes del `UI Kit`.

### 👉 Ver Storybook en desarrollo

```bash
yarn storybook
```

> Esto abrirá una interfaz donde podés visualizar y probar todos los componentes reutilizables del sistema de diseño.

### 📦 ¿Dónde se definen los stories?

Cada componente del `@owl-systems/ui-kit` puede tener su archivo `*.stories.tsx` en la misma carpeta o en `/stories`.

---

## 🎨 Style Guide & Sistema de Diseño

### 🧠 Base de estilos

Toda la identidad visual del sistema está centralizada en el archivo:

```
packages/ui-kit/src/theme.ts
```

Ahí se definen:

- Paleta extendida de colores (`primaryDark`, `tertiary`, `surface`, etc.)
- Tipografías personalizadas (`small`, `smallest`, `body`)
- Breakpoints, borderRadius, sombras y otros tokens

### 🧾 Enlace a Figma

Para complementar el código con la referencia visual, podés acceder al **Style Guide en Figma**:

👉 [Abrir Style Guide en Figma](https://www.figma.com/design/8V8knFbOIeDyCxxYxNxr9N/Sellia?node-id=10-1513&m=dev)

> Incluye tokens, ejemplos de componentes, tipografías, colores, entre otros.

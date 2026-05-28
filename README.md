# EMEGE Briefing Online

Proyecto estático preparado para Netlify Forms.

## Archivos

- `index.html`: cuestionario principal.
- `gracias.html`: página de confirmación tras enviar.
- `netlify.toml`: configuración básica de despliegue en Netlify.

## Envío de respuestas

El formulario usa Netlify Forms:

```html
<form name="briefing-emege" method="POST" data-netlify="true" action="/gracias.html">
```

Cuando esté publicado en Netlify:

1. Entra en el panel del sitio.
2. Ve a **Forms**.
3. Comprueba que aparece el formulario `briefing-emege`.
4. Configura notificaciones a `infoemege@proton.me`.

## Despliegue recomendado

1. Crea un repositorio en GitHub.
2. Sube estos archivos a la raíz del repositorio.
3. En Netlify, crea un nuevo sitio desde GitHub.
4. Build command: dejar vacío.
5. Publish directory: `.`

## Acceso con contraseña

La página incluye una pantalla de acceso sencilla.

Clave configurada:

```text
Emege.2026
```

Esta protección es práctica para clientes, pero no es seguridad avanzada porque la clave está dentro del HTML. Para un briefing privado de uso normal es suficiente.

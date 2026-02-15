# Propuesta: Panel de Administración para CMC Distribuciones

Este documento resume las opciones para implementar un panel de administración (`/admin`) que permita gestionar productos y descripciones de forma dinámica, aprovechando la infraestructura actual en **Cloudflare Pages**.

## Objetivo
Permitir que una persona sin conocimientos técnicos (como tu padre) pueda agregar, editar o eliminar productos de las secciones de **Salud** y **Tecnología** sin necesidad de tocar el código fuente.

---

## Opción 1: Decap CMS (Enfoque basado en Git)
Es un gestor de contenido que se integra directamente en tu repositorio.
- **Funcionamiento:** Se añade una carpeta `/admin` con un archivo de configuración. Al entrar, se muestra una interfaz visual para editar tus archivos JSON actuales.
- **Ventajas:** Gratis, no requiere base de datos, los cambios quedan guardados en Git.
- **Desafío:** Los cambios tardan 1-2 minutos en verse reflejados (tiempo de compilación de Cloudflare).

## Opción 2: Google Sheets como Base de Datos
- **Funcionamiento:** Los productos se gestionan en una hoja de cálculo de Google. El sitio web lee esta hoja mediante una **Cloudflare Function**.
- **Ventajas:** Interfaz familiar (Excel), actualización casi instantánea en el sitio.
- **Desafío:** Configuración inicial de las APIs de Google.

## Opción 3: Cloudflare Native (Workers + D1 + Access) - *Recomendada*
La solución más profesional y robusta dentro del ecosistema de Cloudflare.
- **Seguridad (Cloudflare Access):** Protege la ruta `/admin` permitiendo el acceso solo mediante validación por email (sin necesidad de programar login).
- **Base de Datos (D1):** Los productos se mueven de archivos JSON a una base de datos SQLite nativa de Cloudflare.
- **Interfaz:** Un formulario sencillo en `/admin` para subir fotos y textos.
- **Ventajas:** Instantáneo, escalable y muy seguro.

---

## Hoja de Ruta Sugerida
1. **Unificar Datos:** Modificar la sección de "Tecnología" para que lea de un archivo JSON (igual que Salud).
2. **Setup de Seguridad:** Configurar Cloudflare Access para proteger la futura ruta `/admin`.
3. **Migración a DB:** Elegir entre KV (rápido) o D1 (relacional) para guardar los productos.
4. **Desarrollo del Panel:** Crear una interfaz minimalista y "premium" para la carga de datos.

---
*Documento preparado por Antigravity - 2026-02-13*

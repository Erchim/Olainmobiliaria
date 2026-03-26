# OLA Inmobiliaria v3

Cambios principales:
- Galería con clic a imagen en tamaño completo
- Navegación con flechas en modo fullscreen
- Tercer inmueble agregado: coca-cola-commercial
- Fotos reales locales para el objeto coca-cola-commercial


## Cambios de la versión 4
- Primer terreno actualizado con fotos reales del lote privado
- Nueva galería del inmueble en zona privada cerca de Coca-Cola
- Botón flotante de WhatsApp para mejorar conversión
- Mejoras de presentación (favicon, color del navegador y metadatos básicos)


## Cambios de la versión 5
- Nuevo bloque de confianza debajo del hero
- Primer terreno privado actualizado con las 5 fotos más recientes
- Etiqueta visible de estatus del inmueble
- Mensajes de WhatsApp con mejor rastreo de origen
- Mejoras de carga perezosa (lazy loading) en imágenes de propiedades y galería


## Cambios de la versión 6
- Clic directo sobre la foto principal de cada inmueble para abrir galería
- Contador visible de fotos por propiedad
- Hint dentro de la galería para indicar vista en tamaño completo
- Soporte de swipe en móvil dentro del visor fullscreen
- Barra discreta con los inmuebles activos para que la vitrina se sienta más viva
- Nota de proceso en la sección de propiedades para reforzar confianza y filtrado


## Rama estable recomendada
Esta versión se toma desde la última base que funcionaba correctamente en navegador.

### Motivo
Las iteraciones posteriores introdujeron una regresión en JavaScript. En vez de seguir apilando cambios sobre una rama inestable, esta versión queda marcada como base estable para continuar mejoras en pasos más pequeños y verificables.


## Cambios de la versión 10
- Nueva sección “Enfoque / Approach” para que la marca se sienta menos plantilla y más negocio real
- Chips de propiedades ahora clicables para llevar al usuario directo a la ficha correspondiente
- IDs internos por inmueble para facilitar navegación y futuras referencias
- Validación de sintaxis JS: OK


## Cambios de la versión 11
- Nueva sección FAQ con respuestas seguras y útiles para reforzar confianza
- Enlace FAQ agregado a la navegación superior
- Nota de contacto más clara sobre idioma y visitas
- Scroll más limpio hacia secciones y fichas de inmuebles
- Validación de sintaxis JS: OK


## Cambios de la versión 12
- Botón flotante para volver arriba sin perder el contexto del sitio
- Preferencia de idioma guardada en `localStorage`
- Reordenadas las propiedades para priorizar primero los inmuebles urbanos y dejar el rústico después
- Validación de sintaxis JS: OK


## Cambios de la versión 13
- FAQ visible también desde la navegación superior
- JSON-LD básico restaurado para reforzar preparación del sitio frente a buscadores y perfiles de negocio
- Acciones rápidas en contacto: consulta general, inversión y visita
- Eliminada la tarjeta “placeholder” de futuras propiedades para que la vitrina se sienta más seria
- Nota discreta bajo propiedades en lugar de una tarjeta de relleno
- Validación de sintaxis JS: OK


## Cambios de la versión 14
- Testimonios reemplazados por una versión más honesta y menos “demo”
- Señales de servicio agregadas al bloque de contacto: bilingüe, visitas con cita y proceso guiado
- Ajustes para que la percepción del sitio sea más cercana a una vitrina seria y menos a un template
- Validación de sintaxis JS: OK


## Cambios de la versión 15
- Hero con una nota más premium y menos genérica
- Banda “land-first” antes de las propiedades para reforzar la lógica de vitrina de terrenos
- Categoría visible por inmueble (urbano / rústico)
- Highlights cortos dentro de cada ficha para que la lectura sea más útil y más cercana al mundo de lotes/terrenos
- Validación de sintaxis JS: OK


## Fix de la versión 15
- Corregidas las traducciones faltantes de la banda `landFocus`
- Añadido fallback más seguro para claves faltantes de traducción
- Validación de sintaxis JS: OK


## Cambios de la versión 16
- Iteración pequeña y segura centrada en textos
- Hero y bloque “Nosotros” con tono más claro, más serio y menos genérico
- Ajustes leves en enfoque, proceso y contacto para que la conversación se sienta más profesional
- Pulido menor de legibilidad en párrafos
- Validación de sintaxis JS: OK


## Cambios de la versión 17
- Paso pequeño enfocado en simplificar el camino de contacto
- Eliminadas las acciones rápidas redundantes dentro del bloque de contacto
- Hero y contacto con texto ligeramente más claro y más directo
- Se mantiene la señalización útil (bilingüe, visitas con cita, proceso guiado) pero con menos ruido visual
- Validación de sintaxis JS: OK


## Cambios de la versión 18
- Jerarquía visual más clara entre inmuebles
- Primer terreno destacado como oportunidad principal
- Etiquetas discretas para distinguir opción principal, urbana y alternativa
- Validación de sintaxis JS: OK


## Fix de la versión 18
- Corregido `renderProperties` para usar `index` correctamente
- Restaurada la jerarquía visual de inmuebles sin romper el render
- Habilitadas de forma segura las etiquetas de jerarquía, categoría y highlights
- Validación de sintaxis JS: OK


## Cambios de la versión 19
- Paso 1 del enfoque “landing como selling gateway”
- Primer pantalla más específica: terrenos en San Cristóbal, CTA más claro y menos genérico
- Datos rápidos del inmueble principal añadidos en el hero (superficie, zona y servicios)
- CTA secundario del hero ahora lleva directo al terreno principal
- Validación de sintaxis JS: OK


## Cambios de la versión 20
- Paso 2 del enfoque “landing como selling gateway”
- Tarjetas de propiedades con resumen estilo marketplace
- Ahora cada ficha muestra de forma más clara: superficie, zona general y precio por solicitud
- CTA principal de cada propiedad ajustado a “solicitar precio y detalles”
- Validación de sintaxis JS: OK


## Cambios de la versión 21
- Paso 3 del enfoque “landing como selling gateway”
- Nueva sección de claridad y seguridad antes del contacto
- Refuerzo del proceso: ubicación sensible, visitas con cita y documentación por etapas
- CTA de transición a WhatsApp desde la sección de claridad
- Validación de sintaxis JS: OK


## Cambios de la versión 22
- Eliminado el CTA de Instagram genérico/placeholder para evitar señales falsas de confianza
- CTA secundario de contacto ahora lleva a FAQ, que sí aporta contexto real al lead
- Señales compactas en el footer: ciudad, atención bilingüe y visitas con cita
- Paso pequeño orientado a que el sitio se sienta más “public-ready” y menos demo
- Validación de sintaxis JS: OK

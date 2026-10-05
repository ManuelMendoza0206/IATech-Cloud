# Imágenes que necesito que bajes

Las 14 imágenes que el sitio referencia hoy **no existen** en `public/images/`.
Hasta ahora, 12 de ellas estaban enlazadas a CDNs de terceros (Google
Thumbnails, Cloudinary, iStock, magnific.com, insideproduct.co, scrum.org) que
ya no resuelven, y por eso el sitio mostraba **cajas vacías**.

Ahora cada referencia apunta a un archivo local. Si el archivo no está, la
página muestra una placa que dice el nombre exacto del archivo que falta y qué
debería contener — nunca se ve roto.

**Cómo funciona:** bajá cada imagen, guardala como `public/images/<nombre>.jpg`
con el nombre exacto de la tabla, y la página la toma sola. No hace falta tocar
código. Si el formato no es JPG, cambiá la extensión en el archivo del
componente correspondiente.

---

## Ciencia, Tecnología e Innovación — `/ciencia-tecnologia-innovacion`

| Archivo | Dónde | Qué necesito |
|---|---|---|
| `cti-01.jpg` | Fundamentos de la Ciencia | Instrumental de laboratorio o placa de petri con una muestra, de cerca, fondo blanco. |
| `cti-02.jpg` | Fundamentos de la Tecnología | Banco de pruebas: placa, instrumental y una computadora de escritorio en el mismo encuadre. |
| `cti-03.jpg` | Intersección CTI | Laboratorio con instrumentación activa y, en el mismo encuadre, una pantalla con código o plano técnico. Debe leerse como ciencia **y** tecnología a la vez. |
| `cti-04.jpg` | Tendencias Futuras | Profesional de salud con visor de realidad aumentada, o monitor con datos clínicos en vivo. Una tendencia concreta, no un concepto abstracto. |

## Gestión de Tecnología — `/gestion-tecnologia`

| Archivo | Dónde | Qué necesito |
|---|---|---|
| `gestion-01.jpg` | Beneficios Organizacionales | Espacio de trabajo del equipo técnico: varias pantallas con métricas de infraestructura y una pizarra con anotaciones. |
| `gestion-02.jpg` | Gestión del Talento | Dos personas trabajando frente a una pantalla, en oficina tecnológica. |

## Scrum — `/scrum`

| Archivo | Dónde | Qué necesito |
|---|---|---|
| `scrum-07.jpg` | Hero de la página | Equipo pequeño revisando el backlog en una pizarra, tarjetas ordenadas en columnas. |
| `scrum-01.jpg` | Definición | Fotografía cenital de un tablero Scrum: backlog, tableros de sprint y calendario de ceremonias. |
| `scrum-02.jpg` | Valores | Retrospectiva: equipo con notas adhesivas sobre un muro. |
| `scrum-03.jpg` | Eventos | Diagrama circular del ciclo de eventos, líneas finas sobre blanco. **Ojo:** esto conviene hacerlo vos en SVG, no como foto. |
| `scrum-04.jpg` | Pilares | Los tres pilares como estructura física sostenida (columnas o arcos bajo un techo), blanco y negro, frontal. |
| `scrum-05.jpg` | Artefactos | Esquema de los tres artefactos con su compromiso asociado, líneas finas sobre blanco. También ideal en SVG. |
| `scrum-06.jpg` | Scrum Team | El equipo completo alrededor de una mesa de trabajo, con tarjetas y un tablero al fondo. |
| `scrum-08.jpg` | Conceptos Operativos | Tablero de refinamiento del backlog: tarjetas de historia ordenadas en columnas, con anotaciones manuscritas. |

---

## Dos que NO son fotos

`scrum-03.jpg` y `scrum-05.jpg` son diagramas. Un PNG de stock los va a quedar
mal. Si me decís, los hago en SVG con el mismo lenguaje del sitio: así quedan
nítidos en cualquier pantalla y no dependen de que yo encuentre una imagen.

## Criterio general

- **Blanco y negro o casi.** Todas las fotos del sitio llevan filtro
  `grayscale` y el acento rojo (#e2001a) es el único color. Una foto a color
  rompe el sistema.
- **Encadre horizontal,** entre 4:3 y 16:9.
- **Sin texto legible** en la imagen, salvo que sea un rótulo que se entienda.
- **Sin marcas de agua.**

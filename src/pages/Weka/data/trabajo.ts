export interface TrabajoAtributo {
  nombre: string;
  valores: string;
  rol: string;
}

export const ATRIBUTOS: TrabajoAtributo[] = [
  { nombre: 'tipo_recurso', valores: 'Instancia VM, Contenedor/K8s, Bucket, Base de datos, Función serverless, Red/VPC, Monitoreo', rol: 'Predictor' },
  { nombre: 'proveedor_cloud', valores: 'AWS, Azure, GCP', rol: 'Predictor' },
  { nombre: 'region_zona', valores: 'us-east-1, us-west-2, europe-west-1, eastus, southamerica-east-1', rol: 'Predictor' },
  { nombre: 'ambiente', valores: 'Producción, Desarrollo, QA/Pruebas', rol: 'Predictor' },
  { nombre: 'estado_operativo', valores: 'En ejecución, Desarrollo, Producción', rol: 'Predictor' },
  { nombre: 'criticidad', valores: 'Alta, Media, Crítica', rol: 'Predictor' },
  { nombre: 'responsable_equipo', valores: 'CloudOps, Backend, DevOps', rol: 'Predictor' },
  { nombre: 'costo_manual_usd', valores: 'Numérico, discretizado en Alta, Media y Crítica', rol: 'Variable objetivo' },
];

export interface TrabajoAnalisis {
  numero: string;
  titulo: string;
  pestana: string;
  algoritmo: string;
  que_hace: string;
  imagen: string;
  alt: string;
  cifras: { k: string; v: string }[];
  lectura: string;
}

export const ANALISIS: TrabajoAnalisis[] = [
  {
    numero: '01',
    titulo: 'Clasificación: predecir el nivel de costo',
    pestana: 'Classify',
    algoritmo: 'weka.classifiers.trees.J48 (C 0.25, M 2)',
    que_hace:
      'Un árbol de decisión podado que intenta predecir en qué nivel de costo cae cada recurso del inventario, a partir de su tipo, proveedor, región, ambiente, estado y equipo responsable.',
    imagen: '/images/weka/primero.png',
    alt: 'Árbol de decisión J48 con raíz tipo_recurso y hojas etiquetadas con los niveles Alta, Media y Crítica del costo manual',
    cifras: [
      { k: 'Instancias', v: '100' },
      { k: 'Validación', v: '10-fold CV' },
      { k: 'Hojas', v: '9' },
      { k: 'Tamaño', v: '12' },
    ],
    lectura:
      'La raíz del árbol es tipo_recurso, que es el atributo con más información: separa instancias de contenedor, base de datos y función serverless. El costo manual, que es la variable objetivo, se discretizó en tres niveles antes de entrenar. El árbol resultante se lee como una lista de reglas: una instancia de tipo Contenedor/K8s cae en el nivel Alta con 15 casos y 7 desaciertos.',
  },
  {
    numero: '02',
    titulo: 'Clasificación: el modelo no aprende',
    pestana: 'Classify',
    algoritmo: 'Validación cruzada stratified, 10 folds',
    que_hace:
      'La salida de la corrida con la matriz de desempeño: exactitud global, Kappa y el detalle por clase de la variable objetivo.',
    imagen: '/images/weka/primero-texto.png',
    alt: 'Salida del clasificador en Weka con el árbol podado, el resumen de exactitud y el detalle por clase',
    cifras: [
      { k: 'Exactitud', v: '39%' },
      { k: 'Kappa', v: '0,056' },
      { k: 'MAE', v: '0,309' },
      { k: 'RMSE', v: '0,430' },
    ],
    lectura:
      'El resultado honesto: 39% de exactitud y un Kappa de 0,056. Un Kappa tan bajo significa que el modelo apenas mejora lo que se obtendría acertando siempre la clase más frecuente. En la clase Crítica, la precisión de 0,091 y el MCC negativo confirman que el árbol no encuentra una regla que sirva. La conclusión no es que el árbol esté mal configurado, sino que los atributos estáticos del inventario no explican el costo: el costo de un recurso depende del uso, y eso no está en ninguna de estas columnas.',
  },
  {
    numero: '03',
    titulo: 'Agrupamiento: cuatro perfiles de recurso',
    pestana: 'Cluster',
    algoritmo: 'weka.clusterers.SimpleKMeans, k = 4, distancia euclidiana',
    que_hace:
      'Agrupa los 100 recursos del inventario en cuatro grupos por similitud, sin usar la variable objetivo, para ver qué perfiles de consumo existen.',
    imagen: '/images/weka/segundotexto.png',
    alt: 'Salida del agrupamiento SimpleKMeans con los cuatro centroides y el costo manual promedio de cada grupo',
    cifras: [
      { k: 'Grupos', v: '4' },
      { k: 'Iteraciones', v: '4' },
      { k: 'SSE', v: '313,10' },
      { k: 'Instancias', v: '100' },
    ],
    lectura:
      'Los centroides describen cuatro perfiles distintos. El grupo 0 son 30 instancias VM de AWS en us-east-1 con costo manual promedio de 247,57 USD, a cargo de CloudOps. El grupo 1 son 21 funciones serverless en europe-west-1, con 53,06 USD y equipo Backend. El grupo 2 son 26 instancias en us-west-1 a 96,87 USD, y el grupo 3 son 23 contenedores K8s con el costo promedio más alto, 444,54 USD, a cargo de DevOps. El agrupamiento sí encuentra estructura donde la clasificación no.',
  },
  {
    numero: '04',
    titulo: 'Reglas de asociación: qué se cumple siempre',
    pestana: 'Associate',
    algoritmo: 'weka.associations.Apriori, soporte mínimo 0,15, confianza mínima 0,9',
    que_hace:
      'Busca combinaciones de atributos que se dan juntas de forma consistente en el inventario, sin mirar la variable objetivo.',
    imagen: '/images/weka/tercer-texto.png',
    alt: 'Salida de Apriori con las diez mejores reglas de asociación, su confianza, lift y leva',
    cifras: [
      { k: 'Soporte mín.', v: '0,15' },
      { k: 'Confianza mín.', v: '0,9' },
      { k: 'Ciclos', v: '17' },
      { k: 'Reglas', v: '10' },
    ],
    lectura:
      'La primera regla dice que todo recurso de AWS está en producción, con confianza 1 y lift 2: el doble de lo que el azar daría. La regla 3 muestra que las 20 instancias VM están en ejecución, y la regla 4 que las 20 instancias VM están a cargo de CloudOps. La regla 5 es la de mayor lift, 3,33: los 20 recursos de QA y pruebas están en GCP. Estas reglas no predicen el costo, pero sí describen cómo opera el área.',
  },
];

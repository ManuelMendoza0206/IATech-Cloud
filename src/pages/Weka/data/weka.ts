export interface WekaEntorno {
  nombre: string;
  english: string;
  icono: string;
  para: string;
  cuando: string;
}

export const ENTORNOS: WekaEntorno[] = [
  {
    nombre: 'Explorer',
    english: 'Exploración interactiva',
    icono: 'bx-terminal',
    para: 'Explorar un dataset y probar un algoritmo a la vez, viendo el resultado inmediatamente.',
    cuando:
      'Es el punto de entrada. Se abre una pestaña por tarea: Preprocess, Classify, Cluster, Associate, Select Attributes y Visualize.',
  },
  {
    nombre: 'Experimenter',
    english: 'Comparación masiva',
    icono: 'bx-data-table',
    para: 'Ejecutar varios algoritmos sobre el mismo dataset y compararlos con test estadístico.',
    cuando:
      'Cuando la decisión no es qué algoritmo funciona mejor, sino cuál de varios gana y por cuánto. Compara con paired t-test y 5x2cv por defecto.',
  },
  {
    nombre: 'KnowledgeFlow',
    english: 'Pipeline por componentes',
    icono: 'bx-git-branch',
    para: 'Encadenar fuentes de datos, filtros, learners y evaluadores como un grafo ejecutable.',
    cuando:
      'Cuando el preprocesamiento es largo o reutilizable, y cuando el resultado tiene que quedar guardado y repetible.',
  },
];

export interface WekaAlgoritmo {
  tarea: string;
  algoritmo: string;
  english: string;
  que_hace: string;
  cuando: string;
}

export const ALGORITMOS: WekaAlgoritmo[] = [
  {
    tarea: 'Clasificación',
    algoritmo: 'J48',
    english: 'Árbol de decisión C4.5',
    que_hace: 'Construye un árbol de decisión podando ramas con baja ganancia de información.',
    cuando: 'Cuando la decisión se tiene que explicar: el árbol se lee como una lista de reglas.',
  },
  {
    tarea: 'Clasificación',
    algoritmo: 'NaiveBayes',
    english: 'Bayes ingenuo',
    que_hace: 'Aplica el teorema de Bayes suponiendo independencia entre atributos.',
    cuando: 'Con pocos datos o muchas variables: entrena casi instantáneo y aguanta bien el ruido.',
  },
  {
    tarea: 'Clasificación',
    algoritmo: 'SMO',
    english: 'Máquina de vectores de soporte',
    que_hace: 'Separa las clases buscando el hiperplano de margen máximo.',
    cuando: 'Con muchas variables y necesidad de margenWide y bien definido. El algoritmo por defecto para SVM.',
  },
  {
    tarea: 'Clasificación',
    algoritmo: 'IBk',
    english: 'K vecinos más cercanos',
    que_hace: 'Clasifica un caso según la clase mayoritaria entre sus k vecinos más cercanos.',
    cuando: 'Cuando el dataset es pequeño y se quiere entender el resultado caso por caso.',
  },
  {
    tarea: 'Clasificación',
    algoritmo: 'RandomForest',
    english: 'Bosque aleatorio',
    que_hace: 'Entrena muchos árboles con submuestras y promedia sus votos.',
    cuando: 'Cuando se busca precisión sin sacrificar demasiada interpretabilidad. Robusto por defecto.',
  },
  {
    tarea: 'Regresión',
    algoritmo: 'LinearRegression',
    english: 'Regresión lineal',
    que_hace: 'Ajusta una recta minimizando el error cuadrático entre lo predicho y lo observado.',
    cuando: 'Para una primera línea base interpretable y para ver el peso de cada variable.',
  },
  {
    tarea: 'Clustering',
    algoritmo: 'KMeans',
    english: 'K-means',
    que_hace: 'Agrupa los casos en k grupos minimizando la distancia a su centro.',
    cuando: 'Cuando se busca estructura en datos sin etiqueta. Requiere elegir k de antemano.',
  },
  {
    tarea: 'Clustering',
    algoritmo: 'EM',
    english: 'Expectation-Maximization',
    que_hace: 'Alterna entre asignar casos a grupos y recalcular los centroides, con distribuciones de probabilidad.',
    cuando: 'Cuando los grupos se solapan: no fuerza asignación dura, entrega probabilidades.',
  },
  {
    tarea: 'Clustering',
    algoritmo: 'DBSCAN',
    english: 'Agrupamiento por densidad',
    que_hace: 'Marca regiones densas como grupos y el resto como ruido.',
    cuando: 'Cuando hay grupos de tamaños dispares y se quiere detectar anomalías.',
  },
  {
    tarea: 'Reglas de asociación',
    algoritmo: 'Apriori',
    english: 'Apriori',
    que_hace: 'Busca conjuntos de ítems que aparecen juntos con soporte y confianza altos.',
    cuando: 'En market basket: qué productos se compran juntos y con quélift sobre el azar.',
  },
  {
    tarea: 'Reglas de asociación',
    algoritmo: 'OneR',
    english: 'One Rule',
    que_hace: 'Elige un solo atributo y construye una regla por cada valor de ese atributo.',
    cuando: 'Como línea base: si una sola variable ya clasifica bien, no hace falta más.',
  },
  {
    tarea: 'Preprocesado',
    algoritmo: 'Filtros',
    english: 'Filters',
    que_hace: 'Transforman los datos: quitar atributos, imputar nulos, normalizar, discretizar.',
    cuando: 'Es el primer paso siempre. Un filtro mal puesto arruina cualquier modelo que venga después.',
  },
];

export interface WekaMetrica {
  nombre: string;
  english: string;
  formula: string;
  cuando: string;
  trampa: string;
}

export const METRICAS: WekaMetrica[] = [
  {
    nombre: 'Accuracy',
    english: 'Exactitud',
    formula: 'correctos / total',
    cuando: 'Cuando las clases están balanceadas y todos los errores pesan igual.',
    trampa: 'Engaña con clases desbalanceadas: 95% de una clase da 95% de accuracy sin predecir nada.',
  },
  {
    nombre: 'Precision',
    english: 'Precisión',
    formula: 'TP / (TP + FP)',
    cuando: 'Cuando un falso positivo sale caro: marcar como positivo solo si es seguro.',
    trampa: 'Puede ser alta con poquísimos positivos útiles.',
  },
  {
    nombre: 'Recall',
    english: 'Exhaustividad',
    formula: 'TP / (TP + FN)',
    cuando: 'Cuando un falso negativo sale caro: no dejar pasar ningún positivo real.',
    trampa: 'Fácil de subir a costa de la precisión. Se evalúa la curva, no un punto.',
  },
  {
    nombre: 'F1',
    english: 'Media armónica',
    formula: '2 · (P · R) / (P + R)',
    cuando: 'Cuando precision y recall pesan igual y el dataset está desbalanceado.',
    trampa: 'Escala con la prevalencia de la clase, así que no compara entre datasets distintos.',
  },
  {
    nombre: 'AUC',
    english: 'Área bajo la curva ROC',
    formula: 'área sobre (FPR, TPR)',
    cuando: 'Para comparar clasificadores binarios en un mismo dataset, sin fijar umbral.',
    trampa: 'Puede verse alto con clases muy desbalanceadas. Se lee junto al recall.',
  },
  {
    nombre: 'RMSE',
    english: 'Raíz del error cuadrático medio',
    formula: '√(media de (real − predicho)²)',
    cuando: 'En regresión, cuando un error grande tiene que pesar más que uno pequeño.',
    trampa: 'Escala con la unidad de la variable objetivo: no se compara entre escalas distintas.',
  },
];

export interface WekaPaso {
  paso: string;
  titulo: string;
  detalle: string;
}

export const PASOS_EXPLORER: WekaPaso[] = [
  {
    paso: '01',
    titulo: 'Cargar el dataset',
    detalle:
      'Pestaña Preprocess, botón Open file. Weka lee ARFF, CSV, C4.5 y libsvm. En CSV, la primera fila debe ser el encabezado y el separador se fija a mano en el diálogo.',
  },
  {
    paso: '02',
    titulo: 'Elegir la variable objetivo',
    detalle:
      'En la caja Class, abajo a la derecha, se marca la columna a predecir. Weka la usa para evaluar: sin variable objetivo no hay accuracy, solo información del dataset.',
  },
  {
    paso: '03',
    titulo: 'Preprocesar',
    detalle:
      'Pestaña Filter, botón Choose. Los filtros se encadenan y cada uno muestra su nombre en la lista encadenada. Remover atributos, imputar nulos y normalizar son los tres primeros.',
  },
  {
    paso: '04',
    titulo: 'Elegir el modelo',
    detalle:
      'Pestaña Classify, botón Choose. El learner y sus parámetros quedan a la vista antes de correr, que es lo que hace reproducible un resultado.',
  },
  {
    paso: '05',
    titulo: 'Evaluar',
    detalle:
      'Click en Start. Weka muestra la salida del modelo, la matriz de confusión y la métrica calculada con el método de validación elegido.',
  },
  {
    paso: '06',
    titulo: 'Comparar',
    detalle:
      'Con la salida del modelo abierta, el botón More classifies permite superponer otra corrida y comparar. Con dos o más, aparece la comparación con significación estadística.',
  },
];

export const WEKA_META = {
  version: '3.8.7',
  fecha: '27 Mar 2026',
  copyright: '1998-2026',
  publisher: 'University of Waikato',
  sitio: 'https://www.cs.waikato.ac.nz/ml/weka/',
  manual: 'Weka 3.8.7 Manual',
  libro: 'Data Mining: Practical Machine Learning Tools and Techniques',
};

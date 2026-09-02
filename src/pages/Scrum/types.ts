export interface Pilar {
  title: string;
  text: string;
  icon: string;
}

export interface Valor {
  title: string;
  english: string;
  text: string;
  icon: string;
}

export interface Rol {
  role: string;
  responsibility: string;
  tasks: string[];
  icon: string;
}

export interface Evento {
  title: string;
  duration: string;
  purpose: string;
  icon: string;
}

export interface Artefacto {
  name: string;
  commitment: string;
  description: string;
  owner: string;
}

export interface ConceptoOperativo {
  title: string;
  text: string;
}

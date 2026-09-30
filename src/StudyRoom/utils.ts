export type Objetivos = {
  id: number;
  type: string;
  description: string;
  count?: number;
}

export const objetivosDefault: Objetivos[] = [
  {
    id: 1,
    type: "matematica",
    description: "Resolver: 2 ejercicios",
    count: 0
  },
  {
    id: 2,
    type: "lectura",
    description: "Leer: 5 paginas",
    count: 0
  },
  {
    id: 3,
    type: "estudio",
    description: "Estudiar: 30 minutos",
    count: 0
  }
];

const primerObjetivoId = objetivosDefault[0].id;
const ultimoObjetivoId = objetivosDefault?.at(-1)?.id;

export const completarAlternarObjetivo = (objetivo: Objetivos) => {
  objetivo.id = objetivo.id === ultimoObjetivoId ? primerObjetivoId : objetivo.id + 1;

  return objetivo;
};

export const updateCount = (objetivo: Objetivos) => {
  let nuevoArrayObjetivos = {};

  if(objetivo.type === "matematica") {
    nuevoArrayObjetivos = {
      ...objetivo,
      count: objetivo.count ? objetivo.count + 1 : 1
    }
  }
  return nuevoArrayObjetivos;
}

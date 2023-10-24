// asistencia.model.ts
export class Asistencia {
    constructor(
      public id: number,
      public alumnoId: number,
      public asignaturaId: number,
      public fecha: string
    ) {}
  }
  
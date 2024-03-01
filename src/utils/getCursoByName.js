import {cursos} from './cursos'

export const getCursoByName = (name) => {
    if (name.length === 0) return [];

    return cursos.find((curso) => curso.nombre === name.toUpperCase())
}
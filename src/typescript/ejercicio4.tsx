
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
    }


export const Ejercicio4 = () => {

const alumnos: Alumno[] = [
    {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];
    //cantidad de calificaciones
    const cantCalif: number = alumnos.filter(alumnos => alumnos.calificacion).length;
    

    //promediar la calfificacion
    const promediar = (alumnos: Alumno[]): number => {

        const sumaPromedio= alumnos.reduce 
        ((acumulador: number, numALumnos: Alumno) => acumulador + numALumnos.calificacion, 0);

    return sumaPromedio/cantCalif;
}

    return (
    <div>
        <h3 className="font-bold">Ejercicio 4:</h3> 
        <span>
            El promedio de las calificaciones ({alumnos.map(alumno => alumno.calificacion).join(", ")}) respectivas de los alumnos {alumnos.map(alumno => alumno.nombre).join(", ")} es de: {promediar(alumnos)}
            </span>
    </div>
    )
}


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

const cantCalif: number = alumnos.filter(alumnos => alumnos.calificacion).length;

const sumaCalif: number = alumnos.reduce((sumaTotal: number, alumno: Alumno): number => {
        return sumaTotal + alumno.calificacion;
    },0);


    const promedio = sumaCalif/cantCalif;



    return (
    <div>
        <h3 className="font-bold">Ejercicio 4:</h3> 
        <span>
            El promedio de las calificaciones ({alumnos.map(alumno => alumno.calificacion).join(", ")}) respectivas de los alumnos {alumnos.map(alumno => alumno.nombre).join(", ")} es de: {promedio.toFixed(2)}
            </span>
    </div>
    )
}

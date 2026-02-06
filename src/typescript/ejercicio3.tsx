
export const Ejercicio3 = () => {

const arreglo: number[] = [5,10,15,20,25,30,35,40,45,50];

const divisor: number = 5

const division: number[] = arreglo.map(arreglo => {
    return arreglo/divisor;
})

    return (
    <div>
        <h3 className="font-bold">Ejercicio 3:</h3> 
        <span>La division de cada uno de estos elemetos ({arreglo.join(", ")}) para 5 es: ({division.join(", ")})</span>
    </div>
    )  
}

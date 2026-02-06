
export const Ejercicio2 = () => {

const numeros: number[]=[1, 5, 6, 7];

const suma: number = numeros.reduce((acumulador: number, numActual: number): number => {
    
    return acumulador + numActual;
},0)

    return (
    <div>
        <h3 className="font-bold">Ejercicio 2:</h3> 
        <span>La suma de los elementos de este arreglo ({numeros.join(", ")}) es: {suma}</span>
    </div>
    )
}

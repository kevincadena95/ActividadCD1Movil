
export const Ejercicio1 = () => {

    const lado: number = 5;
    
    const areaCuadrado = (lado: number): number => {
    return lado * lado;
}

    return (
    <div> 
        <h3 className="font-bold">Ejercicio 1:</h3> 
        <span>El área de un cuadrado se calcula multiplicando la medida de uno de sus lados por sí misma.</span> <br /><br />
        <span>Por lo tanto el area de un cuadrado que mide {lado} es: {areaCuadrado(lado)} </span>

    </div>
    )
}

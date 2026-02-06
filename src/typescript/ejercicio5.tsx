import { useState } from "react";


export const Ejercicio5 = () => {

    const [contador, setContador] = useState<number>(0);

const actulizarContador = (numero: number): void => {

    setContador(contador+numero);
}

    return (
    <div>
        <h3 className="font-bold">Ejercicio 5:</h3>
        <span>Valor: {contador} </span>
        <br /><br />
        <button className="btn btn-primary m-4" onClick={()=>actulizarContador(5)}>+5</button>
        <button className="btn btn-primary m-4" onClick={()=>actulizarContador(-5)}>-5</button>
    </div>
    )
}

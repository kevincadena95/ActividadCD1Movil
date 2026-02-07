import { useState } from "react";


export const Ejercicio5 = () => {

    const [contador, setContador] = useState<number>(0);



    //Funcion Normal
/*const actulizarContador = (numero: number): void => {

    setContador(contador+numero);
}*/

//Funcion para que el contador no disminuya a menos de 0, esta es una condicion extra que queria agregar y probar.
    const actulizarContador = (numero: number): void => {
if(contador+numero >= 0){
    setContador(contador+numero);
}
else {
    setContador(0);
}}

    return (
    <div>
        <h3 className="font-bold">Ejercicio 5:</h3>
        
        <span className="m-4">Valor: {contador} </span>
        <br />
        <button className="btn btn-primary bg-blue-500 text-white font-bold m-2" onClick={()=>actulizarContador(5)}>+5</button>
        <button className="btn btn-primary bg-blue-500 text-white font-bold m-2" onClick={()=>actulizarContador(-5)}>-5</button>
    </div>
    )
}

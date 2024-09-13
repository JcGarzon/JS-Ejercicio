//Obtengo el menor
const obtenerMenor = (num1, num2, num3) => {
    return new Promise((resolve) => {
      const menor = num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
      resolve(menor);
    });
  };
 //Veo los iguales
  const numIguales = (num1, num2, num3) => {
    return new Promise((resolve) => {
      const resultadoIguales = num1 === num2 ? `El número ${num1} es igual.` : 
                              num1 === num3 ? `El número ${num1} es igual.` : 
                              num2 === num3 ? `El número ${num2} es igual.` : 
                              "No hay números iguales.";
      resolve(resultadoIguales);
    });
  };
  
//Consigo los numeros y ejecuto las promesas
  const compararNum = () => {
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    const num3 = parseInt(prompt("Ingresa el tercer número:"));
  
    obtenerMenor(num1, num2, num3)
      .then((menor) => {
        return numIguales(num1, num2, num3)
          .then((resultadoIguales) => {
            const mensaje = `El número menor es ${menor}. ${resultadoIguales}`;
            document.write(mensaje);
          });
      })
      .catch((error) => {
        document.write(error);
      });
  };
  
//ejecuto la funcion
  compararNum();
  
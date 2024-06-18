function checkInput(cb, ...strings) {
  let hasEmptyText = false; // Inicializa una variable para rastrear si hay algún texto vacío
  
  // Itera sobre cada elemento en el array `strings`
  for (const text of strings) {
      if (!text) { // Comprueba si el texto es vacío o falso
          hasEmptyText = true; // Marca que se ha encontrado un texto vacío
          break; // Sale del bucle porque ya no es necesario seguir buscando
      }
  }

  if (!hasEmptyText) { // Si no se encontró ningún texto vacío
      cb(); // Llama a la función `cb`
  }
}

// Llama a la función `checkInput` con una función de callback y varios textos
checkInput(() => {
  console.log('All not empty!'); // Esta es la función callback que se ejecutará si no hay textos vacíos
}, 'Hello', '12', 'adsfa'); // Lista de textos a comprobar
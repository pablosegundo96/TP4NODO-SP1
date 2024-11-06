export function renderizarListaSuperheroes(superheroes) {
    //formatea el array de superheroes en formato json con identacion 
   return JSON.stringify(superheroes, null, 2);
}


//funcion para renderizar un superheroees especifico en formato json

export function renderizarSuperheroe(superheroe) {
  //formatea un superheroe individual en formato json con identacion 
   return JSON.stringify(superheroe, null, 2);
}
async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.

  const id = `imagen-pokemon-${order}`;
  const imagen = document.getElementById(id);
  imagen.setAttribute('src', pokemonData.imagen);
  

  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css

  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:

//  <div id="barra-hp-${order}"></div>
//  <span id="cantidad-hp-${order}"></span>

  for (const stat of pokemonData.stats) {
    let id = `barra-${stat.name}-${order}`;
    const barra = document.getElementById(id);
    const color = stat.amount < 35 ? 'rojo' : (stat.amount >= 35 && stat.amount < 70 ? 'amarillo' : 'verde');
    barra.classList.add(color);
    barra.style.width = `${stat.amount}%`;
    const cantidad = document.getElementById(id.replace('barra','cantidad'));
    cantidad.textContent = `${stat.amount}%`;
    
  }

}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["chikorita", "bulbasaur", "charmander", "kadabra"];


Promise.resolve()
.then(
  inicializador
)
.then(
  crearSpinner
)
.then(
  setTimeout(
    quitarSpinner,1000

  )
)
.then(()=>{
  console.log('fuimo.');
})


function inicializador() {
  //INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});

}

function quitarSpinner() {
  document.getElementById('contenedor-carga').classList.add('hidden');
  document.querySelector("main").classList.remove('hidden');
}

function crearSpinner() {
  const body = document.querySelector("body");
  document.querySelector("main").classList.add('hidden');
  const contenedor = document.createElement('div');
  contenedor.setAttribute('id','contenedor-carga');
  const spinner = document.createElement('div');
  spinner.setAttribute('id','carga');
  contenedor.appendChild(spinner);
  body.appendChild(contenedor);
}
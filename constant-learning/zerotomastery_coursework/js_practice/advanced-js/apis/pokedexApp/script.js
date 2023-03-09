'use strict';
const state = {
  pokemon: {},
};

const getPokemon = async function () {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();
  console.log(data);
  // const { pokemon } =
  // console.log(pokemon);
};

getPokemon();

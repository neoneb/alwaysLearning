'use strict';

const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const pokemonContainer = document.querySelector('.card__grid');
let searchValue;
let html;

let state = {
  pokemon: {},
};

const getPokemon = async function () {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchValue}/`
  );
  const data = await response.json();
  state.pokemon = data;
  console.log(state.pokemon);
  renderHtml();
};

const renderHtml = function () {
  const { name, id, height, weight } = state.pokemon;
  const typesArray = state.pokemon.types;
  const types = typesArray.map((type) => type.type.name).join(', ');
  html = ` <container class="pokemon__card">
  <div class="pokemon__name">${state.pokemon.name}</div>
  <div class="pokemon__number"># ${state.pokemon.id}</div>
  <img
    class="pokemon__image"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.pokemon.id}.png"
    alt="${state.pokemon.name}"
  />
  <div class="pokemon__type">Type: ${types}</div>
  <div class="pokemon__height">Height: ${state.pokemon.height}</div>
  <div class="pokemon__weight">Weight: ${state.pokemon.weight}</div>
</container>`;

  pokemonContainer.innerHTML = html;
  searchInput.value = '';
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  html = '';
  searchValue = searchInput.value;
  console.log(searchValue);
  getPokemon();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    html = '';
    e.preventDefault();
    searchValue = searchInput.value;
    console.log(searchValue);
    getPokemon();
  }
});

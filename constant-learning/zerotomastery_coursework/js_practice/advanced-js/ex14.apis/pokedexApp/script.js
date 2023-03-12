'use strict';

const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const pokemonContainer = document.querySelector('.card__grid');
const randomBtn = document.querySelector('.random__btn');
const loadingPokeball = document.querySelector('.pokeball');
const headerText = document.querySelector('h1');
let searchValue;
let html;
let state = {
  pokemon: {},
};

const getPokemon = async function () {
  loadingPokeball.style.display = 'block';
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
  const abilitiesArray = state.pokemon.abilities;
  const abilities = abilitiesArray
    .slice(0, 2)
    .map((ability) => ability.ability.name)
    .join(', ');
  html = ` <container class="pokemon__card" style="display:none">
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
  <div class="pokemon__abilities">Abilities: ${abilities}</div>
</container>`;
  pokemonContainer.innerHTML = html;
  const pokemonImage = document.querySelector('.pokemon__image');

  pokemonImage.addEventListener('load', (e) => {
    const pokemonCard = document.querySelector('.pokemon__card');
    e.preventDefault();
    headerText.style = 'display:none';
    pokemonCard.style.display = 'block';
    searchInput.value = '';
    loadingPokeball.style.display = 'none';
  });
};

const getRandomPokemon = async function () {
  loadingPokeball.style.display = 'block';
  const randomId = Math.floor(Math.random() * 898) + 1;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomId}/`
  );

  const data = await response.json();
  state.pokemon = data;
  renderHtml();
  loadingPokeball.style.display = 'none';
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  headerText.style = 'display:none';
  pokemonContainer.innerHTML = '';
  searchValue = searchInput.value.toLowerCase();
  console.log(searchValue);
  getPokemon();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    headerText.style = 'display:none';
    pokemonContainer.innerHTML = '';
    searchValue = searchInput.value;
    console.log(searchValue);
    getPokemon();
  }
});

randomBtn.addEventListener('click', (e) => {
  e.preventDefault();
  headerText.style = 'display:none';
  pokemonContainer.innerHTML = '';
  getRandomPokemon();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    headerText.style = 'display:none';
    pokemonContainer.innerHTML = '';
    searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);
    getPokemon();
  }
});

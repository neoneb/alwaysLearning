'use strict';
// Query Selectors
const searchBtn = getElement('.search__btn');
const searchInput = getElement('.search__input');
const pokemonContainer = getElement('.card__grid');
const randomBtn = getElement('.random__btn');
const loadingPokeball = getElement('.pokeball');
const headerText = getElement('h1');
let searchValue;
let html;
let state = {
  pokemon: {},
};

// Helper Functions
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    return null;
  }
  return element;
}

const loadHelper = (e, callback) => {
  e.preventDefault();
  headerText.style = 'display:none';
  pokemonContainer.innerHTML = '';
  searchValue = searchInput.value.toLowerCase();
  updateSuggestions(searchValue);
  callback();
};

function setDisplay(element, value) {
  element.style.display = value;
}

function renderError() {
  setDisplay(loadingPokeball, 'none');
  pokemonContainer.innerHTML = `<h2>Not a Pokemon, try something else!</h2>
  <img
  id="error__img"
  src="https://www.pngmart.com/files/22/Surprised-Pikachu-Transparent-PNG.png"
  alt="pikachu meme"
/>`;
}

// Call API and render the searched pokemon or error
const fetchPokemon = async function (searchValue) {
  try {
    loadingPokeball.style.display = 'block';
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchValue}/`
    );
    const data = await response.json();
    state.pokemon = data;
    renderHtml();
    setDisplay(loadingPokeball, 'none');
  } catch (err) {
    renderError();
    console.log('Pokemon not Found!', err);
  }
};

// Gives up to 10 search suggestions as user inputs letters
const updateSuggestions = async function (searchValue) {
  try {
    if (searchValue !== '') {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=1015`
      );
      const data = await response.json();
      const suggestions = data.results
        // don't return suggestion if searchInput === pokemon name
        .filter((pokemon) => {
          return (
            pokemon.name.startsWith(searchValue) &&
            pokemon.name.toLowerCase() !== searchValue.toLowerCase()
          );
        })
        .map((pokemon) => pokemon.name);
      const datalist = getElement('#search-suggestions');
      datalist.innerHTML = suggestions
        .map((suggestion) => `<option value="${suggestion}"></option>`)
        .slice(0, 9)
        .join('');
    }
  } catch (err) {
    console.log('Error retrieving search suggestions!', err);
  }
};

// Search bar functionality
const getPokemon = async function () {
  const searchValue = searchInput.value.toLowerCase();
  await fetchPokemon(searchValue);
};

// Random button functionality
const getRandomPokemon = async function () {
  const randomId = Math.floor(Math.random() * 898) + 1;
  await fetchPokemon(randomId);
};

// Render Pokemon Card's html
const renderHtml = function () {
  try {
    const { name, id, height, weight } = state.pokemon;
    const typesArray = state.pokemon.types;
    const pokemon = state.pokemon;
    const types = typesArray.map((type) => type.type.name).join(', ');
    const abilitiesArray = state.pokemon.abilities;
    const abilities = abilitiesArray
      .slice(0, 2)
      .map((ability) => ability.ability.name)
      .join(', ');
    html = ` <container class="pokemon__card" style="display:none">
  <div class="pokemon__name">${pokemon.name}</div>
  <div class="pokemon__number"># ${pokemon.id}</div>
  <img
    class="pokemon__image"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
    alt="${state.pokemon.name}"
  />
  <div class="pokemon__type">Type: ${types}</div>
  <div class="pokemon__height">Height: ${pokemon.height}</div>
  <div class="pokemon__weight">Weight: ${pokemon.weight}</div>
  <div class="pokemon__abilities">Abilities: ${abilities}</div>
</container>`;
    pokemonContainer.innerHTML = html;
    const pokemonImage = getElement('.pokemon__image');

    // Waits for image to load before rest of the pokemon card is rendered
    pokemonImage.addEventListener('load', (e) => {
      const pokemonCard = getElement('.pokemon__card');
      e.preventDefault();
      setDisplay(headerText, 'none');
      setDisplay(pokemonCard, 'block');
      setDisplay(loadingPokeball, 'none');
      searchInput.value = '';
    });
  } catch {
    console.log('Error:', err);
    setDisplay(loadingPokeball, 'none');
    pokemonContainer.innerHTML = '<h2>Error, please try again.</h2>';
  }
};

// Event listens
randomBtn.addEventListener('click', (e) => {
  loadHelper(e, getRandomPokemon);
});

searchBtn.addEventListener('click', (e) => {
  loadHelper(e, getPokemon);
});

searchInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    loadHelper(e, getPokemon);
  }
});

searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  updateSuggestions(searchValue);
});

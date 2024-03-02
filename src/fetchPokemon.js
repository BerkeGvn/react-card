const RANDOM_NUM = 30

function getRandomNumber() {
  return Math.floor(Math.random() * RANDOM_NUM) + 1;
}


async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomNumber());

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}




export default fetchPokemon;
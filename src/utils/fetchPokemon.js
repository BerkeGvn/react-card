

function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}


async function fetchPokemon(num) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomNumber(num));

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
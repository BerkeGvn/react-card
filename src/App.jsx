import { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Cards from './components/Cards';
import fetchPokemon from './utils/fetchPokemon';
import shuffleArray from './utils/shuffle';
import GameOverModal from './components/GameOverModal';
import Restart from './components/Restart';
import Scoreboard from './components/scoreboard';

const RNDM_LIMIT = 30;
const POKEMON_LIMIT = 30;
function App() {
  const [pokemons, setPokemon] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    async function fetchData() {
      try {
        for (let i = 0; i < POKEMON_LIMIT; i++) {
          const pokemonData = await fetchPokemon(RNDM_LIMIT);

          // Check if the component is still mounted before updating state
          if (isMounted) {
            setPokemon((prevPokemons) => [
              ...prevPokemons,
              {
                id: pokemonData.id,
                name: pokemonData.name,
                img: pokemonData.sprites.other.dream_world.front_default,
              },
            ]);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  function onSelectCard(id) {
    // shuffling the pokemon array for the next round
    setPokemon((prevList) => shuffleArray(prevList));

    if (selectedPokemons <= 0) {
      return setSelectedPokemons([id]);
    }
    if (selectedPokemons.some((pokemonId) => pokemonId === id)) {
      setGameOver(true);
    } else {
      setSelectedPokemons((prevIds) => [...prevIds, id]);
    }
  }

  function handleRestart() {
    setSelectedPokemons([]);
    setGameOver(false);
    // shuffling the pokemon array for the next round
    setPokemon((prevList) => shuffleArray(prevList));
  }

  const firstFivePokemons = pokemons.slice(0, 5);

  return (
    <>
      <Scoreboard></Scoreboard>
      <CardContainer>
        {pokemons.length <= 0 ? (
          <h1>LOADING...</h1>
        ) : (
          firstFivePokemons.map((pokemon, i) => (
            <Cards
              handleSelect={onSelectCard}
              key={pokemon.id + '' + i}
              pokemon={pokemon}
            ></Cards>
          ))
        )}
      </CardContainer>
      <GameOverModal isGameOver={gameOver}>
        <Restart onRestart={handleRestart}></Restart>
      </GameOverModal>
    </>
  );
}

export default App;

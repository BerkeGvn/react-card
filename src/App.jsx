import { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Cards from './components/Cards';
import fetchPokemon from './fetchPokemon';

function App() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    async function fetchData() {
      try {
        for (let i = 0; i < 5; i++) {
          const pokemonData = await fetchPokemon();

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

  return (
    <>
      <CardContainer>
        {pokemons.map((pokemon) => (
          <Cards
            key={pokemon.id}
            pokemon={pokemon}
          ></Cards>
        ))}
      </CardContainer>
    </>
  );
}

export default App;

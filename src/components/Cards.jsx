/* eslint-disable react/prop-types */
export default function Cards({ handleSelect, pokemon }) {
  if (!pokemon) {
    return null;
  }
  return (
    <button onClick={() => handleSelect(pokemon.id)}>
      <div className="card">
        <img
          src={pokemon.img}
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </div>
    </button>
  );
}

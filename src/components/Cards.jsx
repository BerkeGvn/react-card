/* eslint-disable react/prop-types */
export default function Cards({ pokemon }) {
  if (!pokemon) {
    console.log('Invalid Pokemon Data:', pokemon);
    return null;
  }
  console.log(pokemon);
  return (
    <button>
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

const typeColors = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

export const PokemonCards = ({ pokemonData }) => {
  const mainType = pokemonData.types[0].type.name;
  const themeColor = typeColors[mainType] || "#4facfe";

  return (
    <li className="pokemon-card" style={{ '--theme-color': themeColor }}>
      <figure>
        <div className="image-glow" style={{ background: `radial-gradient(circle, ${themeColor}55 0%, transparent 70%)` }}></div>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-types">
        {pokemonData.types.map((curType) => (
            <span 
              key={curType.type.name} 
              className="type-badge"
              style={{ backgroundColor: typeColors[curType.type.name] || "#4facfe" }}
            >
              {curType.type.name}
            </span>
        ))}
      </div>

      <div className="stats-container">
          <div className="grid-three-cols">
            <div className="pokemon-info">
              <span className="icon">📏</span>
              <p>{pokemonData.height}</p>
              <span>Height</span>
            </div>
            <div className="pokemon-info">
              <span className="icon">⚖️</span>
              <p>{pokemonData.weight}</p>
              <span>Weight</span>
            </div>
            <div className="pokemon-info">
              <span className="icon">⚡</span>
              <p>{pokemonData.stats[5].base_stat}</p>
              <span>Speed</span>
            </div>
          </div>

          <div className="grid-three-cols">
            <div className="pokemon-info">
              <span className="icon">✨</span>
              <p>{pokemonData.base_experience}</p>
              <span>Exp</span>
            </div>
            <div className="pokemon-info">
              <span className="icon">⚔️</span>
              <p>{pokemonData.stats[1].base_stat}</p>
              <span>Attack</span>
            </div>
            <div className="pokemon-info">
              <span className="icon">💡</span>
              <p>
                {pokemonData.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </p>
              <span>Ability</span>
            </div>
          </div>
      </div>
    </li>
  );
};

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface PokemonCardProps {
   pokemon: IndexedPokemon;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {
   const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`

   return (
      <Link to={"/pokemon/" + pokemon.name}>
         <div className="pokemon-card">
            <img className="pokemon-card-sprite" src={pokemonSprite} />
            <span className="pokemon-card-name">
               {pokemon.index}. {pokemon.name}
            </span>
         </div>
      </Link>

   );
}

export default PokemonCard;
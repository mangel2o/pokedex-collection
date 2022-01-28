import { FunctionComponent } from "react";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
   pokemons: IndexedPokemon[];
}

const PokemonList: FunctionComponent<PokemonListProps> = ({ pokemons }) => {
   return (
      <div className="pokemon-list">
         {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.index} pokemon={pokemon} />)
         )}
      </div>
   );
}

export default PokemonList;
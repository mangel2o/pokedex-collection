import { FunctionComponent } from "react";
import ElementType from "./ElementType";
import PokemonDataRow from "./PokemonDataRow";

interface PokemonInfoProps {
   pokemon: PokemonData
}

const PokemonInfo: FunctionComponent<PokemonInfoProps> = ({ pokemon }) => {
   const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

   return (
      <div className="pokemon-data-container">
         <img className="pokemon-image" src={pokemonImage} />
         <div className="pokemon-data">
            <span className="pokemon-data-name">
               {(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))} Data
            </span>
            <PokemonDataRow name="Number">
               <span className="pokemon-data-number">
                  {pokemon.id}
               </span>
            </PokemonDataRow>
            <PokemonDataRow name="Type">
               {pokemon.types.map((element, index) => (
                  <ElementType key={index} element={element} />
               ))}
            </PokemonDataRow>
            <PokemonDataRow name="Species">
               {(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}
            </PokemonDataRow>
            <PokemonDataRow name="Height">
               {pokemon.height} m
            </PokemonDataRow>
            <PokemonDataRow name="Weight">
               {pokemon.weight} kg
            </PokemonDataRow>
         </div>
      </div>
   );
}

export default PokemonInfo;
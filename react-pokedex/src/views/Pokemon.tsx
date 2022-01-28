import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import PokemonInfo from "../components/PokemonInfo";
import Stairs from "../components/Stairs";
import useFetchPokemon from "../hooks/useFetchPokemon";

interface PokemonProps {

}

const Pokemon: FunctionComponent<PokemonProps> = () => {
   let { id } = useParams();
   const { data, loading, error } = useFetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);

   return (
      <div className="pokemon-container">
         {loading && <Stairs></Stairs>}
         {error && <h2>Seems like there's an error: {error.message}</h2>}
         {data && <PokemonInfo pokemon={data} />}
      </div>
   );
}

export default Pokemon;
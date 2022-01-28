import { FunctionComponent } from "react";

interface PokemonDataRowProps {
   name: string;
}

const PokemonDataRow: FunctionComponent<PokemonDataRowProps> = ({ name, children }) => {
   return (
      <div className="pokemon-data-row">
         <div className="pokemon-data-row-name">
            {name}
         </div>
         <div className="pokemon-data-row-value">
            {children}
         </div>
      </div>
   );
}

export default PokemonDataRow;
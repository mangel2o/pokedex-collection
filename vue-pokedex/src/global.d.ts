type Pokemon = {
   name: string;
   url: string;
}

type IndexedPokemon = {
   name: string;
   url: string;
   index: number;
}

type PokemonList = {
   count: number;
   next: string | null;
   previous: string | null;
   results: Pokemon[];
}

type CommonData = {
   name: string;
   url: string;
}

type PokemonData = {
   abilities: {
      ability: CommonData;
      is_hidden: boolean;
      slot: number;
   }[];
   base_experience: number;
   forms: CommonData[];
   game_indices: {
      game_index: number;
      version: CommonData;
   }[];
   height: number;
   held_items: {
      item: CommonData;
      version_details: {
         rarity: number;
         version: CommonData;
      }[];
   }[];
   id: number;
   is_default: boolean;
   location_area_encounters: string;
   moves: {
      move: CommonData;
      version_group_details: {
         level_learned_at: number;
         move_learn_method: CommonData;
         version_group: CommonData;

      }[];
   }[];
   name: string;
   order: number;
   past_types: any[];
   species: CommonData;
   sprites: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
   };
   stats: {
      base_stat: number;
      effort: number;
      stat: CommonData;
   }[];
   types: {
      slot: number;
      type: CommonData;
   }[];
   weight: number;
}
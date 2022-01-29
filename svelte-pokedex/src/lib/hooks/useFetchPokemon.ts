import { onMount } from "svelte";
import { writable } from "svelte/store";

// * Saves the data after fetching
const cache = new Map<string, PokemonData>();

const useFetchPokemon = (url: string) => {
   const data = writable<PokemonData>();
   const loading = writable<boolean>(true);
   const error = writable<Error>();
   const controller = new AbortController();

   onMount(() => {
      if (!cache.get(url)) {
         fetch(url, { signal: controller.signal })
            .then((res) => res.json())
            .then((fetchedData: PokemonData) => {
               data.set(fetchedData)
               cache.set(url, fetchedData);
            })
            .catch((err: Error) => {
               error.set(err);
            })
            .finally(() => {
               loading.set(false);
            });
      } else {
         data.set(cache.get(url));
         loading.set(false);
      }

      return () => {
         controller.abort();
      }
   })

   return { data, loading, error };
}

export default useFetchPokemon;
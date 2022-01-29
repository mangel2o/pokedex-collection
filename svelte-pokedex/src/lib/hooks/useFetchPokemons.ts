import { onMount } from "svelte";
import { get, writable } from "svelte/store";

const cache = new Map<string, PokemonList>();

const useFetchPokemons = (url: string) => {
   const data = writable<PokemonList>();
   const loading = writable<boolean>(true);
   const error = writable<Error>();
   const controller = new AbortController();
   let mounted = false;

   const fetchInitial = () => {
      fetch(url, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            data.set(fetchedData)
            cache.set(url, fetchedData);
         })
         .catch((err: Error) => {
            error.set(err);
         })
         .finally(() => {
            loading.set(false);
         });
   }

   const fetchNext = (next: string) => {
      fetch(next, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            if (mounted) {
               data.update((previous) => {
                  const newData = {
                     ...fetchedData,
                     results: [...previous.results, ...fetchedData.results]
                  }
                  cache.set(url, newData);
                  return newData
               })
            }
         })
         .catch((err: Error) => {
            if (mounted) {
               error.set(err);
            }
         })
   }

   onMount(() => {
      mounted = true;
      if (!cache.get(url)) {
         fetchInitial();
      } else {
         data.set(cache.get(url));
         loading.set(false);
      }
      return () => {
         mounted = false;
         controller.abort();
      }
   })

   return { data, loading, error, fetchNext };
}

export default useFetchPokemons;
import { useEffect, useState } from "react";

// * Saves the data after fetching
const cache = new Map<string, PokemonData>();

const useFetchPokemon = (url: string) => {
   const [data, setData] = useState<PokemonData>();
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error>();
   const controller = new AbortController();

   useEffect(() => {
      if (!cache.get(url)) {
         fetch(url, { signal: controller.signal })
            .then((res) => res.json())
            .then((fetchedData: PokemonData) => {
               setData(fetchedData)
               cache.set(url, fetchedData);
            })
            .catch((err: Error) => {
               setError(err);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         setData(cache.get(url));
         setLoading(false);
      }

      return () => {
         controller.abort();
      }
   }, [url])


   return { data, loading, error };
}

export default useFetchPokemon;
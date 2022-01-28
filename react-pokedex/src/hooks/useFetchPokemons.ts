import { useEffect, useRef, useState } from "react";

const cache = new Map<string, PokemonList>();

const useFetchPokemons = (url: string) => {
   const [data, setData] = useState<PokemonList>();
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error>();
   const mounted = useRef(false);
   const controller = new AbortController();

   const fetchInitial = () => {
      fetch(url, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            setData(fetchedData)
            cache.set(url, fetchedData);
         })
         .catch((err: Error) => {
            setError(err);
         })
         .finally(() => {
            setLoading(false);
         });
   }

   const fetchNext = () => {
      fetch(data?.next!, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            if (mounted.current) {
               const newData = ({
                  ...fetchedData,
                  results: [...data?.results!, ...fetchedData.results]
               });
               setData(newData)
               cache.set(url, newData);
            }
         })
         .catch((err: Error) => {
            if (mounted.current) {
               setError(err);
            }
         })
   }

   useEffect(() => {
      mounted.current = true;
      if (!cache.get(url)) {
         fetchInitial();
      } else {
         setData(cache.get(url));
         setLoading(false);
      }
      return () => {
         mounted.current = false;
         controller.abort();
      }
   }, [])


   return { data, loading, error, fetchNext };
}

export default useFetchPokemons;
import { onMounted, ref } from "vue";

// * Saves the data after fetching
const cache = new Map<string, PokemonData>();

const useFetchPokemon = (url: string) => {
   const data = ref<PokemonData>();
   const loading = ref<boolean>(true);
   const error = ref<Error>();
   const controller = new AbortController();

   onMounted(() => {
      if (!cache.get(url)) {
         fetch(url, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonData) => {
            data.value = fetchedData
            cache.set(url, fetchedData);
         })
         .catch((err: Error) => {
            error.value = err;
         })
         .finally(() => {
            loading.value = false;
         });
      } else {
         data.value = cache.get(url);
         loading.value = false;
      }
      
      return () => {
         controller.abort();
      }
   })

   return { data, loading, error };
}

export default useFetchPokemon;
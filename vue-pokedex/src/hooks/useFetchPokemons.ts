import { onMounted, ref } from "vue";

// * Saves the data after fetching
const cache = new Map<string, PokemonList>();

const useFetchPokemons = (url: string) => {
   const data = ref<PokemonList>();
   const loading = ref<boolean>(true);
   const error = ref<Error>();
   const controller = new AbortController();
   let mounted = false;

   const fetchInitial = () => {
      fetch(url, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            data.value = fetchedData
            cache.set(url, fetchedData);
         })
         .catch((err: Error) => {
            error.value = err;
         })
         .finally(() => {
            loading.value = false;
         });
   }

   const fetchNext = (next: string) => {
      fetch(next, { signal: controller.signal })
         .then((res) => res.json())
         .then((fetchedData: PokemonList) => {
            if (mounted) {
               const newData = {
                  ...fetchedData,
                  results: [...data.value!.results, ...fetchedData.results]
               }
               data.value = newData
               cache.set(url, newData);
            }
         })
         .catch((err: Error) => {
            if (mounted) {
               error.value = err;
            }
         })
   }

   onMounted(() => {
      mounted = true;
      if (!cache.get(url)) {
         fetchInitial();
      } else {
         data.value = cache.get(url);
         loading.value = false;
      }
      return () => {
         mounted = false;
         controller.abort();
      }
   })

   return { data, loading, error, fetchNext };
}

export default useFetchPokemons;
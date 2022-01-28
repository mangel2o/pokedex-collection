import { FunctionComponent, useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import Stairs from "../components/Stairs";
import useFetchPokemons from "../hooks/useFetchPokemons";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
   const { data, loading, error, fetchNext } = useFetchPokemons("https://pokeapi.co/api/v2/pokemon");
   const [searchQuery, setSearchQuery] = useState("");
   const [pokemons, setPokemons] = useState<IndexedPokemon[]>([]);
   const [filteredPokemons, setFilteredPokemons] = useState<IndexedPokemon[]>([]);

   // * Handles scroll to top
   function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }

   // * Refetchs whenever the user scrolls to the bottom of the page
   function handleScrollToBottom() {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
         fetchNext();
      }
   }

   // * Sets the pokemon data with indexed values
   useEffect(() => {
      if (data) {
         const indexedData = data.results.map((pokemon, index) => {
            return { ...pokemon, index: index + 1 }
         })
         setPokemons(indexedData);
      }
   }, [data]);

   // * Filters pokemons based on the search query
   useEffect(() => {
      setFilteredPokemons(pokemons.filter(
         (pokemon) =>
            pokemon.name.includes(searchQuery) ||
            pokemon.index === (+searchQuery)
      ))
   }, [pokemons, searchQuery]);


   // * Adds event listener on scroll
   useEffect(() => {
      window.addEventListener("scroll", handleScrollToBottom)
      return () => {
         window.removeEventListener("scroll", handleScrollToBottom)
      }
   })

   return (
      <div className="home-container">
         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
         {loading && <Stairs></Stairs>}
         {error && <h2>Seems like there's an error: {error.message}</h2>}
         {filteredPokemons && <PokemonList pokemons={filteredPokemons} />}
         <div className="home-absolute-container">
            <button className="fab-scroll-to-top" onClick={scrollToTop}>Up</button>
         </div>
      </div>
   );
}

export default Home;
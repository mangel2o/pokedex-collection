<script lang="ts">
	import { onMount } from "svelte";
	import PokemonList from "../components/PokemonList.svelte";
	import SearchBar from "../components/SearchBar.svelte";
	import Stairs from "../components/Stairs.svelte";
	import useFetchPokemons from "../hooks/useFetchPokemons";

	const { data, loading, error, fetchNext } = useFetchPokemons(
		"https://pokeapi.co/api/v2/pokemon"
	);
	let searchQuery = "";
	$: pokemons =
		$data &&
		$data.results.map((pokemon, index) => {
			return { ...pokemon, index: index + 1 };
		});

	$: filteredPokemons =
		pokemons &&
		pokemons.filter(
			(pokemon) =>
				pokemon.name.includes(searchQuery) || pokemon.index === +searchQuery
		);

	// * Handles scroll to top
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	// * Refetchs whenever the user scrolls to the bottom of the page
	const handleScrollToBottom = () => {
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
			fetchNext($data.next);
	};

	onMount(() => {
		window.addEventListener("scroll", handleScrollToBottom);
		return () => {
			window.removeEventListener("scroll", handleScrollToBottom);
		};
	});
</script>

<div class="home-container">
	<SearchBar bind:searchQuery />
	{#if $loading}
		<Stairs />
	{:else if $error}
		<h2>Seems like there's an error: {$error.message}</h2>
	{:else if filteredPokemons}
		<PokemonList pokemons={filteredPokemons} />
	{/if}
	<div class="home-absolute-container">
		<button class="fab-scroll-to-top" on:click={scrollToTop}> Up </button>
	</div>
</div>

<style>
	.home-container {
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 1rem;
	}

	.home-absolute-container {
		position: absolute;
		background-color: coral;
		left: 840px;
		top: 780px;
	}

	.fab-scroll-to-top {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		font-size: large;
		transform: translateY(-100%);
		background-color: #f0f2f4;
		border: 1px solid #c3c3c5;
		border-radius: 0.5rem;
	}

	.fab-scroll-to-top:hover {
		background-color: #e0e1e4;
	}
</style>

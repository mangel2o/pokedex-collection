<script lang="ts">
	import { useParams } from "svelte-navigator";
	import PokemonInfo from "../components/PokemonInfo.svelte";
	import Stairs from "../components/Stairs.svelte";
	import useFetchPokemon from "../hooks/useFetchPokemon";

	// your script goes here
	let params = useParams();
	const { data, loading, error } = useFetchPokemon(
		`https://pokeapi.co/api/v2/pokemon/${$params.id}`
	);
</script>

<div class="pokemon-container">
	{#if $loading}
		<Stairs />
	{:else if $error}
		<h2>Seems like there's an error: {$error.message}</h2>
	{:else}
		<PokemonInfo pokemon={$data} />
	{/if}
</div>

<style>
	.pokemon-container {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f2f4;
		padding: 1rem;
	}
</style>

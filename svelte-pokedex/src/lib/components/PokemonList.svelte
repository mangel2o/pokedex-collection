<script lang="ts">
	import PokemonCard from "./PokemonCard.svelte";
	export let pokemons: IndexedPokemon[];
</script>

<div class="pokemon-list">
	{#each pokemons as pokemon (pokemon.index)}
		<PokemonCard {pokemon} />
	{/each}
</div>

<style>
	.pokemon-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>

<script lang="ts">
	import ElementType from "./ElementType.svelte";
	import PokemonDataRow from "./PokemonDataRow.svelte";

	export let pokemon: PokemonData;
	const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
</script>

<div class="pokemon-data-container">
	<img class="pokemon-image" src={pokemonImage} alt="pokemon" />
	<div class="pokemon-data">
		<span class="pokemon-data-name">
			{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Data
		</span>
		<PokemonDataRow name="Number">
			<span class="pokemon-data-number">
				{pokemon.id}
			</span>
		</PokemonDataRow>
		<PokemonDataRow name="Type">
			{#each pokemon.types as element (element.type.name)}
				<ElementType {element} />
			{/each}
		</PokemonDataRow>
		<PokemonDataRow name="Species">
			{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
		</PokemonDataRow>
		<PokemonDataRow name="Height">
			{pokemon.height} m
		</PokemonDataRow>
		<PokemonDataRow name="Weight">
			{pokemon.weight} kg
		</PokemonDataRow>
	</div>
</div>

<style>
	.pokemon-data-container {
		display: flex;
		gap: 1rem;
		width: 100%;
	}

	.pokemon-image {
		width: 20rem;
		object-fit: contain;
	}

	.pokemon-data {
		display: flex;
		flex-flow: column;
		flex-grow: 1;
	}

	.pokemon-data-name {
		font-size: 1.6rem;
		font-weight: bold;
		font-variant: small-caps;
		margin-bottom: 1rem;
	}

	.pokemon-data-number {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>

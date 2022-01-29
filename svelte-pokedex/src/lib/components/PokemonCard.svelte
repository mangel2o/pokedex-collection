<script lang="ts">
	import { Link } from "svelte-navigator";

	export let pokemon: IndexedPokemon;
	const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`;
</script>

<Link to="/pokemon/{pokemon.name}">
	<div class="pokemon-card">
		<img
			class="pokemon-card-sprite"
			src={pokemonSprite}
			alt="pokemon sprite"
		/>
		<span class="pokemon-card-name">
			{pokemon.index}. {pokemon.name}
		</span>
	</div>
</Link>

<style>
	.pokemon-card {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-color: #f0f2f4;
		border-radius: 0.5rem;
	}

	.pokemon-card:hover {
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
	}

	.pokemon-card-name {
		font-weight: 700;
		text-transform: uppercase;
		color: black;
	}

	.pokemon-card-sprite {
		width: 10rem;
	}
</style>

<script setup lang="ts">
	import PokemonCard from "./PokemonCard.vue";
	const props = defineProps<{
		pokemons: IndexedPokemon[];
	}>();
</script>

<template>
	<div class="pokemon-list">
		<PokemonCard
			v-for="pokemon in props.pokemons"
			:key="pokemon.index"
			:pokemon="pokemon"
		/>
	</div>
</template>

<style scoped>
	.pokemon-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>

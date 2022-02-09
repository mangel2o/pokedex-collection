<script setup lang="ts">
	import { computed, onMounted, ref } from "vue";
	import SearchBar from "../components/SearchBar.vue";
	import Stairs from "../components/Stairs.vue";
	import PokemonList from "../components/PokemonList.vue";
	import useFetchPokemons from "../hooks/useFetchPokemons";

	const { data, loading, error, fetchNext } = useFetchPokemons(
		"https://pokeapi.co/api/v2/pokemon"
	);

	const searchQuery = ref("");
	const pokemons = computed(() => {
		return (
			data.value &&
			data.value.results.map((pokemon, index) => {
				return { ...pokemon, index: index + 1 };
			})
		);
	});

	const filteredPokemons = computed(() => {
		return (
			pokemons.value &&
			pokemons.value.filter(
				(pokemon) =>
					pokemon.name.includes(searchQuery.value) ||
					pokemon.index === +searchQuery.value
			)
		);
	});

	// * Handles scroll to top
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	// * Refetchs whenever the user scrolls to the bottom of the page
	const handleScrollToBottom = () => {
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
			fetchNext(data.value?.next!);
	};

	onMounted(() => {
		window.addEventListener("scroll", handleScrollToBottom);
		return () => {
			window.removeEventListener("scroll", handleScrollToBottom);
		};
	});
</script>

<template>
	<div class="home-container">
		<SearchBar v-model:searchQuery="searchQuery" />
		<Stairs v-if="loading" />
		<h2 v-else-if="error">Seems like there's an error: {$error.message}</h2>
		<PokemonList v-else-if="filteredPokemons" :pokemons="filteredPokemons" />
		<div class="home-absolute-container">
			<button class="fab-scroll-to-top" @click="scrollToTop">Up</button>
		</div>
	</div>
</template>

<style scoped>
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

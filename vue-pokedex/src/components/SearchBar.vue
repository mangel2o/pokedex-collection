<script setup lang="ts">
	const props = defineProps<{
		searchQuery: string;
	}>();

	const emit = defineEmits<{
		(e: "update:searchQuery", value: string): void;
	}>();
</script>

<template>
	<div class="search-bar">
		<input
			class="search-field"
			type="text"
			:value="searchQuery"
			@input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
			placeholder="Search Pokemon..."
		/>
		<button class="search-clear" @click="searchQuery = ''">Clear</button>
	</div>
</template>

<style scoped>
	.search-bar {
		display: flex;
		width: 100%;
	}

	.search-field {
		padding: 1rem;
		flex-grow: 1;
		font-size: large;
		border: none;
		border-bottom: 1px solid gray;
		outline: none;
	}

	.search-field:focus {
		border: none;
		border-bottom: 1px solid;
	}

	.search-clear {
		padding: 0 1rem;
		font-size: large;
		background-color: #f0f2f4;
		border: 1px solid #c3c3c5;
	}

	.search-clear:hover {
		background-color: #e0e1e4;
	}
</style>

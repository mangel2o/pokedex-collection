<script lang="ts">
	export let name: string;
</script>

<div class="pokemon-data-row">
	<div class="pokemon-data-row-name">
		{name}
	</div>
	<div class="pokemon-data-row-value">
		<slot />
	</div>
</div>

<style>
	.pokemon-data-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		font-size: 1.2rem;
		border-top: 2px solid gainsboro;
	}

	.pokemon-data-row-name {
		text-align: right;
		font-weight: 400;
		color: darkslategrey;
		min-width: 5rem;
	}

	.pokemon-data-row-value {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
</style>

<script lang="ts">
	import { Link } from "svelte-navigator";
</script>

<div class="nav-bar">
	<div class="nav-links">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</div>
	<span class="nav-title">Svelte Pokédex</span>
</div>

<style>
	.nav-bar {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.nav-links {
		display: flex;
		gap: 1rem;
		padding: 1rem 1rem 0.5rem 1rem;
	}

	.nav-title {
		font-size: 2rem;
		font-weight: bold;
		text-transform: lowercase;
		font-variant: small-caps;
	}
</style>

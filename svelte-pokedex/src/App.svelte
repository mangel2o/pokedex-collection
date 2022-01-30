<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import NavBar from "./lib/components/NavBar.svelte";
	import About from "./lib/views/About.svelte";
	import Home from "./lib/views/Home.svelte";
	import NotFound from "./lib/views/NotFound.svelte";
	import Pokemon from "./lib/views/Pokemon.svelte";
</script>

<Router primary={false}>
	<div class="app">
		<NavBar />
		<div class="content">
			<Route path="/">
				<Home />
			</Route>
			<Route path="about">
				<About />
			</Route>
			<Route path="pokemon/:id">
				<Pokemon />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</div>
	</div>
</Router>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Century-Gothic -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
	}

	.app {
		display: flex;
		flex-flow: column;
	}

	.content {
		width: 800px;
		margin: 2rem auto;
	}
</style>

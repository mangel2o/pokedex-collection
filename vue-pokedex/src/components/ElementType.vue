<script lang="ts" setup>
	const props = defineProps<{
		element: { slot: number; type: CommonData };
	}>();
</script>

<template>
	<div class="type" :class="props.element.type.name">
		{{ element.type.name }}
	</div>
</template>

<style scoped>
	.type {
		display: inline-block;
		width: 66px;
		background: #dbdbdb;
		border: 1px solid #a3a3a3;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		color: #fff;
		font-size: 0.75rem;
		font-weight: normal;
		line-height: 1.5rem;
		text-align: center;
		text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
		text-transform: uppercase;
		transition: opacity 0.4s;
	}

	.normal {
		background-color: #a8a878;
		border: 1px solid #6d6d4e;
	}

	.fire {
		background-color: #f08030;
		border: 1px solid #9c531f;
	}

	.water {
		background-color: #6890f0;
		border: 1px solid #445e9c;
	}

	.electric {
		background-color: #f8d030;
		border: 1px solid #a1871f;
	}

	.grass {
		background-color: #78c850;
		border: 1px solid #4e8234;
	}

	.ice {
		background-color: #98d8d8;
		border: 1px solid #638d8d;
	}

	.ground {
		background-color: #e0c068;
		border: 1px solid #927d44;
	}

	.flying {
		background-color: #a890f0;
		border: 1px solid #6d5e9c;
	}

	.ghost {
		background-color: #705898;
		border: 1px solid #493963;
	}

	.rock {
		background-color: #b8a038;
		border: 1px solid #786824;
	}

	.fighting {
		background-color: #c03028;
		border: 1px solid #7d1f1a;
	}

	.poison {
		background-color: #a040a0;
		border: 1px solid #682a68;
	}

	.psychic {
		background-color: #f85888;
		border: 1px solid #a13959;
	}

	.bug {
		background-color: #a8b820;
		border: 1px solid #6d7815;
	}

	.dark {
		background-color: #705848;
		border: 1px solid #49392f;
	}

	.steel {
		background-color: #b8b8d0;
		border: 1px solid #787887;
	}

	.dragon {
		background-color: #7038f8;
		border: 1px solid #4924a1;
	}
</style>

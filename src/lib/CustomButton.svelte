<script>
	export let path;
	export let clr = 'primary';
	export let tailClr = 'primary';
	export let txtClr = 'white';
	export let tailTxtClr = 'white';
</script>

<a href={path} style="--clr: var(--{clr}); --txtClr: var(--{txtClr})"><slot /></a>
{#if $$slots.tail}
	<span class="tail" style="--tailClr: var(--{tailClr}); --tailTxtClr: var(--{tailTxtClr})">
		<slot name="tail" />
	</span>
{/if}

<style>
	:root {
		--size: 1rem;
		--ml: 5px;
	}

	a {
		text-decoration: none;
		margin-left: var(--ml);
		background-color: var(--clr);
		color: var(--txtClr);
	}

	a,
	.tail {
		position: relative;
		padding: 2px 10px;
		font-size: var(--size);
		text-transform: uppercase;
		font-weight: bold;
		font-style: oblique;
	}

	/* TODO hover anim */
	a:hover {
	}

	.tail {
		margin-left: calc(var(--ml) * -1);
		background-color: var(--tailClr);
		color: var(--tailTxtClr);
	}
</style>

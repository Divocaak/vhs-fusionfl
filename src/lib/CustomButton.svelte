<script>
	export let path;
	export let clr = 'primary';
	export let tailClr = 'primary';
	export let txtClr = 'white';
	export let tailTxtClr = 'white';
</script>

{#if $$slots.head}
<span class="head">
	<slot name="head" />
</span>
{/if}
<a href={path} style="--clr: var(--{clr}); --txtClr: var(--{txtClr})"><slot /></a>
{#if $$slots.tail}
	<span class="tail" style="--tailClr: var(--{tailClr}); --tailTxtClr: var(--{tailTxtClr})">
		<slot name="tail" />
	</span>
{/if}

<style>
	:root {
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
		font-size: 1.4rem;
		text-transform: uppercase;
		font-weight: bold;
		font-style: oblique;
		padding: 0.5rem 1rem;
	}

	/* TODO hover anim */
	a:hover {
	}

	.tail {
		margin-left: calc(var(--ml) * -1);
		background-color: var(--tailClr);
		color: var(--tailTxtClr);
	}

	.head{
		
	}
</style>

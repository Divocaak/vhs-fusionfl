<script>
	export let path;
	export let clr = 'primary';
	export let tailClr = 'primary';
	export let txtClr = 'white';
	export let tailTxtClr = 'white';
	export let display = 'block';
	export let fontSize = '1.4rem';
</script>

{#if $$slots.head}
	<span class="head">
		<slot name="head" />
	</span>
{/if}
<a
	href={path}
	style="--clr: var(--{clr}); --txtClr: var(--{txtClr}); --display: {display}; --fs: {fontSize}"
>
	<slot />
</a>
{#if $$slots.tail}
	<span class="tail" style="--tailClr: var(--{tailClr}); --tailTxtClr: var(--{tailTxtClr})">
		<slot name="tail" />
	</span>
{/if}

<style>
	:root {
		--ml: 5px;
		--display: block;
		--fs: 1.4rem;
	}

	a {
		text-decoration: none;
		/* margin-left: var(--ml); */
		background-color: var(--clr);
		color: var(--txtClr);

		height: fit-content;
		display: var(--display);
	}

	a,
	.tail {
		text-transform: uppercase;
		font-weight: bold;
		font-style: oblique;
		font-size: var(--fs);
		padding: 0.5rem 1rem;
	}

	/* TODO hover anim */
	a:hover {
	}

	.tail,
	.head {
		display: inline-block;
	}

	.tail {
		margin-left: calc(var(--ml) * -1);
		background-color: var(--tailClr);
		color: var(--tailTxtClr);
	}

	.head {
		font-size: calc(var(--fs) + .1rem);
		margin-right: calc(var(--ml) * -1.8);
		padding: 0.5rem 0;
	}
</style>

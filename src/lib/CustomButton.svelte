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
		background-color: var(--clr);
		color: var(--txtClr);

		position: relative;
		height: fit-content;

		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
		-webkit-transition-property: box-shadow, transform, color;
		transition-property: box-shadow, transform, color;
		-webkit-transition-duration: 0.2s;
		transition-duration: 0.2s;
	}

	a,
	.tail {
		padding: 0.5rem 1rem;
		text-transform: uppercase;
		font-weight: bold;
		font-style: oblique;
		font-size: var(--fs);
	}

	.tail {
		display: inline-block;
		vertical-align: middle;
		margin-left: calc(var(--ml) * -1);
		background-color: var(--tailClr);
		color: var(--tailTxtClr);
	}
	
	.head {
		display: inline-block;
		vertical-align: middle;
		margin-right: calc(var(--ml) * -.8);
		font-size: calc(var(--fs) + 0.1rem);
	}

	a:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--txtClr);
		-webkit-transform: scaleY(0);
		transform: scaleY(0);
		-webkit-transform-origin: 50%;
		transform-origin: 50%;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}
	a:hover,
	a:focus,
	a:active {
		color: var(--clr);
		box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
	a:hover:before,
	a:focus:before,
	a:active:before {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
	}
</style>

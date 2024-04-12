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

	/* Shutter Out Vertical */
/* .hvr-shutter-out-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-vertical:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2098D1;
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
.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {
  color: white;
}
.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
} */

/* Grow Shadow */
/* .hvr-grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>

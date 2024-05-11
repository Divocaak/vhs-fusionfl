<script>
	import EventIntro from '$lib/EventIntro.svelte';

	export let data;

	const event = data.event;
</script>

<EventIntro event={event} isDetail={true}></EventIntro>
<main>
	{event.desc}
	<div id="fightcard">
		<h3 class="lead text-center pt-5">main card<h3>
		<img class="img-fluid my-1 my-sm-2 hvr-grow-shadow" alt="fightcard breit" src="/imgs/fightcards/breit.png">
		<img class="img-fluid my-1 my-sm-2 hvr-grow-shadow" alt="fightcard bruknar" src="/imgs/fightcards/bruknar.png">
		<img class="img-fluid my-1 my-sm-2 hvr-grow-shadow" alt="fightcard juricek" src="/imgs/fightcards/juricek.png">
		<img class="img-fluid my-1 my-sm-2 hvr-grow-shadow" alt="fightcard machmudov" src="/imgs/fightcards/machmudov.png">
		<div class="tbas">
			<h3 class="lead text-center pt-5">více již brzy<h3>
			<img class="img-fluid my-1 my-sm-2" alt="fightcard tba" src="/imgs/fightcards/tba-tba.png">
			<img class="img-fluid my-1 my-sm-2" alt="fightcard tba" src="/imgs/fightcards/tba-tba.png">
		</div>
	</div>
</main>

<style>
	.img {
		position: relative;
		width: 100%;
		height: 70vh;
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.tbas{
		position:relative;
		width:100%;
		height:fit-content;	
	}

	.tbas:after{
		content: "";
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:10;
		background: linear-gradient(0deg, rgba(255,255,255,1) 25%, rgba(0,0,0,0) 100%);
	}

	main {
		margin: calc(var(--content-side-margin) / 3) var(--content-side-margin);
	}

	.hvr-grow-shadow {
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: box-shadow, transform;
		transition-property: box-shadow, transform;
}
	.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
		z-index:10;
		box-shadow: 0 0 100px 0px rgba(0, 0, 0, 0.5);
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>

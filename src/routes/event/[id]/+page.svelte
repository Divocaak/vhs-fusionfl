<script>
	import EventIntro from '$lib/EventIntro.svelte';

	export let data;

	const event = data.event;
</script>

<EventIntro event={event} isDetail={true}></EventIntro>
<main>
	{event.desc}
	<div id="fightcard">
		<!-- TODO hover fx -->
		<img class="img-fluid my-1 my-sm-2" alt="fightcard breit" src="/imgs/fightcards/breit.png">
		<img class="img-fluid my-1 my-sm-2" alt="fightcard bruknar" src="/imgs/fightcards/bruknar.png">
		<img class="img-fluid my-1 my-sm-2" alt="fightcard juricek" src="/imgs/fightcards/juricek.png">
		<img class="img-fluid my-1 my-sm-2" alt="fightcard machmudov" src="/imgs/fightcards/machmudov.png">
		<img class="img-fluid my-1 my-sm-2" alt="fightcard tba" src="/imgs/fightcards/tba-tba.png">
	</div>
</main>
<!-- TODO fightcard (img) -->

<style>
	.img {
		position: relative;
		width: 100%;
		height: 70vh;
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
	}

	main {
		margin: calc(var(--content-side-margin) / 3) var(--content-side-margin);
	}
</style>

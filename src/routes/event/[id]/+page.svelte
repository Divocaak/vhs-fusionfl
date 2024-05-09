<script>
	export let data;
	const event = data.event;
</script>

<div class="img" style="background-image: url('/imgs/events/{data.id}.jpg');"></div>
<main>
	{event.label}
	{event.date}
	{event.place}
	{event.desc}
	{event.ppvLink}
	{event.ppvPrice}
	{event.tickets}
	<!-- TODO fightcard (img) -->
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

	main {
		margin: calc(var(--content-side-margin) / 3) var(--content-side-margin);
	}
</style>

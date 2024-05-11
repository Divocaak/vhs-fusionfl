<script>
	import CustomButton from '$lib/CustomButton.svelte';
	import EventIntro from '$lib/EventIntro.svelte';
	import Article from '$lib/Article.svelte';
	import { tweened } from 'svelte/motion';

	export let data;
	const closestEventId = Object.keys(data.events)[Object.keys(data.events).length - 1];
	const closestEvent = data.events[closestEventId];

	/* TODO from db */
	const articles = [
		{
			id: '3',
			label: 'FUSION 25 oslavuje comeback v Brně: Knockouty a vzpomínky hvězd',
			tags: ['FUSION 25', 'Reportáž']
		},
		{
			id: '2',
			label: 'FUSION 27: Výkladní skříň talentů MMA v Brně  ',
			tags: ['FUSION 27', 'Soutěž']
		},
		{
			id: '1',
			label: 'Vsaďte si na své favority v MMA: FUSION a Fortuna ti přeje štěstí',
			tags: ['FUSION 27', 'Kurzovní lístek']
		}
	];
	
	const expected = new Date(closestEvent.date).getTime();
	const distance = tweened(expected - new Date().getTime());
	setInterval(() => {
		if ($distance > 0) {
			$distance -= 1000;
		}
	}, 1000);
	$: days = Math.floor($distance / (1000 * 60 * 60 * 24));
	$: hours = Math.floor(($distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: minutes = Math.floor(($distance % (1000 * 60 * 60)) / (1000 * 60));
	$: seconds = Math.floor(($distance % (1000 * 60)) / 1000);
	
	const aftermovieLink = 'https://www.youtube.com/watch?v=8VflzskoJds';
</script>

<EventIntro event={closestEvent}></EventIntro>

<div class="content" id="news">
	<div class="m-0 p-0 m-sm-5 p-sm-5">
		<h1 class="lead">novinky</h1>
		<div class="row m-0">
			{#each articles as article}
				<Article {...article} />
			{/each}
		</div>
	</div>
	<div class="mx-0 px-0 mx-md-5 px-md-5">
		<div class="banner">
			<div class="button">
				<CustomButton path={aftermovieLink} clr="black">
					<i class="bi bi-play-circle-fill pe-2"></i>pusť si aftermovie
				</CustomButton>
			</div>
		</div>
	</div>
</div>

{#if seconds >= 0}
<div class="time-banner">
	<span class="countdown">{days}</span>dní
	<span class="countdown">{hours}</span>hod
	<span class="countdown">{minutes}</span>min
	<span class="countdown">{seconds}</span>sek
	<span class="px-2">&nbsp;</span>
	<CustomButton path={closestEvent.ppvLink ?? closestEvent.tickets} clr="white" txtClr="primary" display="inline-block">
		<i class="bi {closestEvent.ppvLink ? "bi-play-circle-fill" : "bi-ticket-perforated"} pe-2"></i>{closestEvent.ppvLink ? "koupit živý přenos" : "koupit vstupenku"}
		<span slot="tail">jen {closestEvent.ppvPrice ?? closestEvent.ticketsPrice} kč</span>
	</CustomButton>
</div>
{/if}

<div class="partners-banner">
	<h2 class="lead">Generální partner</h2>
	<div class="row">
		<div class="col-12 col-md-4"></div>
		<div class="col-12 col-md-4">
			<img src="/imgs/partners_logos/czechcbd.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-12 col-md-4"></div>
	</div>
	<h2 class="lead">Partneři</h2>
	<div class="row">
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/atex.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/bjp.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/comfor.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/fortuna.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/jetsaamgym.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/jokva.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/mandarin.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/o2.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/olympia.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/plaza.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/pozisbau.png" class="img-fluid" alt="partner logo" />
		</div>
		<div class="col-6 col-sm-4 col-md-2">
			<img src="/imgs/partners_logos/ticketstream.png" class="img-fluid" alt="partner logo" />
		</div>
	</div>
</div>

<div class="subscribe-banner row">
	<div class="col-12 col-sm-6">
		<p class="lead">nenechte si ujít novinky</p>
		<p>Získáte náskok při předprodeji vstupenek</p>
	</div>
	<div class="col-12 col-sm-6">
		<form>
			<CustomButton path="/" display="inline-block">
				<input slot="head" type="email" placeholder="Váš e-mail" />
				<i class="bi bi-envelope pe-2"></i>přihlásit odběr
			</CustomButton>
		</form>
	</div>
</div>

<style>
	:root {
		--section-spacer: 2rem;
	}

	.content .banner {
		margin-top: var(--section-spacer);
		position: relative;
		width: 100%;
		height: 30vh;
		background-image: url('/imgs/aftermovie.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.content .banner .button {
		position: absolute;
		bottom: 10%;
		width: fit-content;

		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}

	.time-banner {
		margin-top: var(--section-spacer);
		position: relative;
		width: 100%;
		background-color: var(--black);
		color: var(--white);
		text-align: center;
		font-weight: lighter;
		padding: 2rem 0;
	}

	.time-banner .countdown {
		font-weight: bold;
		font-style: oblique;
		font-size: 1.75rem;
		padding-left: 2rem;
		padding-right: 0.6rem;
	}

	/* .time-banner div{
		width: fit-content;
		background-color: red;
	} */

	.partners-banner {
		margin-top: var(--section-spacer);
		background-color: white;
		width: 100%;
		height: fit-content;
		padding: 2rem var(--content-side-margin);
	}

	.partners-banner div {
		height: fit-content;
		padding: 1rem;
	}

	.subscribe-banner {
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		margin: 0 var(--content-side-margin);
	}

	.subscribe-banner p {
		color: var(--primary);
	}

	.subscribe-banner form input {
		position:relative;
		border: solid 2px var(--black);
		padding: 10px;
		width:250px;
		font-size: 1rem;
		color: var(--black);
	}
	
	.subscribe-banner form input::placeholder{
		color: var(--black);
	} 

	.subscribe-banner form input:focus {
		outline:none;
	}
</style>

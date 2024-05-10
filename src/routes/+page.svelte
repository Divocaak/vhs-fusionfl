<script>
	import CustomButton from '$lib/CustomButton.svelte';
	import Article from '$lib/Article.svelte';
	import { tweened } from 'svelte/motion';

	export let data;
	const closestEventId = Object.keys(data.events)[Object.keys(data.events).length - 1];
	const closestEvent = data.events[closestEventId];
	closestEvent.id = closestEventId;
	const eventIsPast = true;

	const dateFormatted = new Date(closestEvent.date).toLocaleDateString('cs-CZ', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric'
	});

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

<!-- URGENT move to a component without the arrows to reuse at event detail -->
<div class="landing-panel">
	<div class="bg-img-container" style="background-image: url('/imgs/events/{closestEvent.id}.jpg');">
			<div class="arrows-holder">
				<div class="row">
					<div class="col-md-6 col-12 text-center">
						<p class="label">{closestEvent.label}</p>
						<p class="ww">{dateFormatted}<span>|</span>{closestEvent.place}</p>
						<p class="desc">{closestEvent.desc}</p>
					</div>
					<div class="col-md-6 col-12">
						{#if closestEvent.tickets != null}
						<CustomButton path={closestEvent.tickets} display="block">
							<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
						</CustomButton>
						{/if}
						{#if closestEvent.ppvLink != null}
						<CustomButton path={closestEvent.ppvLink} clr="info" display="block"  additionalClasses="my-2">
							<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
						</CustomButton>
						{/if}
						<CustomButton path="/event/{closestEvent.id}" clr="black" display="block">
							{#if eventIsPast}
							<i class="bi bi-eye-fill pe-2"></i>report
							{:else}
							<i class="bi bi-person-badge-fill pe-2"></i>fightcard
							{/if}
						</CustomButton>
					</div>
					<!-- <i class="car-btn-icon bi bi-arrow-left"></i>
					<i class="car-btn-icon bi bi-arrow-right"></i> -->
				</div>
			</div>
	</div>
</div>

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
	<CustomButton path={closestEvent.ppvLink} clr="white" txtClr="primary" display="inline-block">
		<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
		<span slot="tail">jen {closestEvent.ppvPrice} kč</span>
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

<div class="subscribe-banner row px-0 px-md-5">
	<div class="col-12 col-sm-6">
		<p class="lead">nenechte si ujít novinky</p>
		<p>Získáte náskok při předprodeji vstupenek</p>
	</div>
	<div class="col-12 col-sm-6">
		<form>
			<CustomButton path="/" display="inline-block" fontSize="1.2rem">
				<input slot="head" type="email" placeholder="Váš email" />
				<i class="bi bi-envelope pe-2"></i>přihlásit odběr
			</CustomButton>
		</form>
	</div>
</div>

<style>
	:root {
		--section-spacer: 2rem;
	}

	.landing-panel {
		margin: 0;
		padding: 0;
		position: relative;
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	
	.bg-img-container {
		position: relative;
		width: 100vw;
		height: 80vh;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		border-bottom: solid 3px var(--primary-high);
	}

	.past{
		filter: saturate(0%);
	}

	.arrows-holder{
		position: absolute;
		bottom: -15%;

		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;

		width: 60vw;
		height: fit-content;
		background-color:var(--primary);

		padding: 2px 60px;
		transform: skewX(-20deg) scaleY(cos(-20deg));
		filter: unset !important;
	}

	.bg-img-container .row {
		position:relative;
		width: 100%;
		height: 100%;
		background-color: var(--white);
		margin:0;
		
		padding: 2% 3%;

		box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
		-webkit-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
	}

	.bg-img-container .row div, .car-btn-icon {
		transform: skewX(20deg) scaleY(cos(20deg));
	}

	.bg-img-container .row .car-btn-icon{
		position: absolute;
		top:45%;
		color: var(--white);
		font-size: 1.5rem;
		font-weight:bolder;
		cursor: pointer;
		width:min-content;
		height:min-content;
		padding:0;
		margin:0;
	}

	.bg-img-container .row .car-btn-icon:first-of-type {
		left:-5%;
	}

	.bg-img-container .row .car-btn-icon:last-of-type {
		right:-5%;
	}

	 /* Extra small devices (phones) */
	@media only screen and (max-width: 768px) {
		.arrows-holder {
            background-color: lightblue;
			width: 85vw;
			transform: skewX(-10deg) scaleY(cos(-10deg));
        }

		.bg-img-container .row div, .car-btn-icon  {
			transform: skewX(10deg) scaleY(cos(10deg));
		}

		.bg-img-container .row .car-btn-icon:first-of-type {
		left:-10%;
	}

	.bg-img-container .row .car-btn-icon:last-of-type {
		right:-10%;
	}
    }

    /* Medium devices (desktops, laptops) */
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .arrows-holder {
            background-color: lightcoral;
			width: 70vw;
        }

		.bg-img-container .row .car-btn-icon:first-of-type {
		left:-10%;
	}

	.bg-img-container .row .car-btn-icon:last-of-type {
		right:-10%;
	}
    }

	.bg-img-container .row div .label,
	.bg-img-container .row div .ww {
		font-weight: bold;
		margin: 0;
	}

	.bg-img-container .row div .label {
		text-transform: uppercase;
		color: var(--black);
		border-bottom: 1px solid var(--black);
		font-size: 2rem;
	}

	.bg-img-container .row div .ww {
		color: var(--primary);
		line-height: normal;
		font-size: 1.3em;
	}

	.bg-img-container .row div .ww span {
		position: relative;
		top: 0.2rem;
		margin: 0 0.5rem;
		font-size: 1.7rem;
	}

	.bg-img-container .row div .desc {
		padding-top: 1rem;
		padding-right: 1rem;
		font-size: 0.8rem;
		display: -webkit-box;
		max-width: 100%;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
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
	}

	.subscribe-banner p {
		color: var(--primary);
	}

	.subscribe-banner form input {
		border: solid 2px var(--black);
	}
</style>

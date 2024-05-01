<script>
	import CustomButton from '$lib/CustomButton.svelte';
	import Article from '$lib/Article.svelte';
	import { tweened } from 'svelte/motion';

	setInterval(() => {
		if ($distance > 0) {
			$distance -= 1000;
		}
	}, 1000);
	$: days = Math.floor($distance / (1000 * 60 * 60 * 24));
	$: hours = Math.floor(($distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: minutes = Math.floor(($distance % (1000 * 60 * 60)) / (1000 * 60));
	$: seconds = Math.floor(($distance % (1000 * 60)) / 1000);

	const closestEvent = {
		label: 'FUSION 27',
		date: 'May 3, 2024 19:00:00',
		place: 'Brno, Zoner BOBYHALL',
		desc: 'Těšit se můžete na osvědčená jména domácí MMA a postojové scény a tradičně vám přineseme i nové talenty. Svoji MMA premiéru mezi profesionály zde bude mít juniorský mistr Evropy a juniorský mistr světa, Tagir Machmudov. Dále se v rámci FUSION talents představí Lukáš Zavičák, Václav Štěpán, Šimon Bruknar, nebo Václav Žemla. Těšit se můžete i na osvědčená jména postojové scény jako Jan Juříček, Erik Breit či hvězdu organizace Oktagon MMA Radka Roušala. Buďte u začátku nových hvězd MMA a pojďte spolu s námi sledovat jejich cestu.',
		ppvLink: 'https://sportlive24.tv/product/nR_2cXvR79WpsDN6ClS7ow',
		ppvPrice: '199',
		tickets: 'https://www.ticketstream.cz/akce/fusion-27-174927'
	};

	const expected = new Date(closestEvent.date).getTime();
	const now = new Date().getTime();
	const distance = tweened(expected - now);

	const dateFormatted = new Date(closestEvent.date).toLocaleDateString('cs-CZ', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric'
	});

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

	/* TODO link */
	const aftermovieLink = '/';
</script>

<div class="bg-img-container">
	<div class="row">
		<div class="col-md-7 col-12">
			<p class="label">{closestEvent.label}</p>
			<p class="ww">{dateFormatted}<span>|</span>{closestEvent.place}</p>
			<p class="desc">{closestEvent.desc}</p>
		</div>
		<div class="col-md-5 col-12">
			<CustomButton path={closestEvent.tickets}>
				<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
			</CustomButton><br />
			<CustomButton path={closestEvent.ppvLink} clr="info">
				<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
			</CustomButton>
		</div>
		<div class="button">
			<CustomButton path="/" clr="black">
				<i class="bi bi-person-badge-fill pe-2"></i>fightcard
			</CustomButton>
		</div>
	</div>
</div>

<div class="content">
	<h1 class="lead">novinky</h1>
	<div class="articles">
		{#each articles as article}
			<Article {...article} />
		{/each}
	</div>
	<div class="banner">
		<div class="button">
			<CustomButton path="/" clr="black">
				<i class="bi bi-play-circle-fill pe-2"></i>pusť si aftermovie
			</CustomButton>
		</div>
	</div>
</div>

<div class="time-banner">
	<span class="countdown">{days}</span>dní
	<span class="countdown">{hours}</span>hod
	<span class="countdown">{minutes}</span>min
	<span class="countdown">{seconds}</span>sek
	<span class="px-2">&nbsp;</span>
	<CustomButton path={closestEvent.ppvLink} clr="white" txtClr="info" display="inline-block">
		<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
		<span slot="tail">jen {closestEvent.ppvPrice} kč</span>
	</CustomButton>
</div>

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

<div class="subscribe-banner">
	<div>
		<p class="lead">nenechte si ujít novinky</p>
		<p>Získáte náskok při předprodeji vstupenek</p>
	</div>
	<form>
		<CustomButton path="/" display="inline-block" fontSize="1.2rem">
			<input slot="head" type="email" placeholder="Váš email" />
			<i class="bi bi-envelope pe-2"></i>přihlásit odběr
		</CustomButton>
	</form>
</div>

<style>
	:root {
		--section-spacer: 2rem;
	}

	.bg-img-container {
		position: relative;
		width: 100vw;
		height: 80vh;
		background-image: url('/imgs/0.jpg');
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
		border-bottom: solid 3px var(--primary-high);
	}

	.bg-img-container .row {
		position: absolute;
		bottom: -15%;

		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;

		width: 70%;
		height: 40%;
		background-color: var(--white);

		border: solid 2px var(--primary);
		border-left: solid 10px var(--primary);

		transform: skewX(-20deg) scaleY(cos(-20deg));
		/* display: inline-flex; */
		padding: 2% 7%;
	}

	.bg-img-container .row div {
		transform: skewX(20deg) scaleY(cos(20deg));
	}

	.bg-img-container .row div .label,
	.bg-img-container .row div .ww {
		font-weight: bold;
		margin: 0;
	}

	.bg-img-container .row div .label {
		width: fit-content;
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
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.bg-img-container .row .button {
		position: absolute;
		bottom: -7%;
		height: fit-content;
		width: fit-content;

		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}

	.content {
		margin: var(--content-side-margin) 10% 0% 10%;
	}

	.content .articles {
		position: relative;
		height: 50vh;
	}

	.content .banner {
		margin-top: var(--section-spacer);
		position: relative;
		width: 100%;
		height: 30vh;
		background-image: url('/imgs/aftermovie/v1.png');
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
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
		background-color: var(--info);
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
		display: inline-flex;
		width: 100%;
		height: 15vh;

		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;

		padding: 0 var(--content-side-margin);
	}

	.subscribe-banner p {
		color: var(--primary);
		margin: 0;
	}

	.subscribe-banner div,
	.subscribe-banner form {
		position: relative;
		height: fit-content;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

	.subscribe-banner form input {
		border: solid 2px var(--black);
	}
</style>

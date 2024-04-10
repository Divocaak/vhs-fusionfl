<script>
	import CustomButton from '$lib/CustomButton.svelte';
	import Article from '$lib/Article.svelte';
	import { tweened } from 'svelte/motion';

	/* TODO rework date format */
	const expected = new Date('Jan 5, 2030 15:37:25').getTime();
	const now = new Date().getTime();
	const distance = tweened(expected - now);

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
		label: 'fusion 26 x ring 10',
		/* TODO rework date format */
		date: '2. 2. 2024',
		place: 'Brno, Zoner BOBYHALL',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Pellentesque pretium lectus id turpis. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	};

	const articles = [
		{
			id: '1',
			label:
				'Spolykala šestačtyřicet ibuprofenů. Počet smrtelných předávkování u mladých strmě roste',
			tags: ['FUSION 26', 'Soutěž']
		},
		{
			id: '2',
			label: 'Okupovaná území Rusku, zbytek do NATO. O „výbušném plánu“ Aliance píší v Itálii',
			tags: ['O tag víc', 'FUSION 26', 'Soutěž']
		},
		{
			id: '3',
			label: 'Hokejový fanoušek nakopl policistu, další hajloval, oba putovali za mříže',
			tags: ['A jeden uberem']
		}
	];
</script>

<div class="bg-img-container">
	<div class="next-event-container">
		<div class="texts">
			<p class="label">{closestEvent.label}</p>
			<p class="ww">{closestEvent.date}<span>|</span>{closestEvent.place}</p>
			<p class="desc">{closestEvent.desc}</p>
		</div>
		<div class="buttons">
			<CustomButton path="/">
				<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
			</CustomButton><br />
			<CustomButton path="/" clr="info">
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
	<!-- TODO spacer -->
	<CustomButton path="/" clr="white" txtClr="info" display="inline-block">
		<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
		<span slot="tail">jen 490 kč</span>
	</CustomButton>
</div>

<div class="partners-banner row">
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
	<div class="col-2"><img src="/logo.jpg" class="img-fluid" alt="partner logo" /></div>
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

	.next-event-container {
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
		display: inline-flex;
		padding: 2% 7%;
	}

	.next-event-container .buttons,
	.next-event-container .texts,
	.next-event-container .button {
		transform: skewX(20deg) scaleY(cos(20deg));
		height: 100%;
	}

	.next-event-container .texts {
		width: 60%;
	}

	/* TODO */
	.next-event-container .buttons {
		background-color: blue;
		width: 40%;
	}

	.next-event-container .texts .label,
	.next-event-container .texts .ww {
		font-weight: bold;
		margin: 0;
	}

	.next-event-container .texts .label {
		width: fit-content;
		text-transform: uppercase;
		color: var(--black);
		border-bottom: 1px solid var(--black);
		font-size: 2rem;
	}

	.next-event-container .texts .ww {
		color: var(--primary);
		line-height: normal;
		font-size: 1.3em;
	}

	.next-event-container .texts .ww span {
		position: relative;
		top: 0.2rem;
		margin: 0 0.5rem;
		font-size: 1.7rem;
	}

	.next-event-container .texts .desc {
		padding-top: 1rem;
		padding-right: 1rem;
		font-size: 0.8rem;
		display: -webkit-box;
		max-width: 100%;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* TODO */
	.next-event-container .button {
		position: absolute;
		top: 93%;
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
		background-image: url('/imgs/4.jpg');
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* TODO center */
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
		background-color: var(--grey);
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

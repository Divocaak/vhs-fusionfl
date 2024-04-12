<script>
	import CustomButton from '$lib/CustomButton.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
	/>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
		crossorigin="anonymous"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
		crossorigin="anonymous"
	></script>

	<meta charset="windows-1250" />
	<meta name="author" content="Vojtěch Divoký" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<nav class="navbar navbar-expand-lg sticky-top bg-light">
	<a class="navbar-brand ps-5 d-flex align-items-center" href="/">
		<img
			src="/logo.jpg"
			width="40"
			height="40"
			class="d-inline-block align-top me-3"
			alt="logo"
			loading="lazy"
		/>
	</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarNavAltMarkup"
		aria-controls="navbarNavAltMarkup"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="pe-5 navbar-nav ms-auto">
			<a class="nav-item nav-link text-uppercase fw-bold pe-5" href="/">turnaje</a>
			<a class="nav-item nav-link text-uppercase fw-bold pe-5" href="/">aktuality</a>
			<a class="nav-item nav-link text-uppercase fw-bold pe-5" href="/">merch</a>
			<CustomButton path="/" fontSize="initial">
				<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
			</CustomButton>
		</div>
	</div>
</nav>
<slot />
<footer>
	<div class="row">
		<div class="col-6 about">
			<img src="/logo.jpg" alt="logo" />
			<p>
				FUSION FIGHT LEAGUE<br />
				galavečery bojových sportů.<br />
				Muay thai, MMA, box a jedinečné<br />
				FUSION rules
			</p>
		</div>
		<!-- <div class="col-4 navigation">
			<p class="clmn">rychlé<br />odkazy</p>
			<ul class="clmn">
				<li><a href="/">vstupenky</a></li>
				<li><a href="/">turnaje</a></li>
				<li><a href="/">naši bojovníci</a></li>
				<li><a href="/">novinky</a></li>
				<li><a href="/">organizace</a></li>
			</ul>
			<ul class="clmn">
				<li><a href="/">home</a></li>
				<li><a href="/">galerie</a></li>
				<li><a href="/">kontakt</a></li>
			</ul>
		</div>
		<div class="col-2 socials"> -->
		<div class="col-6 socials">
			<a href="/"><i class="bi bi-instagram"></i></a>
			<a href="/"><i class="bi bi-facebook"></i></a>
			<a href="/"><i class="bi bi-youtube"></i></a>
			<p>FusionFightLeagueCZ</p>
		</div>
	</div>
	<p id="settings">
		<span>FIGHT PROMO s.r.o.</span>&nbsp;<a href="/">Ochrana osobních údajů</a>&nbsp;|&nbsp;<a
			href="/">Správa nastavení soukromí</a
		>
	</p>
	<p id="copyright">&copy; Copyright FIGHT PROMO s.r.o., All Rights Reserved.</p>
</footer>

<style lang="scss">
	:root {
		--black: black;
		--white: white;
		--primary: #cd920c;
		--primary-high: #c5ae6a;
		--info: #288ed8;
		--grey: #eeeeee;
		--content-side-margin: 12%;
	}

	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	:global(body) {
		background: var(--white);
	}

	:global(.lead) {
		color: var(--black) !important;
		text-transform: uppercase !important;
		font-style: oblique !important;
		font-weight: bold !important;
		font-size: 2rem !important;
	}

	nav {
		border-bottom: 3px solid var(--primary);
	}

	.nav-item {
		color: var(--black);
	}

	footer {
		display: block;
		width: 100%;
		/* height: fit-content; */
		background-color: var(--black);
		color: var(--white);
		padding-top: 2rem;
	}

	footer div.row {
		margin: 0 var(--content-side-margin);
	}

	footer .about {
		line-height: 1rem;
	}

	footer .about img {
		width: 20%;
	}

	/* footer .navigation .clmn {
		float: inline-start;
	}

	footer .navigation p {
		position: relative;
		top: 7px;
		text-transform: uppercase;
		font-weight: bold;
		line-height: 0.8rem;
		letter-spacing: -1px;
	}

	footer .navigation li {
		list-style-type: '> ';
	} */

	/* NOTE hover */
	/* footer .navigation a {
		position: relative;
		top: 1px;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--white);
	} */

	footer .socials a {
		color: var(--white);
		font-size: 2rem;
	}

	footer .socials p {
		color: var(--primary);
	}

	footer #settings {
		margin: 1rem var(--content-side-margin);
	}

	footer #settings span {
		color: var(--primary);
	}

	footer #settings a {
		text-decoration: none;
		color: var(--white);
	}

	footer #copyright {
		display: block;
		text-align: center;
		border-top: 1px solid var(--grey);
		margin: 0;
		padding: 0.5rem 0;
	}

	a {
		color: green;
		transition: all 0.2s ease-in-out;
	}

	a:hover {
		color: var(--primary) !important;
	}
</style>

<script>
	import CustomButton from '../lib/CustomButton.svelte';
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
			<CustomButton path="/"><i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku</CustomButton>
		</div>
	</div>
</nav>
<slot />

<style lang="scss">
	:root {
		--black: black;
		--white: white;
        --primary: #cd920c;
	}

	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	nav {
		border-bottom: 3px solid var(--primary);
	}

    .nav-item{
        color: var(--black);
    }
</style>

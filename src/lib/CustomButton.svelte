<script>
	export let path;
	export let isInfo = false;
</script>

<a href={path} style="background-color: var(--{isInfo ? "info" : "primary"})"><slot /></a>

<style>
	a {
		color: var(--white);
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		padding: 2px 10px;
		margin: 5px;
		position: relative;
		font-style: oblique;
	}

	/* TODO hover anim */
	a:hover {
	}
</style>

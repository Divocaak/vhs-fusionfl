<script>
	export let path;
</script>

<a href={path}><slot /></a>

<style>
	a {
		background-color: var(--primary);
		color: var(--white);
		font-weight: bold;
		text-transform: uppercase;
        text-decoration: none;
        padding: 2px 10px;
        margin: 5px;
        position: relative;
        display: block;
        font-style: oblique;
	}
</style>

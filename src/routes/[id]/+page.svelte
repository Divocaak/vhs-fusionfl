<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Heading from '$lib/md/Heading.svelte';

	export let data;
</script>

<div class="img" style="background-image: url('/imgs/article_imgs/{data.id}.jpg');"></div>
<article>
	<SvelteMarkdown source={data.md} renderers={{heading: Heading}}/>
</article>

<style>

	.img {
		position: relative;
		width: 100%;
		height: 70vh;
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
	}

	article {
		margin: calc(var(--content-side-margin) / 3) var(--content-side-margin);
	}
</style>

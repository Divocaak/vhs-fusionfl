<script>
	import ArticleTag from '$lib/ArticleTag.svelte';

	export let id;
	export let label;
	export let tags = [];
</script>

<div class="col-12 col-sm-4">
	<div class="bg-img" style="background-image: url('/imgs/article_imgs/{id}.jpg');"></div>
	<div class="content mb-5 mb-md-0">
		<p>{label}</p>
		{#each tags as tag}
			<ArticleTag label={tag} />
		{/each}
		<a href="/{id}" class="hvr-icon-forward">
			Čtěte více<i class="bi bi-arrow-right ps-2 hvr-icon"></i>
		</a>
	</div>
</div>

<style>
	.bg-img {
		position: relative;
		aspect-ratio: 16 / 9;
		background-position: 0;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.content p {
		color: var(--black);
		font-weight: bold;
		font-size: 1.2rem;
	}

	.content a {
		color: var(--black);
		text-decoration: none;
		display: block;
		margin-top: 1.5rem;
	}

	/* BUG hover */
	.hvr-icon-forward {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.1s;
		transition-duration: 0.1s;
	}
	.hvr-icon-forward .hvr-icon {
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-transition-duration: 0.1s;
		transition-duration: 0.1s;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}
	.hvr-icon-forward:hover .hvr-icon,
	.hvr-icon-forward:focus .hvr-icon,
	.hvr-icon-forward:active .hvr-icon {
		-webkit-transform: translateX(4px);
		transform: translateX(4px);
	}
</style>

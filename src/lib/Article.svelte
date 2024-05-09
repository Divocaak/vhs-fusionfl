<script>
	import { goto } from '$app/navigation';
	import ArticleTag from '$lib/ArticleTag.svelte';

	export let id;
	export let label;
	export let tags = [];
</script>

<div class="col-12 col-sm-4 hvr-grow-shadow" on:click={() => goto(`/article/${id}`)}>
	<div class="bg-img" style="background-image: url('/imgs/article_imgs/{id}.jpg');"></div>
	<div class="content mb-5 mb-md-0 p-3">
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
		aspect-ratio: 16 / 9;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
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

	.hvr-grow-shadow {
		cursor:pointer;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: box-shadow, transform;
		transition-property: box-shadow, transform;
		background-color:white;
		padding-bottom: 20px;
}
	.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
		z-index:10;
		box-shadow: 0 0 100px 0px rgba(0, 0, 0, 0.5);
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

</style>

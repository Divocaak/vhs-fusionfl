<script>
	import ArticleTag from '$lib/ArticleTag.svelte';

	export let id;
	export let label;
	export let tags = [];
</script>

<div class="article-wrapper">
	<div class="bg-img" style="background-image: url('/imgs/{id}.jpg');"></div>
	<div class="content">
		<p class="lead">{label}</p>
		{#each tags as tag}
			<ArticleTag label={tag} />
		{/each}
        <a href="/">Čtěte více<i class="bi bi-arrow-right ps-2"></i></a>
	</div>
</div>

<style>
	.article-wrapper {
		position: relative;
		width: calc(100% / 3);
		height: 50vh;
		float: inline-start;
		padding: 0 1%;
	}

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
	}

    .content a{
        color: var(--black);
        text-decoration: none;
        display: block;
        margin-top: 1.5rem;
    }

    /* TODO hover */
    .content a i{
        position: relative;
        top: .1rem;
    }
</style>

<script>
	import CustomButton from '$lib/CustomButton.svelte';

	const closestEvent = {
		label: 'fusion 26 x ring 10',
		date: '2. 2. 2024',
		place: 'Brno, Zoner BOBYHALL',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Pellentesque pretium lectus id turpis. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
	};
</script>

<div class="bg-img-container">
	<div class="next-event-container">
		<div class="row">
			<div class="col-6">asd</div>
			<div class="col-6">
				<CustomButton path="/">
					<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
				</CustomButton>
				<CustomButton path="/" isInfo={true}>
					<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
				</CustomButton>
			</div>
		</div>
	</div>
</div>

<style>
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
		bottom: 0;
		left: 20%;
		width: 50%;
		height: 30%;
		background-color: var(--white);
		border: solid 2px var(--primary);
		border-left: solid 10px var(--primary);
		transform: skewX(-20deg) scaleY(cos(-20deg));
	}

	.next-event-container .row {
		transform: skewX(20deg) scaleY(cos(20deg));
		background: red;
		margin: 0px 20px;
	}
</style>

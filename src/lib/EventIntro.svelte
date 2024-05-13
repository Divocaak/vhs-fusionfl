<script>
    import CustomButton from '$lib/CustomButton.svelte';

    export let event;
    export let isDetail = false;

    const dateFormatted = new Date(event.date).toLocaleDateString('cs-CZ', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric'
	});

    // TODO dynamic
    const eventIsPast = false;
</script>

<div class="landing-panel">
	<div class="bg-img-container" style="background-image: url('/imgs/events/{event.id}.jpg');">
			<div class="arrows-holder">
				<div class="row">
					<div class="col-md-6 col-12 text-center">
						<p class="label">{event.label}</p>
						<p class="ww">{dateFormatted}<span>|</span>{event.place}</p>
						{#if !isDetail}<p class="desc">{event.desc}</p>{/if}
					</div>
					<div class="col-md-6 col-12 my-auto">
						{#if event.tickets != null}
						<CustomButton path={event.tickets} display="block">
							<i class="bi bi-ticket-perforated pe-2"></i>koupit vstupenku
						</CustomButton>
						{/if}
						{#if event.ppvLink != null}
						<CustomButton path={event.ppvLink} clr="info" display="block"  additionalClasses="my-2">
							<i class="bi bi-play-circle-fill pe-2"></i>koupit živý přenos
						</CustomButton>
						{/if}
						{#if !isDetail}<CustomButton path="/event/{event.id}#fightcard" clr="black" display="block">
							{#if eventIsPast}
							<i class="bi bi-eye-fill pe-2"></i>report
							{:else}
							<i class="bi bi-person-badge-fill pe-2"></i>fightcard
							{/if}
						</CustomButton>
                        {/if}
					</div>
					<!-- <i class="car-btn-icon bi bi-arrow-left"></i>
					<i class="car-btn-icon bi bi-arrow-right"></i> -->
				</div>
			</div>
	</div>
</div>

<style>
.landing-panel {
    margin: 0;
    padding: 0;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}


.bg-img-container {
    position: relative;
    width: 100vw;
    height: 80vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: solid 3px var(--primary-high);
}

.past{
    filter: saturate(0%);
}

.arrows-holder{
    position: absolute;
    bottom: -15%;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    width: 60vw;
    background-color:var(--primary);

    padding: 2px 60px;
    transform: skewX(-20deg) scaleY(cos(-20deg));
    filter: unset !important;
}

.bg-img-container .row {
    position:relative;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    margin:0;
    
    padding: 2% 3%;

    box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.75);
}

.bg-img-container .row div, .car-btn-icon {
    transform: skewX(20deg) scaleY(cos(20deg));
}

.bg-img-container .row .car-btn-icon{
    position: absolute;
    top:45%;
    color: var(--white);
    font-size: 1.5rem;
    font-weight:bolder;
    cursor: pointer;
    width:min-content;
    height:min-content;
    padding:0;
    margin:0;
}

.bg-img-container .row .car-btn-icon:first-of-type {
    left:-5%;
}

.bg-img-container .row .car-btn-icon:last-of-type {
    right:-5%;
}

 /* Extra small devices (phones) */
@media only screen and (max-width: 768px) {
    .arrows-holder {
        background-color: lightblue;
        width: 85vw;
        transform: skewX(-10deg) scaleY(cos(-10deg));
    }

    .bg-img-container .row div, .car-btn-icon  {
        transform: skewX(10deg) scaleY(cos(10deg));
    }

    .bg-img-container .row .car-btn-icon:first-of-type {
    left:-10%;
}

.bg-img-container .row .car-btn-icon:last-of-type {
    right:-10%;
}
}

/* Medium devices (desktops, laptops) */
@media only screen and (min-width: 768px) and (max-width: 992px) {
    .arrows-holder {
        background-color: lightcoral;
        width: 70vw;
    }

    .bg-img-container .row .car-btn-icon:first-of-type {
    left:-10%;
}

.bg-img-container .row .car-btn-icon:last-of-type {
    right:-10%;
}
}

.bg-img-container .row div .label,
.bg-img-container .row div .ww {
    font-weight: bold;
    margin: 0;
}

.bg-img-container .row div .label {
    text-transform: uppercase;
    color: var(--black);
    border-bottom: 1px solid var(--black);
    font-size: 2rem;
}

.bg-img-container .row div .ww {
    color: var(--primary);
    line-height: normal;
    font-size: 1.3em;
}

.bg-img-container .row div .ww span {
    position: relative;
    top: 0.2rem;
    margin: 0 0.5rem;
    font-size: 1.7rem;
}

.bg-img-container .row div .desc {
    padding-top: 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
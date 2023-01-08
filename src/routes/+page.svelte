<script>
	import HeroTitle from '../components/atoms/HeroTitle.svelte';
	import SocialsHost from '../components/molecules/SocialsHost.svelte';
	import Hero from '../components/molecules/Hero.svelte';
	import RichPresence from '../components/molecules/RichPresence.svelte';
</script>

<div class="center">
	<div class="wrapper">
		<Hero />
		<div class="introduction-container">
			<HeroTitle />
			<span class="introduction">
				Hi! Just someone who likes tinkering with random stuff. Currently I don't make things, but
				I'm hoping to change that soon :)
			</span>
			<div class="social-buttons">
				<SocialsHost />
			</div>
			<RichPresence />
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: -webkit-fill-available;
		min-height: -moz-available;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #0f1515;
	}

	:global(html) {
		height: -webkit-fill-available;
		height: -moz-available;
	}

	:root {
		--white: #d1d0d0;
		--pinky: #595f75;
		--dark-pinky: #0f1515;
		--font-one: 'Space Grotesk', sans-serif;
		--font-two: 'JetBrains Mono', monospace;
	}

	.wrapper {
		display: flex;
		max-width: 100vw;
		height: 100%;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.introduction-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		color: var(--pinky);
		font-family: var(--font-one);
	}

	.introduction-container .introduction {
		color: var(--white);
		font-size: 1.3rem;
		font-weight: 300;
	}

	@media (max-width: 868px) {
		.wrapper {
			flex-direction: column;
			gap: 2rem;
			width: min(90%, 65rem) !important;
		}

		.introduction-container {
			align-items: center;
			font-family: var(--font-one);
			font-size: 6px;
		}

		.introduction-container .introduction {
			text-align: center;
			font-size: 16px;
			padding-right: 0;
			width: 90%;
		}

		.social-buttons {
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 1rem;
			align-items: center;
		}
	}
</style>

<script>
	import HeroTitle from '../components/atoms/HeroTitle.svelte';
	import RichPresence from '../components/molecules/RichPresence.svelte';
	import SocialsHost from '../components/molecules/SocialsHost.svelte';
	import Hero from '../components/molecules/Hero.svelte';
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
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		background-color: #1a171e;
	}
	:root {
		--white: #d1d0d0;
		--pinky: #d7b3fa;
		--dark-pinky: #4b2d68;
		--font-one: 'Space Grotesk', sans-serif;
		--font-two: 'JetBrains Mono', monospace;
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5rem;
		max-width: 100vw;
		height: 100%;
		width: min(90%, 65rem) !important;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.introduction-container {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-direction: column;
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
		}
		.introduction-container {
			justify-content: center;
			align-items: center;
			text-align: center;
			font-family: var(--font-one);
			font-size: 6px;

		}
		.introduction-container .introduction {
			font-family: var(--font-one);
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

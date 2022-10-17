<script>

	import HeroTitle from '../components/atoms/HeroTitle.svelte';
	import RichPresence from '../components/molecules/RichPresence.svelte';
	import SocialsHost from '../components/molecules/SocialsHost.svelte';
	import Hero from '../components/molecules/Hero.svelte';
</script>

<div class="wrapper">
	<Hero />
	<div class="introduction-container">
		<HeroTitle />
		<span class="introduction">
			Hey! I'm Ushie, someone who likes tinkering with random stuff, currently I don't make things,
			but I'm hoping to change that soon :)
		</span>
		<div class="social-buttons">
			<SocialsHost />
		</div>
		<RichPresence />
	</div>
</div>

<style>
	:global(body) {
		background-color: #1a171e;
	}
	:root {
		--white: #e8e8e8;
		--pinky: #d7b3fa;
		--dark-pinky: #4b2d68;
		--font-one: 'Space Grotesk', sans-serif;
		--font-two: 'JetBrains Mono', mono space;
	}
	.wrapper {
		display: flex;
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	.introduction-container {
		display: flex;
		flex-direction: column;
		margin-top: 8rem;
		width: 100%;
		padding-right: 10rem;

		color: var(--pinky);
		font-family: var(--font-one);
	}
	.introduction-container .introduction {
		color: var(--white);
		font-size: 1.7rem;
		text-transform: lowercase;
	}


	@media (max-width: 768px) {
		.wrapper {
			flex-direction: column;
		}
		.introduction-container {
			justify-content: center;
			align-items: center;
			margin-top: 2rem;
			font-family: var(--font-one);
			font-size: 6px;
			width: 100%;
			margin-right: 2rem;
			text-align: center;
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

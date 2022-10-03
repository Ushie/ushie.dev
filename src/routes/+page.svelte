<script>
	import HeroImage from '../components/atoms/HeroImage.svelte';
	import HeroTitle from '../components/atoms/HeroTitle.svelte';
	import RichPresence from '../components/molecules/RichPresence.svelte';
	import SocialItem from '../components/atoms/SocialItem.svelte';
	import SocialsHost from '../components/molecules/SocialsHost.svelte';
</script>

<div class="wrapper">
	<div class="logo-container">
		<HeroImage />
		<span class="hero-title-mobile"><strong>hey, i'm ushie</strong></span>
	</div>
	<div class="introduction-container">
		<span class="hero-title"><strong>hey, i'm ushie</strong></span>
		<span class="introduction">
			Hey! I'm Ushie, someone who likes tinkering with random stuff, currently I don't make things,
			but I'm hoping to change that soon :)
		</span>
		<div class="social-buttons">
			<SocialsHost />
		</div>
		<div class="rich-presence">
			<div class="rich-presence-wrapper">
				<RichPresence />
			</div>
		</div>
	</div>
	<!--
	<HeroTitle />
	HeroTitle
	<SocialsHost />
	SocialsHost
	<RichPresence />
	RichPresence //-->
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
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 9rem;
		width: 100%;
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
	.introduction-container .hero-title {
		color: var(--pinky);
		font-size: 7rem;
	}
	.introduction-container .introduction {
		color: var(--white);
		font-size: 1.7rem;
		text-transform: lowercase;
	}
	.social-buttons {
		margin-top: 2rem;
		padding-top: 1rem;
		width: 100%;
	}
	.rich-presence {
		width: 64vh;
		background-color: var(--pinky);
		color: var(--dark-pinky);
		font-family: var(--font-two);
		border-radius: 3.6vh;
		margin-top: 2.7rem;
		display: flex;
		padding-left: 3rem;
		padding-right: 3rem;
	}
	.rich-presence-wrapper {
		display: flex;
		padding-top: 3rem;
		padding-bottom: 3rem;
		gap: 3rem;
		height: fit-content;
	}

	@media (max-width: 768px) {
		.wrapper {
			flex-direction: column;
		}
		.logo-container {
			margin-left: 0;
			margin-top: 3rem;
			gap: 20px;
			padding-left: 1rem;
			padding-right: 1rem;
			justify-content: space-between;
			font-family: var(--font-one);
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
		.rich-presence {
			width: 80%;
			padding: 1rem;
		}
		.rich-presence-wrapper {
			padding-top: 1rem;
			padding-bottom: 1rem;
			text-align: left;
		}
		.hero-title {
			display: none;
		}
		.hero-title-mobile {
			display: block;
			color: var(--pinky);
			font-size: 3rem;
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

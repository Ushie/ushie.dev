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
	</div>
	<div class="introduction-container">
		<span class="hero-title">hey, i'm ushie</span>
		<span class="introduction">
			Hey! I'm Ushie, someone who likes tinkering with random stuff, currently I don't make things,
			but I'm hoping to change that soon :)
		</span>
		<div class="social-buttons">
			<SocialsHost />
		</div>
		<div class="rich-presence">
			<div class="icon-container">
				<div class="icon-wrapper">
					<img
						src="https://cdn.discordapp.com/app-assets/383226320970055681/603581316352442376.webp?size=512"
						class="icon"
						alt=""
					/>
					<div class="child-icon-container">
						<img
							src="https://cdn.discordapp.com/app-assets/383226320970055681/565945770067623946.webp?size=512"
							class="icon-small"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="text-container">
				<span class="rpc-title">Visual Studio Code</span>
				<span>Editing +page.svelte</span>
				<span>Workspace: ushiekane.dev-svelte</span>
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
		height: 100%;
		display: flex;
	}
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
	}
	.introduction-container {
		display: flex;
		flex-direction: column;
		margin-top: 8rem;
		height: 100vh;
		width: 100%;
		text-align: left;
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
		width: 35rem;
		height: 15rem;
		background-color: var(--pinky);
		color: var(--dark-pinky);
		font-family: var(--font-two);
		border-radius: 2rem;
		margin-top: 2.7rem;
		display: flex;
		padding-left: 3rem;
		padding-right: 3rem;
	}
	.icon {
		border-radius: 20%;
		-webkit-box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		height: 10rem;
	}
	.icon-small {
		height: 2rem;
		border-radius: 50%;
		-webkit-box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		height: 3rem;
	}
	.icon-container {
		align-items: center;
		justify-content: center;
		display: flex;
	}
	.child-icon-container {
		position: absolute;
		bottom: -10px;
		right: -10px;
	}
	.icon-wrapper {
		position: relative;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem 0 0 2rem;
	}
	.text-container .rpc-title {
		font-size: 2rem;
		font-weight: bold;
	}
</style>

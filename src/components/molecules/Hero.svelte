<script>
	// import { onMount } from 'svelte';
	// import LanyardData from '../../stores/LanyardStore';
	import HeroImage from '../atoms/HeroImage.svelte';

	// let avatar_id, avatar = "https://github.com/ushie.png";
	// onMount (() => {
	//     LanyardData.subscribe(async (e) => {
	//         let data = await e;
	//         avatar_id = data.data.discord_user.avatar;
	//         avatar = "https://cdn.discordapp.com/avatars/399862294143696897/" + avatar_id + ".png?size=2048";
	//     });
	// });
</script>

<div class="logo-container">
	<HeroImage />
	<span class="hero-title-mobile">hey, i'm <strong>ushie</strong></span>
</div>

<style>
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.hero-title-mobile {
		display: none;
	}
	@media (max-width: 868px) {
		.logo-container {
			margin-left: 0;
			gap: 1.25rem;
			padding-left: 1rem;
			font-family: var(--font-one);
			width: 100%;
		}
		.hero-title-mobile {
			display: inline-block;
			color: var(--primary);
			font-size: clamp(2.5rem, 8vw, 5rem);
		}
	}
</style>

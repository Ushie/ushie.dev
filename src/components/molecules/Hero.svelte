<script>
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';
	import HeroImage from '../atoms/HeroImage.svelte';

	let avatar_id, avatar = "https://github.com/ushie.png";
	onMount (() => {
        LanyardData.subscribe(async (e) => {
            let data = await e;
            avatar_id = data.data.discord_user.avatar;
            avatar = "https://cdn.discordapp.com/avatars/399862294143696897/" + avatar_id + ".png?size=2048";
        });
    });
</script>

<div class="logo-container">
	<HeroImage avatar = "{avatar}" />
	<span class="hero-title-mobile">hey, i'm <strong>ushie</strong></span>
</div>

<style>
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hero-title-mobile {
		display: none;
	}
	@media (max-width: 868px) {
		.logo-container {
			margin-left: 0;
			margin-top: 3rem;
			gap: 20px;
			padding-left: 1rem;
			padding-right: 1rem;
			display: flex;
			flex-direction: column;
			text-align: center	;
			font-family: var(--font-one);
		}
		.hero-title-mobile {
			display: inline-block;
			color: var(--pinky);
			font-size:clamp(3rem, 8vw, 5rem); 
		}
	}
</style>

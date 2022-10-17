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
		margin-top: 9rem;
		width: 100%;
	}
	.hero-title-mobile {
		display: none;
	}
	@media (max-width: 768px) {
		.logo-container {
			margin-left: 0;
			margin-top: 3rem;
			gap: 20px;
			padding-left: 1rem;
			padding-right: 1rem;
			justify-content: space-between;
			font-family: var(--font-one);
		}
		.hero-title-mobile {
			display: block;
			color: var(--pinky);
			font-size: 3rem;
		}
	}
</style>

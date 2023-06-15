<script>
	// import { onMount } from 'svelte';
	// import LanyardData from '../../stores/LanyardStore';
	import HeroImage from '../atoms/HeroImage.svelte';

	let globalName = 'ushie';

	onMount(() => {
		LanyardData.subscribe(async (e) => {
			let data = await e;
			globalName = data.data.discord_user.global_name;
		});
	});
</script>

<div class="logo-container">
	<HeroImage />
	<span class="hero-title-mobile">hey, i'm <strong>{globalName.toLowerCase()}</strong></span>
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

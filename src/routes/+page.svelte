<script>
	import HeroImage from "../lib/components/atoms/HeroImage.svelte";
	import HeroTitle from "../lib/components/atoms/HeroTitle.svelte";
import RichPresence from "../lib/components/molecules/RichPresence.svelte";
	import SocialsHost from "../lib/components/molecules/SocialsHost.svelte"
</script>

<div class="wrapper">
	<HeroImage />
	<HeroTitle />
	<SocialsHost />
	<RichPresence />
</div>

<style>
	:global(body) {
		background-color: #1a171e;
	}
	:global(*) {
        user-select: none;
	}
	:root {
		--pinky: #D7B3FA;
		--dark-pinky: #4B2D68;
		--font-one: 'Space Grotesk', sans-serif;
		--font-two: 'JetBrains Mono', mono space;
	}
</style>
<script>
	// hi ush

	import RichPresenceImages from '../atoms/RichPresenceImages.svelte';
	import RichPresenceText from '../atoms/RichPresenceText.svelte';
</script>

<div>
	<RichPresenceImages />
	<RichPresenceText />
</div>

<style>
	div {
        width: 25rem;
        height: 10rem;
        background-color: var(--pinky);
        color: var(--dark-pinky);
        font-family: var(--font-two);
        font-size: 16px;
        display: flex;
        border-radius: 1rem;
        flex-direction: row;
	}
</style>

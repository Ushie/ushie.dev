<script>
    import RichPresenceImages from '../atoms/RichPresenceImages.svelte';
    import RichPresenceText from '../atoms/RichPresenceText.svelte';
</script>

<div>
    <RichPresenceImages />
    <RichPresenceText />
</div>

<style>
    div {
        width: 55rem;
        height: 15rem;
        background-color: var(--pinky);
        color: var(--dark-pinky);
	font-family: var(--font-two);
	border-radius: 40px;
	margin-top: 2rem;
    }
</style>

<script>
	export let href = '#';
	export let label = 'github';
	export let style = '';
</script>

<a {href}>
	<div {style} class="container">
		<slot />
		<h3>{label}</h3>
	</div>
</a>

<style>
	.container {
		width: 9rem;
		height: 4rem;
		gap: 0.5rem;
		background-color: var(--pinky);
		border-radius: 1rem;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--dark-pinky);
	}

	h3 {
		color: var(--dark-pinky);
		font-family: var(--font-two);
		font-size: 1rem;
	}
</style>

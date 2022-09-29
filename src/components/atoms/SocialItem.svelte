<script>
	export let href = '#';
	export let icon = 'github';
	export let label = 'github';
	export let style = '';
</script>

<a href="{href}">
	<div style="{style}">
		<img src="socials/{icon}.svg" alt="" class="hhh">
		<h3>{label}</h3>
	</div>
</a>

<style>
	div {
		width: 9rem;
		height: 4rem;
		background-color: var(--pinky);
		border-radius: 1rem;
		float: left;
		/*display: flex;*/
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}

	img {
		width: 2rem;
		height: 2rem;
		margin-right: 0.75rem;
	}

	h3 {
		font-family: var(--font-two);
		font-size:1rem;
	}
</style>
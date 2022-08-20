<script>
	export let href = '#';
	export let icon = 'github';
	export let label = 'github';
</script>

<a href="{href}">
	<div>
		<img src="socials/{icon}.svg" alt="" class="hhh">
		<h3>{label}</h3>
	</div>
</a>

<style>
	div {
		width: 7rem;
		height: 3rem;
		background-color: var(--pinky);
		border-radius: 1rem;
		margin-left: 10px;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 1.3rem;
		height: 1.3rem;
		margin-right: 0.75rem;
	}

	h3 {
		font-size:1rem;
	}
</style>
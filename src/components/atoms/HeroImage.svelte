<script>
	export let avatar = 'https://github.com/Ushie.png';
</script>

<img src={avatar} class="logo" alt="" draggable="false" />

<style>
	img {
		border-radius: 64px;
		width: 450px;
		height: auto;
	}

	@media (max-width: 868px) {
		img {
			max-width: 40%;
			border-radius: 20%;
			display: flex;
			flex-direction: row;
		}
	}
</style>

<script>
    export let avatar = "https://github.com/Ushie.png";
</script>

<img
	src="{avatar}"
	class="logo"
	alt=""
	draggable="false"
/>

<style>
	img {
		border-radius: 90px;
		width: 660px;
		height: auto;
	}

	@media (max-width: 768px) {
		img {
			max-width: 40%;
			border-radius: 20%;
			display: flex;
			flex-direction: row;
		}
	}
</style>

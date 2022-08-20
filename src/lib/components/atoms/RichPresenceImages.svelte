<script>
	import { onMount } from 'svelte';

	let app_id, small_image, large_image, small_icon, large_icon, small_image_text, large_image_text;

	onMount(async () => {
		const json = await fetch('https://api.lanyard.rest/v1/users/399862294143696897').then((res) =>
			res.json()
		);
		const data = json.data.activities[1];

		app_id = data.application_id;
		small_image = data.assets.small_image;
		small_image_text = data.assets.small_text;
		large_image_text = data.assets.large_text;
		large_image = data.assets.large_image;
		large_icon = `https://cdn.discordapp.com/app-assets/${app_id}/${large_image}.webp`;
	});
</script>

<div>
	<img src={large_icon} alt="" data-="" />
</div>

<style>
	div {
		margin-left: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
        border-radius: 1.5rem;
	}
</style>

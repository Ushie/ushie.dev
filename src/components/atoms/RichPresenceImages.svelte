<script>
	import { onMount } from 'svelte';

	let app_id,
		img_small,
		img_large;

	onMount(async () => {
		const json = await fetch('https://api.lanyard.rest/v1/users/399862294143696897').then((res) =>
			res.json()
		);
		const data = json.parse(message.data);
		console.log(data);
		if (data.op !== 0) return;
		if (data.d.activities.length === 0) return;
		const activity = data.d.activities.find((x) => x.type === 0);
		app_id = activity.application_id;
		img_small = activity.assets.small_image;
		img_large = activity.assets.large_image;
		txt_small = activity.assets.small_text;
		txt_large = activity.assets.large_text;
		started = activity.timestamps.start;
		state = activity.state;
		details = activity.details;
		name = activity.name;

		// Spotify
		isSpotify = data.d.listening_to_spotify;
		spotify_album_cover = data.spotify.album_art_url;
	});
</script>

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else}
	{#if 5 > x}
		<p>{x} is less than 5</p>
	{:else}
		<p>{x} is between 5 and 10</p>
	{/if}
{/if}

<div class="icon-container">
	<div class="icon-wrapper">
		<img
			{#if img_large} {/if}
				: 'https://media.discordapp.net/attachments/1020062996711608491/1024387600846422086/unknown.png?width=676&height=676'}
			class="icon"
			alt=""
			draggable="false"
		/>
		<div class="child-icon-container">
			<img
				src="https://cdn.discordapp.com/app-assets/{app_id}/{img_small}.webp?size=512"
				class="icon-small"
				alt=""
				draggable="false"
			/>
		</div>
	</div>
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

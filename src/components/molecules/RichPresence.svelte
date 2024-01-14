<script>
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';

	let globalName = 'Loading...',
		userName = 'Loading...',
		activityName,
		activityDetails,
		activityState,
		isSpotify,
		albumArtURL,
		largeImage,
		smallImage,
		appId,
		artistName,
		songName,
		albumName,
		trackId,
		started,
		spotifyStarted,
		timestamp,
		status,
		avatarId;

	// helper function to add leading zeros
	const pad = (number) => {
		let s = String(number);
		while (s.length < 2) {
			s = '0' + s;
		}
		return s;
	};
	const calculateElapsedTime = () => {
		let elapsed = isSpotify ? Date.now() - spotifyStarted : Date.now() - started;
		let seconds = Math.floor((elapsed / 1000) % 60);
		let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
		let hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

		timestamp = `${hours > 0 ? pad(hours) + ':' : ''}${pad(minutes)}:${pad(seconds)} elapsed`;
	};

	onMount(() => {
		LanyardData.subscribe(async (e) => {
			let data = await e;
			globalName = data.data.discord_user.global_name;
			userName = data.data.discord_user.username;
			status = data.data.discord_status;
			activityName = data.data.activities[0]?.name;
			activityDetails = data.data.activities[0]?.details;
			activityState = data.data.activities[0]?.state;
			avatarId = data.data.discord_user.avatar;
			console.log(avatarId);
			const activity = data.data.activities.find((x) => x.type === 0);
			appId = activity?.application_id;
			smallImage = activity?.assets.small_image;
			largeImage = activity?.assets.large_image;
			started = activity?.timestamps.start;

			// Spotify
			let spotify = data.data.spotify;
			isSpotify = data.data.listening_to_spotify;
			albumArtURL = spotify?.album_art_url;
			artistName = spotify?.artist;
			songName = spotify?.song;
			albumName = spotify?.album;
			trackId = spotify?.track_id;
			spotifyStarted = spotify?.timestamps.start;
		});
	});
	setInterval(() => calculateElapsedTime(), 1000);
</script>

<div class="rich-presence-card">
	<div class="wrapper">
		<div class="user">
			<img
				src="https://cdn.discordapp.com/avatars/399862294143696897/{avatarId}?size=512"
				alt=""
				class="avatar {status}"
			/>
			<span class="username">
				<h1>{globalName}</h1>
				<h2>@{userName}</h2>
			</span>
		</div>
		{#if started}
			<div class="presence">
				<div class="icon-container">
					{#if isSpotify}
						<img src="{albumArtURL}?size=2048" alt="album art" class="icon" />
					{:else}
						{#if largeImage}
							<img
								src="https://cdn.discordapp.com/app-assets/{appId}/{largeImage}?size=512"
								class="icon"
								alt=""
								draggable="false"
							/>
						{/if}
						{#if smallImage}
							<img
								src="https://cdn.discordapp.com/app-assets/{appId}/{smallImage}?size=512"
								class="icon-small"
								alt=""
								draggable="false"
							/>
						{/if}
					{/if}
				</div>

				<div class="text">
					{#if songName || activityName}
						<span class="title">
							{songName ? songName : activityName}
						</span>
					{/if}
					{#if artistName || activityDetails}
						<span class="details">
							{artistName ? artistName : activityDetails}
						</span>
					{/if}
					{#if albumName || activityState}
						<span class="details">{albumName ? albumName : activityState}</span>
					{/if}
					{#if timestamp}
						<span class="details">{timestamp}</span>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.rich-presence-card {
		background-color: var(--primary);
		color: var(--onPrimary);
		font-family: var(--font-two);
		max-width: fit-content;
		padding: 1.5rem;
		border-radius: 1rem;
	}
	.presence {
		display: flex;
		margin-top: 2rem;
	}
	.user {
		display: flex;
	}
	.avatar {
		width: 4rem;
		border-radius: 50%;
	}
	.avatar.online {
		border: 3px solid #43b581;
	}
	.avatar.idle {
		border: 3px solid #faa61a;
	}
	.avatar.dnd {
		border: 3px solid #f04747;
	}
	.avatar.offline {
		border: 3px solid #747f8d;
	}
	.username {
		margin-left: 10px;
		align-self: center;
	}
	.username h2 {
		opacity: 0.5;
	}

	h1,
	h2 {
		margin: 0;
		line-height: 1.25;
		font-size: 1.25rem;
	}

	.icon-container {
		position: relative;
		margin-right: 1.8rem;
	}

	.icon {
		position: relative;
		width: 7rem;
		border-radius: 20%;
	}
	.icon-small {
		position: absolute;
		bottom: -10px;
		right: -15px;
		border-radius: 50%;
		width: 2.5rem;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		font-size: 1.1rem;
		align-self: center;
	}

	.text span {
		display: block;
	}

	.title {
		font-weight: bold;
	}

	@media (max-width: 868px) {
		.rich-presence-card {
			padding: 1rem 1rem 1rem 1rem;
			width: 20rem;
			align-self: center;
		}
		.presence {
			margin-top: 1rem;
		}
		.avatar {
			width: 3rem;
		}
		.username {
			margin-left: 8px;
		}
		.username h2 {
			font-size: 1rem;
		}
		h1,
		h2 {
			font-size: 1rem;
		}
		.icon {
			width: 5rem;
		}
		.icon-small {
			width: 2rem;
		}
		.text {
			font-size: 0.8rem;
			flex-shrink: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			display: block;
		}
	}
</style>

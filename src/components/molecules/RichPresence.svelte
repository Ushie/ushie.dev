<script>
	import { onMount } from 'svelte';
	export let ws,
		app_id,
		img_small,
		img_large,
		txt_small,
		txt_large,
		state,
		details,
		started,
		name,
		expired_relative;
	// modify the number prototype to add a function to add leading zeros
	const pad = (number) => {
		let s = String(number);
		while (s.length < 2) {
			s = '0' + s;
		}
		return s;
	};

	const calculateElapsedTime = () => {
		let elapsed = Date.now() - started;
		let seconds = Math.floor((elapsed / 1000) % 60);
		let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
		let hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

		expired_relative = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} elapsed.`;
	};

	onMount(() => {
		ws = new WebSocket('wss://api.lanyard.rest/socket');

		// Subscribe to updates
		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					op: 2,
					d: {
						subscribe_to_id: '399862294143696897'
					}
				})
			);
		};

		// Listen to messages (Opcode 0 is what we want)
		ws.onmessage = (message) => {
			const data = JSON.parse(message.data);
			console.log(data);
			if (data.op !== 0) return;
			if (data.d.activities.length === 0) return;
			const activity = data.d.activities[0];
			app_id = activity.application_id;
			img_small = activity.assets.small_image;
			img_large = activity.assets.large_image;
			txt_small = activity.assets.small_text;
			txt_large = activity.assets.large_text;
			started = activity.timestamps.start;
			state = activity.state;
			details = activity.details;
			name = activity.name;
		};

		// Heartbeat to keep the connection alive
		setInterval(() => {
			ws.send(
				JSON.stringify({
					op: 3
				})
			);
		}, 30000);
	});

	setInterval(() => calculateElapsedTime(), 1000);
</script>

<div class="icon-container">
	<div class="icon-wrapper">
		<img
			src="https://cdn.discordapp.com/app-assets/{app_id}/{img_large}.webp?size=512"
			class="icon"
			alt=""
		/>
		<div class="child-icon-container">
			<img
				src="https://cdn.discordapp.com/app-assets/{app_id}/{img_small}.webp?size=512"
				class="icon-small"
				alt=""
			/>
		</div>
	</div>
</div>
<div class="text-container">
	<div class="title">
		<span class="rpc-title">{name ? name : "I'm currently offline."}</span>
	</div>
	{#if started}
		<div class="body">
			<span>{state}</span>
			<span>{details}</span>
			<span>{expired_relative}</span>
		</div>
	{/if}
</div>

<style>
	.icon {
		border-radius: 20%;
		-webkit-box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		height: 10rem;
	}
	.icon-small {
		border-radius: 50%;
		-webkit-box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		box-shadow: 5px 5px 16px -4px rgba(0, 0, 0, 0.37);
		height: 3rem;
	}
	.icon-container {
		align-items: center;
		justify-content: center;
		display: flex;
	}
	.child-icon-container {
		position: absolute;
		bottom: -10px;
		right: -10px;
	}
	.icon-wrapper {
		position: relative;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}
	.text-container .rpc-title {
		font-size: 2rem;
		font-weight: bold;
	}
	.body {
		display: flex;
		flex-direction: column;
		font-size: 1.1rem;
	}
	.body span {
		padding-bottom: 0.8rem;
	}
</style>

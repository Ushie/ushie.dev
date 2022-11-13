<script>
	import { onMount } from 'svelte';

	let activity, details, state;

	onMount(async () => {
		const json = await fetch('https://api.lanyard.rest/v1/users/399862294143696897').then((res) =>
			res.json()
		);
		const data = json.data.activities[1];

		activity = data.name;
		details = data.details;
		state = data.state;
	});
</script>

<div>
	<p class="activity">{activity}</p>
	<p class="details">{details}</p>
	<p class="state">{state}</p>
	<p class="time">04:20 elapsed</p>
</div>

<style>
	div {
		margin-top: 20px;
		align-items: center;
		justify-content: center;
	}
	.activity {
		color: var(--dark-pinky);
		font-size: 0.85rem;
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 15px;
		margin: 7px 0;
	}
	.details {
		color: var(--dark-pinky);
		overflow: hidden;
		white-space: nowrap;
		font-size: 0.85rem;
		text-overflow: ellipsis;
		max-width: 141px;
		height: 15px;
		margin: 7px 0;
	}
	.state {
		color: var(--dark-pinky);
		overflow: hidden;
		white-space: nowrap;
		font-size: 0.85rem;
		text-overflow: ellipsis;
		max-width: 141px;
		height: 15px;
		margin: 7px 0;
	}
	.time {
		color: var(--dark-pinky);
		overflow: hidden;
		white-space: nowrap;
		font-size: 0.85rem;
		text-	: ellipsis;
		height: 15px;
		margin: 7px 0;
	}
</style>

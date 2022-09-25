<script>
	import { onMount } from 'svelte';

	let avatar_id;

	onMount(async () => {
        const response = await fetch('https://api.lanyard.rest/v1/users/399862294143696897');
        const json = await response.json();
        avatar_id = json.data.discord_user.avatar;
	});
</script>

<div>
	<img
		src="https://cdn.discordapp.com/avatars/399862294143696897/{avatar_id}.png?size=2048"
		class="logo"
		alt=""
	/>
</div>

<style>
	img {
		border-radius: 10%;
		height: 40rem;
	}
	div {
		float: left;
	}
</style>

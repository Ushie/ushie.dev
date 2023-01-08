<script>
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';

	let avatarID;

	onMount(() => {
		LanyardData.subscribe(async (e) => {
			let data = await e;
			avatarID = data.data.discord_user.avatar;
		});
	});
</script>

<img
	src="https://cdn.discordapp.com/avatars/399862294143696897/{avatarID}.png?size=512"
	class="logo"
	alt=""
	draggable="false"
/>

<style>
	img {
		border-radius: 4rem;
		width: auto;
		height: 100%;
	}

	@media (max-width: 868px) {
		img {
			max-width: 40%;
			border-radius: 20%;
		}
	}
</style>

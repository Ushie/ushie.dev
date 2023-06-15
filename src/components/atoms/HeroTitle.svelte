<script>
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';

	let globalName = 'ushie';

	onMount(() => {
		LanyardData.subscribe(async (e) => {
			let data = await e;
			globalName = data.data.discord_user.global_name;
		});
	});
</script>

<span>hey, i'm <strong>{globalName.toLowerCase()}</strong></span>

<style>
	span {
		font-size: 4rem;
		font-family: var(--font-one);
		color: var(--primary);
		margin-bottom: -1.5rem;
	}

	@media (max-width: 868px) {
		span {
			display: none;
		}
	}
</style>

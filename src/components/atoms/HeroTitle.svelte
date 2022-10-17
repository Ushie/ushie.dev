<script>
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';

	let username = 'ushie';

	onMount (() => {
        LanyardData.subscribe(async (e) => {
            let data = await e;
            username = data.data.discord_user.username;
        });
    });
</script>

<span>hey, i'm <strong>ushie<strong /></strong></span>

<style>
	span {
		font-size: 7rem;
		font-family: var(--font-one);
		color: var(--pinky);
	}

	@media (max-width: 768px) {
		span {
			display: none;
		}
	}
</style>
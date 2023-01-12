<script>
	import SocialItem from '../atoms/SocialItem.svelte';
</script>

<div class="social-buttons">
	<SocialItem
		href="https://github.com/Ushie"
		icon="github-icon"
		label="GitHub" 
	/>
	
	<SocialItem
		href="https://discord.com/users/399862294143696897"
		icon="discord-icon"
		label="Discord"
	/>

	<SocialItem
		href="https://ko-fi.com/ushiekane/"
		icon="donate-icon"
		label="Donate"
	/>
</div>

<style>
	.social-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	@media (max-width: 868px) {
		.social-buttons {
			justify-content: center;
		}
	}
</style>

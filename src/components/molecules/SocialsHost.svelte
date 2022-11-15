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
</div>

<style>
	.social-buttons {
		display: flex;
		gap: 10px;
	}
</style>

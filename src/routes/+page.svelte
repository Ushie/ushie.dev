<script>
	import HeroTitle from '../components/atoms/HeroTitle.svelte';
	import SocialsHost from '../components/molecules/SocialsHost.svelte';
	import Hero from '../components/molecules/Hero.svelte';
	import RichPresence from '../components/molecules/RichPresence.svelte';
	import { onMount } from 'svelte';
	import ColorThief from '/node_modules/colorthief/dist/color-thief.mjs';

	const colorThief = new ColorThief();
	onMount(async () => {
		const avatar = document.querySelector('.logo');
		const avatarUrl = avatar.getAttribute('src');

		async function getAverageColor(avatar) {
			const color = await colorThief
				.getColor(avatar)
				.map((x) => {
					const hex = x.toString(16);
					return hex.length === 1 ? '0' + hex : hex;
				})
				.join('');
			console.log(color);
			return color;
		}

		function setColors() {
			document.documentElement.style.setProperty(
				'--background-color',
				localStorage.getItem('backgroundColor')
			);
			document.documentElement.style.setProperty('--pinky', localStorage.getItem('pinky'));
			document.documentElement.style.setProperty('--dark-pinky', localStorage.getItem('darkPinky'));
		}

		avatar.onload = async () => {
			const averageColor = await getAverageColor(avatar);
			console.log(avatarUrl);
			if (avatarUrl === localStorage.getItem('avatarUrl')) {
				setColors();
				console.log('same');
				return;
			} else {
				localStorage.setItem('avatarUrl', avatarUrl);

				async function getColors() {
					const json = await fetch(
						`https://cors-anywhere.azm.workers.dev/https://www.tints.dev/api/brand/${averageColor}`
					).then((r) => r.json());
					console.log(json);
					return json;
				}

				// const json =
				// '{"brand":{"50":"#EBEBFF","100":"#D2D2FE","200":"#A6A4FE","300":"#7E7CFD","400":"#524FFD","500":"#2522FC","600":"#0703E2","700":"#0502AB","800":"#03026F","900":"#020137"}}';

				const colors = await getColors();
				localStorage.setItem('backgroundColor', colors.brand['900']);
				localStorage.setItem('pinky', colors.brand['500']);
				localStorage.setItem('darkPinky', colors.brand['800']);
				setColors();
				console.log('not same');
			}
		};
	});
</script>

<div class="center">
	<div class="wrapper">
		<Hero />
		<div class="introduction-container">
			<HeroTitle />
			<span class="introduction">
				Hi! Just someone who likes tinkering with random stuff. Currently I don't make things, but
				I'm hoping to change that soon :)
			</span>
			<div class="social-buttons">
				<SocialsHost />
			</div>
			<RichPresence />
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		min-height: -webkit-fill-available;
		min-height: -moz-available;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color);
	}

	:global(html) {
		height: -webkit-fill-available;
		height: -moz-available;
	}

	:root {
		--background-color: #130f14;
		--white: #d1d0d0;
		--pinky: #5d4b64;
		--dark-pinky: #261f29;
		--font-one: 'Space Grotesk', sans-serif;
		--font-two: 'JetBrains Mono', monospace;
	}

	.wrapper {
		display: flex;
		max-width: 100vw;
		height: 100%;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.introduction-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		color: var(--pinky);
		font-family: var(--font-one);
	}

	.introduction-container .introduction {
		color: var(--white);
		font-size: 1.3rem;
		font-weight: 300;
	}

	@media (max-width: 868px) {
		.wrapper {
			flex-direction: column;
			gap: 2rem;
			width: min(90%, 65rem) !important;
		}

		.introduction-container {
			align-items: center;
			font-family: var(--font-one);
			font-size: 6px;
		}

		.introduction-container .introduction {
			text-align: center;
			font-size: 16px;
			padding-right: 0;
			width: 90%;
		}

		.social-buttons {
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 1rem;
			align-items: center;
		}
	}
</style>

import {
	Hct,
	DynamicScheme,
	TonalPalette,
	DislikeAnalyzer,
	TemperatureCache,
	hexFromArgb,
	MaterialDynamicColors,
	sourceColorFromImageBytes
} from "@material/material-color-utilities";
import decode, { init as initPng } from "@jsquash/png/decode";
import PNG_WASM from "@jsquash/png/codec/pkg/squoosh_png_bg.wasm?module";

let initialized = false;

async function ensureInitialized() {
	if (initialized) return;
	await initPng(PNG_WASM);
	initialized = true;
}

export async function getColorsFromAvatar(url: string) {
	await ensureInitialized();

	const response = await fetch(url);
	if (!response.ok) throw new Error("Failed to fetch avatar");

	const buffer = await response.arrayBuffer();
	const { data } = await decode(buffer);

	const sourceColor = sourceColorFromImageBytes(new Uint8ClampedArray(data));
	const sourceColorHct = Hct.fromInt(sourceColor);

	const dynamicScheme = new DynamicScheme({
		sourceColorHct,
		variant: 6,
		contrastLevel: 0,
		isDark: true,
		primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
		secondaryPalette: TonalPalette.fromHueAndChroma(
			sourceColorHct.hue,
			Math.max(sourceColorHct.chroma - 32, sourceColorHct.chroma * 0.5)
		),
		tertiaryPalette: TonalPalette.fromInt(
			DislikeAnalyzer.fixIfDisliked(
				new TemperatureCache(sourceColorHct).analogous(3, 6)[2]
			).toInt()
		),
		neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 15),
		neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2)
	});

	return {
		background: hexFromArgb(MaterialDynamicColors.background.getArgb(dynamicScheme)),
		onBackground: hexFromArgb(MaterialDynamicColors.onBackground.getArgb(dynamicScheme)),
		primary: hexFromArgb(MaterialDynamicColors.primary.getArgb(dynamicScheme)),
		onPrimary: hexFromArgb(MaterialDynamicColors.onPrimary.getArgb(dynamicScheme))
	};
}
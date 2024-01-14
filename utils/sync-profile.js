
import { get } from 'https';
import { createWriteStream } from 'fs';
import fs from 'fs';
import {
    hexFromArgb,
    Hct,
    DynamicScheme,
    MaterialDynamicColors,
    TonalPalette,
    DislikeAnalyzer,
    TemperatureCache
} from '@material/material-color-utilities';
import { sourceColorFromImage } from "@material/material-color-utilities";
import { createCanvas, loadImage } from "canvas";

async function getAvatarUrl() {
    const apiEndpoint = "https://discord.com/api/v10";
    const userId = process.env.DISCORD_USER_ID
    const authToken = process.env.DISCORD_BOT_TOKEN
    const fallbackAvatar = process.env.FALLBACK_AVATAR

    if (authToken) {
        const result = await fetch(`${apiEndpoint}/users/${userId}`, {
            headers: { "Authorization": `Bot ${authToken}`, "Accept": "application/json" }
        });

        const data = await result.json();

        if (!result.ok) {
            throw new Error("Failed to get user information");
        }

        return `https://cdn.discordapp.com/avatars/${userId}/${data.avatar}?size=4096`;
    } else {
        return fallbackAvatar;
    }
}

const avatarFilePath = './static/avatar.webp'
const avatarUrl = await getAvatarUrl()

async function downloadAvatar(url, path) {
    const file = createWriteStream(path);
    get(url, (res) => res.pipe(file).once("finish", file.close));

    return new Promise((res) => file.once("close", res));
}

await downloadAvatar(avatarUrl, avatarFilePath)
async function getColors() {
    const image = await loadImage(avatarFilePath);
    globalThis.document = {
        createElement: (tag) => (tag === "canvas" ? createCanvas() : null),
    };
    image.dataset = {}; // We need to fake this property.
    const sourceColor = await sourceColorFromImage(image);
    const sourceColorHct = Hct.fromInt(sourceColor);

    const dynamicScheme = new DynamicScheme({
        sourceColorArgb: sourceColorHct,
        variant: 6,
        contrastLevel: 0,
        isDark: true,
        primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
        secondaryPalette: TonalPalette.fromHueAndChroma(
            sourceColorHct.hue,
            Math.max(sourceColorHct.chroma - 32.0, sourceColorHct.chroma * 0.5)
        ),
        tertiaryPalette: TonalPalette.fromInt(
            DislikeAnalyzer.fixIfDisliked(
                new TemperatureCache(sourceColorHct).analogous(3, 6)[2]
            ).toInt()
        ),
        neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 15.0),
        neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2.0)
    });

    const getDynamicColor = (name) => {
        return MaterialDynamicColors[name].getArgb(dynamicScheme);
    };
    const scheme = Object.fromEntries(
        ['primary', 'onPrimary', 'background', 'onBackground'].map((key) => [
            key,
            hexFromArgb(getDynamicColor(key))
        ])
    );
    return scheme;
}

const colorScheme = await getColors();
const cssFileContent = `:root {
    --background: ${colorScheme["background"]};
    --onBackground: ${colorScheme["onBackground"]};
    --primary: ${colorScheme["primary"]};
    --onPrimary: ${colorScheme["onPrimary"]};
}`

fs.writeFileSync('./src/routes/colorScheme.css', cssFileContent)
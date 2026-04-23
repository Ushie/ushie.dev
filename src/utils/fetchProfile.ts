const DEFAULT_NAME = "Ushie";

export interface DiscordProfile {
	globalName: string;
	userId?: string;
	avatarId?: string;
}

export async function fetchProfile(): Promise<DiscordProfile> {
	try {
		const response = await fetch(
			"https://api.lanyard.rest/v1/users/399862294143696897"
		);

		if (!response.ok) throw new Error("Failed to fetch profile");

		const user = (await response.json())?.data?.discord_user;

		return {
			globalName: user?.global_name ?? user?.username ?? DEFAULT_NAME,
			userId: user?.id,
			avatarId: user?.avatar
		};
	} catch (error) {
		console.error("Failed to fetch profile:", error);
		return { globalName: DEFAULT_NAME };
	}
}
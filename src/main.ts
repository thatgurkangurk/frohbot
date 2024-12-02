import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once("ready", () => {
	console.log("ready");
});

client.login(Bun.env.TOKEN);

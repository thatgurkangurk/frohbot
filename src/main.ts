import { GatewayIntentBits, Partials } from "discord.js";
import { ExtendedClient } from "./lib/client";

const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.User],
});

client.start(Bun.env.TOKEN);

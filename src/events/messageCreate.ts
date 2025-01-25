// send a random emoji that logan chose whenever his name is mentioned

import { EmbedBuilder, Events } from "discord.js";
import { createEvent } from "../lib/event";

function getRandomElement(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const loganEmojis = [
  "<:pumpkin1:1312815386835681414>",
  "<:pumpkin2:1312815443446206584>",
  "<:sleepy_logan:1312843535753678948>",
  "<:loading_logan:1312843560801800254>",
  "<:laugh_logan:1312843584856129667>",
  "<:disgust_logan:1312843607144796231>",
  "<:angy_logan:1312843626400845855>",
];

const gurkansUserId = "592449995035246605";

createEvent(Events.MessageCreate, async ({ log, client: c }, message) => {
  if (message.author.bot) return;

  if (message.channel.isDMBased()) {
    try {
      const gurkan = await c.users.fetch(gurkansUserId);

      const gurkansDms = await gurkan.createDM(true);

      const embed = new EmbedBuilder()
        .setAuthor({
          name: message.author.displayName,
          // biome-ignore lint/style/noNonNullAssertion: safe
          iconURL: message.author.avatarURL({
            extension: "webp",
          })!,
        })
        .setTitle(`message from ${message.author.displayName}`)
        .setDescription(message.content)
        .setTimestamp();

      await gurkansDms.send({
        embeds: [embed],
      });
    } catch (err) {
      return message.reply("couldn't forward the message to gurkan");
    }
  }
  if (message.content.toLowerCase().includes("logan")) {
    await message.channel.send(getRandomElement(loganEmojis));
  }
});

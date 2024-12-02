// send a random emoji that logan chose whenever his name is mentioned

import { Events } from "discord.js";
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

createEvent(Events.MessageCreate, async ({ log, client: c }, message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes("logan")) {
    await message.channel.send(getRandomElement(loganEmojis));
  }
});

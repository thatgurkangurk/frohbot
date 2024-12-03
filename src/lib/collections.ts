import { type ClientEvents, Collection } from "discord.js";
import type { Event } from "./event";

export const events = new Collection<
	keyof ClientEvents,
	Event<keyof ClientEvents>
>();

import { createEvent } from "../lib/event";

createEvent(
	"ready",
	({ log }) => {
		log("ready");
	},
	{
		once: true,
	},
);

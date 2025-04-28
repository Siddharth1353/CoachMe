import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "CoachMe", // Unique app ID
  name: "CoachMe",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});

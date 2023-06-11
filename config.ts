import { load } from "./deps.ts";

const env = await load();

const getEnvVariable = (name: string) => Deno.env.get(name) || env[name];

const ENV_VARIABLES = [
  "BOT_TOKEN",
  "OWNER_CHAT_ID",
  "CHANNEL_CHAT_ID",
] as const;

type Config = { [K in (typeof ENV_VARIABLES)[number]]: string };

export default ENV_VARIABLES.reduce<Config>(
  (acc, key) => ({
    ...acc,
    [key]: getEnvVariable(key),
  }),
  {} as Config
);

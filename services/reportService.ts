import { botSendMessage } from "./botService.ts";

export const reportError = (text: string) => {
  return botSendMessage({ text: `🚨 Error: ${text}` });
};

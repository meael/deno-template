import config from "../config.ts";

export const botSendPhoto = ({
  text,
  photo,
}: {
  text: string;
  photo: string;
}) => {
  const url = new URL(
    `https://api.telegram.org/bot${config.BOT_TOKEN}/sendPhoto`
  );
  url.searchParams.append("chat_id", config.CHANNEL_CHAT_ID);
  url.searchParams.append("parse_mode", "html");
  url.searchParams.append("caption", text);
  url.searchParams.append("photo", photo);

  return fetch(url.toString());
};

export const botSendMessage = ({ text }: { text: string }) => {
  const url = new URL(
    `https://api.telegram.org/bot${config.BOT_TOKEN}/sendMessage`
  );
  url.searchParams.append("chat_id", config.OWNER_CHAT_ID);
  url.searchParams.append("text", text);
  return fetch(url.toString());
};

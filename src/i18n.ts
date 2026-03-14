// i18n.ts
import { getRequestConfig } from "next-intl/server";
import idMessages from "./messages/id.json";

export default getRequestConfig(async () => {
  return {
    locale: "id",
    messages: idMessages,
  };
});

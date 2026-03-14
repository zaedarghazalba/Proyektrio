// i18n.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = "id";

  return {
    locale,
    messages: (await import("./messages/id.json")).default,
  };
});

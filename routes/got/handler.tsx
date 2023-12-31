import { Handler } from "$fresh/server.ts";
import { got } from "got";

export async function getGotResp() {
  return await got("https://catfact.ninja/fact").json<Record<string, string>>();
}

export const handler: Handler = async () => {
  console.log("got handler");
  const resp = await getGotResp();
  return new Response(JSON.stringify(resp), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
};

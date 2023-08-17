import { Handler } from "$fresh/server.ts";

export async function getFetchResp() {
  const resp = await fetch("https://catfact.ninja/fact");
  const json = await resp.json();
  return json;
}

export const handler: Handler = async () => {
  console.log("fetch handler");
  const resp = await getFetchResp();
  return new Response(JSON.stringify(resp), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
};

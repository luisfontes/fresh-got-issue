import { got } from "got";

export async function getGotResp() {
  return await got("https://catfact.ninja/fact").json<Record<string, string>>();
}

if (import.meta.main) {
  console.log(await getGotResp());
}

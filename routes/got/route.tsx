import { got } from "got";

export async function getGotResp() {
  return await got("https://catfact.ninja/fact").json<Record<string, string>>();
}

export default async function GotRoute() {
  console.log("got route");
  const resp = await getGotResp();

  return <pre>{JSON.stringify(resp)}</pre>;
}

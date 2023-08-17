import { getGotResp } from "../../test-got.ts";

export default async function TestGot() {
  console.log("Route");
  const resp = await getGotResp();

  return <pre>{JSON.stringify(resp)}</pre>;
}

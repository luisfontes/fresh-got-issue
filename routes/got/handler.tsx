import { Handler } from "$fresh/server.ts";
import { getGotResp } from "../../test-got.ts";

export const handler: Handler = async () => {
  console.log("Handler");
  const resp = await getGotResp();
  return new Response(JSON.stringify(resp), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
};

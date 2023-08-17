export async function getFetchResp() {
  const resp = await fetch("https://catfact.ninja/fact");
  const json = await resp.json();
  return json;
}

export default async function FetchRoute() {
  console.log("fetch route");
  const resp = await getFetchResp();

  return <pre>{JSON.stringify(resp)}</pre>;
}

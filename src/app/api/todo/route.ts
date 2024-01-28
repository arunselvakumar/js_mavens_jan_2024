import { NextRequest } from "next/server";

// @ts-ignore
const addedProducts = [];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  await sleep(3000);
  const payload = await request.json();
  addedProducts.push(payload);

  // @ts-ignore
  return new Response(JSON.stringify(addedProducts), {
    status: 200,
  });
}

export async function GET(request: NextRequest) {
  await sleep(3000);
  // @ts-ignore
  return new Response(JSON.stringify(addedProducts), {
    status: 200,
  });
}

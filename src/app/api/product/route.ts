import { NextRequest } from "next/server";
import { data } from "@/app/api/product/data";
import _ from "lodash";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  await sleep(3000);
  const filter = request.nextUrl.searchParams.get("filter");
  const source = data.products.data.items;
  const filteredItems = _.filter(source, function (o: any) {
    return o.name.toLowerCase().includes(filter?.toLowerCase());
  });
  return new Response(JSON.stringify(filteredItems), {
    status: 200,
  });
}

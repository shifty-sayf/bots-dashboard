import fs from "fs";
import { NextResponse } from "next/server";
import { fetchData } from "@/lib/fetchData";

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

export async function GET() {
  // Ensure the data.json file is created
  // await fetchData();

  const readStream = fs.createReadStream("public/data.json");
  const iterator = readStream[Symbol.asyncIterator]();

  const stream = iteratorToStream(iterator);

  return new NextResponse(stream);
}

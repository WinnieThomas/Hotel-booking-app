import type { NextFetchEvent, NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms } from "@/app/controllers/roomControllers";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

router.get(allRooms);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
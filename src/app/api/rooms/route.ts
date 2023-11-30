import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms, newRoom } from "@/app/controllers/roomControllers";
import dbConnect from "../../../../config/dbConnect";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);
router.post(newRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export async function   POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
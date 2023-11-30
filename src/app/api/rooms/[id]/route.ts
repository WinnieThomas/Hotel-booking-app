import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getRoomDetails, updateRoom } from "@/app/controllers/roomControllers";
import dbConnect from "../../../../../config/dbConnect";


interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomDetails);
router.put(updateRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export async function   POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export async function   PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import dbConnect from "../../../../../../config/dbConnect";
import { updateRoom } from "@/app/controllers/roomControllers";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(updateRoom);


export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function DELETE(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
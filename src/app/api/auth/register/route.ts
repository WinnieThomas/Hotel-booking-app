import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms, newRoom } from "@/app/controllers/roomControllers";
import dbConnect from "../../../../../config/dbConnect";
import { registerUser } from "@/app/controllers/authControllers";


interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(registerUser);

export async function   POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
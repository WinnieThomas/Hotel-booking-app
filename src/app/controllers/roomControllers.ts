import Room from "@/models/room";
import { NextRequest, NextResponse } from "next/server";

export const allRooms = async(req:NextRequest) => {

  const resPerPage:number = 8;
  const rooms = await Room.find();

  return NextResponse.json({
    success:true,
    rooms,
  })

}

export const newRoom = async (req:NextRequest) =>{
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success:true,
    room,
  })
}

export const getRoomDetails = async (req:NextRequest, {params}:{params:{id:string}}) => {

  const room = await Room.findById(params.id);

  if(!room){
    return NextResponse.json({
      message:"room not found!",
    },
    {
      status:404,
    }
    );
  }

  return NextResponse.json({
    success:true,
    room,
  });

}


export const updateRoom = async (req:NextRequest, {params}:{params:{id:string}}) => {

  let room = await Room.findById(params.id);
  const body = await req.json();

  if(!room){
    return NextResponse.json({
      message:"room not found!",
    },
    {
      status:404,
    }
    );
  }

  room= await Room.findByIdAndUpdate(params.id, body {
    new:true,
  });

  return NextResponse.json({
    success:true,
    room,
  });

}
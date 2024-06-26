import { catchAsyncErrors } from "@/middleware/catchAsyncError";
import Room, { IRoom } from "@/models/room";
import APIFilters from "@/utils/apiFilters";
import ErrorHandler from "@/utils/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export const allRooms = catchAsyncErrors(async(req:NextRequest) => {

  const resPerPage:number = 4;

  const {searchParams} = new URL(req.url);

  const queryStr:any = {};

  searchParams.forEach((value,key)=>{
    queryStr[key] = value;
  });

  const roomsCount:number = await Room.countDocuments();
  const apiFilters = new APIFilters(Room,queryStr).search().filter();
  
  let rooms: IRoom[] = await apiFilters.query;
  const filteredRoomCount:number = rooms.length;
  apiFilters.pagination(resPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success:true,
    roomsCount,
    filteredRoomCount,
    resPerPage,
    rooms,
  })

});

export const newRoom = catchAsyncErrors(async (req:NextRequest) =>{
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success:true,
    room,
  })
});

export const getRoomDetails = catchAsyncErrors(async (req:NextRequest, {params}:{params:{id:string}}) => {

  const room = await Room.findById(params.id);

  if(!room){
    throw new ErrorHandler("Room not found", 404);
  }

  return NextResponse.json({
    success:true,
    room,
  });

});


export const updateRoom = catchAsyncErrors(async (req:NextRequest, {params}:{params:{id:string}}) => {

  let room = await Room.findById(params.id);
  const body = await req.json();

  if(!room){
    throw new ErrorHandler("Room not found", 404);
  }

  room= await Room.findByIdAndUpdate(params.id, body, {
    new:true,
  });

  return NextResponse.json({
    success:true,
    room,
  });

});


export const deleteRoom = catchAsyncErrors(async (req:NextRequest, {params}:{params:{id:string}}) => {

  let room = await Room.findById(params.id);

  if(!room){
    throw new ErrorHandler("Room not found", 404);
  }

  room= await Room.deleteOne();

  return NextResponse.json({
    success:true,
  });

});


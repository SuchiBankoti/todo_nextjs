import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../lib/mongodb"
import Task from "../../../../../models/task";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description, newCompleted: completed } = await request.json()
    await connectMongoDB()
    await Task.findByIdAndUpdate(id, { title, description, completed })
    return NextResponse.json({message:"Task updated"},{status:200})
}

export async function GET(request, { params }) {
    const { id } = params
    await connectMongoDB()
    const task = await Task.findOne({ _id: id })
    return NextResponse.json({task},{status:200})
}
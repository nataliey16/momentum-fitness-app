import { NextResponse } from "next/server";
import { connectMongoDB } from "../../utils/mongodb";
import Exercise from "../../models/Exercise";

export async function POST(req) {
  try {
    const { exerciseType, category, sets, repetitions, notes } =
      await req.json();

    await connectMongoDB();

    //call Exercise model
    await Exercise.create({
      exerciseType,
      category,
      sets,
      repetitions,
      notes,
    });

    return NextResponse.json({ message: "Exercise created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

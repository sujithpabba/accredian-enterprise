import { NextResponse } from "next/server";
import { programs } from "@/data/programs";

export async function GET() {
  return NextResponse.json(programs);
}

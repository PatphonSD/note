import { getNoteFromToken } from "@/lib/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get("token");
    if (!token) return NextResponse.json({ error: "Invalid Token" }, { status: 409 });
    const note = await getNoteFromToken(token);
    if (!note) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(note);
}
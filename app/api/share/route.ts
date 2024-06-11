import { INote } from "@/interface/note-interface";
import { addNote, deleteNote, getNoteFromID, updateNoteByID } from "@/lib/server/db";
import { generateToken } from "@/lib/token";
import { Note } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Backup note (from client-side IndexedDB to server-side Prisma)
export async function POST(req: NextRequest) {
    const body: INote = await req.json();
    const existingNote = await getNoteFromID(body.id);

    let result: Note;

    if (!existingNote) {
        const token = generateToken(6);     // Create a token of length 6
        result = await addNote(body, token);
    } else {
        result = await updateNoteByID(body.id, body);
    }

    return NextResponse.json({ token: result.token });
}

// Backup note (from client-side IndexedDB to server-side Prisma)
export async function DELETE(req: NextRequest) {
    const body: INote = await req.json();
    const existingNote = await getNoteFromID(body.id);

    if (!existingNote) return NextResponse.json({ error: "Not found." }, { status: 404 });

    await deleteNote(body.id);

    return NextResponse.json({});
}

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Invalid ID" }, { status: 409 });
    const note = await getNoteFromID(id);
    return NextResponse.json(note);
}
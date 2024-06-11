import { Note, PrismaClient } from '@prisma/client';
import { INote } from '@/interface/note-interface';

const prisma = new PrismaClient();

// Note Management
export const addNote = async (note: INote, token: string): Promise<Note> => {
    return await prisma.note.create({
        data: {
            ...note,
            token
        },
    });
};

export const getNotes = async (): Promise<INote[]> => {
    return await prisma.note.findMany();
};

export const getNoteFromID = async (id: string): Promise<Note | null> => {
    return await prisma.note.findFirst({
        where: { id },
    });
};

export const getNoteFromToken = async (token: string): Promise<Note | null> => {
    return await prisma.note.findUnique({
        where: { token },
    });
};

export const updateNoteByID = async (id: string, note: INote): Promise<Note> => {
    return await prisma.note.update({
        where: { id },
        data: note,
    });
};

export const updateNoteByToken = async (token: string, note: INote): Promise<void> => {
    await prisma.note.update({
        where: { token },
        data: note,
    });
};

export const deleteNote = async (id: string): Promise<void> => {
    await prisma.note.delete({
        where: { id },
    });
};

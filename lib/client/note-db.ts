import { INote } from '@/interface/note-interface';
import { openDB } from 'idb';
const dbPromise = openDB('notes-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('notes')) {
      db.createObjectStore('notes', { keyPath: 'id' });
    }
  },
});

export const addNote = async (note: INote): Promise<void> => {
  const db = await dbPromise;
  await db.add('notes', note);
};

export const getNotes = async (): Promise<INote[]> => {
  const db = await dbPromise;
  const notes = await db.getAll('notes');
  return notes.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
};

export const getNote = async (id: string): Promise<INote | undefined> => {
  const db = await dbPromise;
  return db.get('notes', id);
};

export const updateNote = async (key : string | undefined , note: INote): Promise<void> => {
  const db = await dbPromise;
  await db.put('notes', note , key);
};

export const deleteNote = async (id: string): Promise<void> => {
  const db = await dbPromise;
  await db.delete('notes', id);
};

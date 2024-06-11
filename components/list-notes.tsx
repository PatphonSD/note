"use client";

import { getNotes } from "@/lib/client/note-db";
import { notesAtom } from "@/store/note-store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { LoadingAllNotesSkeleton } from "./loading/loading-all-notes";
import Container from "./container";
import NoteItem from "./note-item";
import NoteItemViewer from "./note-item-viewer";
import { Ghost } from "lucide-react";

export default function ListNotes() {
  const [notes, setNotes] = useAtom(notesAtom);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const getAllNotes = async () => {
      const iDBNotes = await getNotes();
      setNotes(iDBNotes);
      setPending(false);
    };
    getAllNotes();
  }, []);

  return pending ? (
    <LoadingAllNotesSkeleton />
  ) : (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {notes?.map((item) => (
          <NoteItem key={item.id} {...item} />
        ))}
        {notes?.length === 0 && (
          <div className="flex-1 flex text-foreground/75 py-16 flex-col items-center justify-center col-span-full">
            <Ghost />
            <p>No notes found</p>
          </div>
        )}
        <NoteItemViewer />
      </div>
    </Container>
  );
}

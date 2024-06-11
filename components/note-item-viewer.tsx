"use client";

import { INote } from "@/interface/note-interface";
import {
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "@/lib/client/note-db";
import { notesAtom, selectedIdAtom, tokenAtom } from "@/store/note-store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";
import { Link, Loader2, Unlink } from "lucide-react";
import useSWR, { mutate } from "swr";
import { Note } from "@prisma/client";

export default function NoteItemViewer() {
  const { toast } = useToast();

  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const [token, setToken] = useAtom(tokenAtom);
  const [open, setOpen] = useState(false);
  const [isLoadingToken, setIsLoadingToken] = useState(false);
  const [currentNoteData, setCurrentNoteData] = useState<INote | undefined>(
    undefined
  );
  const [notes, setNotes] = useAtom(notesAtom);

  const getAllNotes = async () => {
    const iDBNotes = await getNotes();
    setNotes(iDBNotes);
  };

  const { data: noteTokenFromCloud } = useSWR<Note>(
    `/api/share?id=${currentNoteData?.id}`,
    (url) => fetch(url).then((res) => res.json()),
    {
      suspense: currentNoteData?.id === undefined,
    }
  );

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSelectedId(null);
    }
  };

  useEffect(() => {
    if (selectedId) {
      const getNoteData = async () => {
        if (!selectedId) return;
        const data = await getNote(selectedId);
        setCurrentNoteData(data);
      };
      getNoteData();
      setOpen(true);
    } else setCurrentNoteData(undefined);
  }, [selectedId]);

  const handleDeleteNote = async () => {
    if (!currentNoteData) return;
    if (noteTokenFromCloud) {
      await revokeShare();
    }
    await deleteNote(currentNoteData.id);
    await getAllNotes();
    setSelectedId(null);
    setOpen(false);
  };

  const createShare = async () => {
    if (!currentNoteData) return;
    setIsLoadingToken(true);
    const result = await fetch("/api/share", {
      method: "POST",
      body: JSON.stringify(currentNoteData),
    });
    switch (result.status) {
      case 200:
        const data = await result.json();
        setToken(data.token);
        toast({
          title: "Share token created",
        });
        mutate(`/api/share?id=${currentNoteData?.id}`);
        break;
      default:
        toast({
          title: "Error creating share token",
          description: "Please try again",
          variant: "destructive",
        });
        break;
    }
    setIsLoadingToken(false);
  };

  const revokeShare = async () => {
    if (!currentNoteData) return;
    setIsLoadingToken(true);
    const result = await fetch("/api/share", {
      method: "DELETE",
      body: JSON.stringify(currentNoteData),
    });
    switch (result.status) {
      case 200:
        setToken(null);
        toast({
          title: "Share token revoked",
        });
        mutate(`/api/share?id=${currentNoteData?.id}`);
        break;
      default:
        toast({
          title: "Error revoking share token",
          description: "Please try again",
          variant: "destructive",
        });
        break;
    }
    setIsLoadingToken(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="h-full md:h-auto md:max-h-[calc(100%-2rem)] max-w-3xl flex flex-col">
        <div>
          {currentNoteData?.id === noteTokenFromCloud?.id && (
            <small className="text-slate-500 flex items-center">
              <Link className="w-3 h-3 me-2" />
              {noteTokenFromCloud?.token}
            </small>
          )}
          <h2 className="text-xl font-semibold">{currentNoteData?.title}</h2>
        </div>
        <div className="h-full overflow-auto">
          <ScrollArea spellCheck={false} className="h-full overflow-auto">
            {currentNoteData?.content}
          </ScrollArea>
        </div>
        <DialogFooter className="flex gap-2 md:flex-row">
          <Button
            disabled={isLoadingToken}
            onClick={() => handleDeleteNote()}
            variant={"outline"}
          >
            Delete
          </Button>
          {currentNoteData?.id === noteTokenFromCloud?.id ? (
            <Button disabled={isLoadingToken} onClick={() => revokeShare()}>
              {isLoadingToken ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                <>
                  Unshare
                  <Unlink className="ms-2 w-4 h-4" />
                </>
              )}
            </Button>
          ) : (
            <Button disabled={isLoadingToken} onClick={() => createShare()}>
              {isLoadingToken ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "Share"
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

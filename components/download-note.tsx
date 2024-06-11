"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { Download } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditorComponent from "@/lib/editor";
import { notesAtom } from "@/store/note-store";
import { addNote } from "@/lib/client/note-db";
import { INote } from "@/interface/note-interface";
import { useToast } from "@/components/ui/use-toast";
import { createUUID } from "@/lib/uuid";

const DownloadNote = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useAtom(notesAtom);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownloadNote = async (token : string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/share/download?token=${token.toUpperCase()}`);
      if (res.status === 200) {
        const data = await res.json();
        const newNote = { ...data, id: createUUID() };
        const noteExists = notes?.some(note => note.id === newNote.id);

        if (!noteExists) {
          setNotes(prevNotes => [...(prevNotes || []), newNote]);
          await addNote(newNote);
          toast({ title: "Success", description: "Note downloaded" });
        } else {
          toast({ title: "Already exists", description: "Note already exists" });
        }
        setOpen(false);
      } else if (res.status === 404) {
        toast({ title: "Not found", description: "Note not found", variant: "destructive" });
      } else {
        toast({ title: "Error", description: "Invalid token", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "An error occurred", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <Download className="w-4 h-4 ms-0" />
        </Button>
      </DialogTrigger>
      <DialogContent className="transition-all duration-700">
        <DialogHeader>
          <DialogTitle>Download note from Token</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2">
          <p>Enter token</p>
          <InputOTP
            disabled={loading}
            inputMode="text"
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onComplete={handleDownloadNote}
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-10 h-14 text-[2rem] uppercase"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadNote;
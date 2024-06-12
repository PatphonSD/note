"use client";

import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { createUUID } from "./uuid";
import { useAtom } from "jotai";
import { notesAtom } from "@/store/note-store";
import { INote } from "@/interface/note-interface";
import { addNote } from "./client/note-db";

interface Inputs {
  title: string;
  content: string;
}

interface Props {
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onContentChange: Dispatch<SetStateAction<string>>;
}

export default function EditorComponent(props: Props) {
  const setOpen = props.onOpenChange;

  const [, setNotes] = useAtom(notesAtom);

  const { register, handleSubmit, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputData) => {
    const newNote: INote = {
      id: createUUID(),
      title: inputData.title.length > 0 ? inputData.title : "Untitled",
      content: inputData.content,
      updatedAt: new Date(),
    };
    setNotes((prevNote) => {
      if (!prevNote) {
        return [newNote];
      } else {
        return [newNote, ...prevNote];
      }
    });
    await addNote(newNote);
    setOpen(false);
  };

  useEffect(() => {
    const setCurrnetContent = props.onContentChange;
    setCurrnetContent(watch("content"));
  }, [watch("content")]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("title")}
        placeholder="Title"
        className="focus:outline-none w-full text-4xl font-semibold"
      />
      <textarea
        {...register("content", { required: true })}
        required
        rows={10}
        spellCheck={false}
        className="focus:outline-none"
        placeholder="type something..."
      />
      <DialogFooter className="flex gap-4 mt-2">
        <DialogClose asChild>
          <Button variant={"outline"}>Close</Button>
        </DialogClose>
        <Button>Save</Button>
      </DialogFooter>
    </form>
  );
}

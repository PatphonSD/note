"use client";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import EditorComponent from "@/lib/editor";
import { useState } from "react";

export default function CreateNote() {
  const [open, setOpen] = useState(false);
  const [, setCurrnetContent] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <span className="hidden md:block">Create new</span>
          <Plus className="w-4 h-4 ms-0 md:ms-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl transition-all duration-700">
        <EditorComponent
          onOpenChange={setOpen}
          onContentChange={setCurrnetContent}
        />
      </DialogContent>
    </Dialog>
  );
}

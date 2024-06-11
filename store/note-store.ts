import { INote } from "@/interface/note-interface"
import { atom } from "jotai"

export const notesAtom = atom<INote[] | undefined>(undefined)
export const selectedIdAtom = atom<null | string>(null)
export const tokenAtom = atom<null | string>(null)
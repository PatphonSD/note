import { INote } from "@/interface/note-interface";
import { selectedIdAtom } from "@/store/note-store";
import { useAtom } from "jotai";

export default function NoteItem(props: INote) {
  const [, setSelectedId] = useAtom(selectedIdAtom);
  return (
    <>
      <div
        onClick={() => setSelectedId(props.id)}
        className="bg-yellow-300 p-4 animate-ease-in-out shadow-lg active:scale-[0.97] transition-all cursor-pointer duration-300"
      >
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="line-clamp-2">{props.content}</p>
      </div>
    </>
  );
}

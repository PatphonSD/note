import { LoadingAllNotesSkeleton } from "@/components/loading/loading-all-notes";
import PageTitle from "@/components/page-title";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const ListNotes = dynamic(() => import("@/components/list-notes"), {
  loading: () => <LoadingAllNotesSkeleton />,
  ssr: false,
});
const CreateNote = dynamic(() => import("@/components/create-note"), {
  loading: () => <Skeleton className="h-10 w-12 md:w-36 rounded-full" />,
  ssr: false,
});
const DownloadNote = dynamic(() => import("@/components/download-note"), {
  loading: () => <Skeleton className="h-10 w-12 rounded-full" />,
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <PageTitle title="Notes" endContent={
        <div className="flex gap-2 md:gap-4">
          <DownloadNote />
          <CreateNote />
        </div>
      } />
      <ListNotes />
    </main>
  );
}

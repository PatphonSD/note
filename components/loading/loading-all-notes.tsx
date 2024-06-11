import Container from "../container";
import { Skeleton } from "../ui/skeleton";

export function LoadingAllNotesSkeleton() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 h-full">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </Container>
  );
}

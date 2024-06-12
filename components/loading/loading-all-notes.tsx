import Container from "../container";
import { Skeleton } from "../ui/skeleton";

export function LoadingAllNotesSkeleton() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 h-full">
        <div className="bg-gray-100 p-4 animate-pulse shadow">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
        </div>
        <div className="bg-gray-100 p-4 animate-pulse shadow">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
        </div>
        <div className="bg-gray-100 p-4 animate-pulse shadow">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
        </div>
      </div>
    </Container>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

function SkeletonProductCard() {
  return (
    <article className="flex flex-col">
      <main className="flex flex-col gap-4 flex-1">
        <div className="bg-muted rounded-xl flex justify-center py-6">
          <Skeleton className="w-3/4 aspect-square h-full rounded-full" />
        </div>
        <Skeleton className="4/5 h-8 rounded-md" />
        <div className="mb-5 flex flex-col gap-y-2.5">
          <Skeleton className="w-4/5 h-3 rounded-md" />
          <Skeleton className="w-full h-3 rounded-md" />
          <Skeleton className="w-1/3 h-3 rounded-md" />
        </div>
      </main>
      <footer className="flex justify-between items-center mt-auto">
        <Skeleton className="w-24 h-8 rounded-lg" />
        <Skeleton className="w-28 h-10 rounded-lg" />
      </footer>
    </article>
  );
}

export default SkeletonProductCard;

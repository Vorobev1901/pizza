import { Skeleton } from "@/components/ui/skeleton";
import { Heading } from "@/components/index";
import { cn } from "@/lib/utils";

type SkeletonFilterGroupProps = {
  title: string;
  limit: number;
  className: string;
};

const SkeletonFilterGroup = ({ title, className, limit }: SkeletonFilterGroupProps) => {
  return (
    <div className="flex flex-col">
      <Heading level="3" className="mb-4">
        {title}
      </Heading>

      <div className="mb-4">
        <Skeleton className="w-full h-10 rounded-md" />
      </div>

      <div className="w-full flex flex-col gap-y-4">
        {Array.from({ length: limit }, (_, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <Skeleton className="flex-none w-5 h-5 rounded-[6px]" />
            <Skeleton className="w-4/5 h-3 rounded-md" />
          </div>
        ))}
        <Skeleton className={cn(className, "w-3/5 h-4 rounded-md")} />
      </div>
    </div>
  );
};

export default SkeletonFilterGroup;

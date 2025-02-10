import { cn } from "@/lib/utils";
import {  SkeletonProductCard } from "./index";

type SkeletopGroupListProps = {
  length: number;
  className?: string;
};

const SkeletopGroupList = ({length, className}: SkeletopGroupListProps) => {
  return (
    <div className={cn(className)}>
      <>
          {Array.from({ length: length }, (_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </>
    </div>
  );
};

export default SkeletopGroupList;

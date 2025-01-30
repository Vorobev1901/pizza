import {  SkeletonProductCard } from "./index";

type SkeletopGroupListProps = {
  length: number
};

const SkeletopGroupList = ({length}: SkeletopGroupListProps) => {
  return (
    <div className="grid grid-cols-3 gap-12">
      <>
          {Array.from({ length: length }, (_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </>
    </div>
  );
};

export default SkeletopGroupList;

import { cn } from "@/lib/utils"

interface ContainerProps {
  className: string,
  children: React.ReactNode
}

const Container = ({className, children}: ContainerProps) => {
  return (
    <div className={cn(className, "container mx-auto")}>
      {children}
    </div>
  );
};

export default Container;

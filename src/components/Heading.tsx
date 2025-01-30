import { cn } from "@/lib/utils";
import React from "react";

interface Heading {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string,
  children?: React.ReactNode,
}

const Heading = ({ level, className, children} : Heading) => {
  const Heading = `h${level}`;

  const sizes = {
    '1': '5xl',
    '2': '2xl',
    '3': 'lg',
    '4': 'lg',
    '5': 'lg',
    '6': 'lg',
  }
  
  return React.createElement(Heading, {className: cn(className, `text-${sizes[level]} font-bold`)}, children);
};

export default Heading;

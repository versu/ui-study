import { ReactNode } from "react";
import { cn } from "~/components/lib/utils";

export type Props = {
  children: ReactNode
  className?: string
}

export const CarouselItem = ({ children, className }: Props) => {
  return (
    <div className={cn(`flex flex-none snap-start items-center justify-center`, `${className ? className : "w-full"}`)}>
      {children}
    </div>
  );
}

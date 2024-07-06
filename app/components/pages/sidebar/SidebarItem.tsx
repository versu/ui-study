import { Link } from "@remix-run/react";
import { ReactNode, useContext } from "react";
import { cn } from "~/components/lib/utils";
import { SidebarContext } from "./Sidebar";

export type SidebarItemProps = {
  icon: ReactNode;
  title: string;
  path: string;
};
export const SidebarItem = ({ icon, title, path }: SidebarItemProps) => {
  const { callapsed } = useContext(SidebarContext);
  return (
    <li>
      <Link
        to={path}
        className={cn(
          "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all rounded-md"
        )}
      >
        <div className="flex w-[50px] justify-center">{icon}</div>
        <span
          className={cn(
            "flex-1",
            callapsed
              ? "invisible absolute top-0 min-w-32 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
              : ""
          )}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

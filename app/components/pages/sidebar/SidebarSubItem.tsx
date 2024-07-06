import { Link } from "@remix-run/react";
import { useContext } from "react";
import { cn } from "~/components/lib/utils";
import { SidebarContext } from "./Sidebar";

export type SidebarSubItemProps = {
  title: string;
  path: string;
};
export const SidebarSubItem = ({ title, path }: SidebarSubItemProps) => {
  const { callapsed } = useContext(SidebarContext);

  return (
    <li>
      <Link
        to={path}
        className={cn(
          "flex gap-5 px-[78px] py-1 hover:bg-primary-1 rounded-md",
          callapsed ? "gap-2 px-2 py-2" : ""
        )}
      >
        <span className="flex-1 opacity-60">{title}</span>
      </Link>
    </li>
  );
};

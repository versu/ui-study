import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "~/components/lib/utils";
import { ReactNode, useContext, useState } from "react";
import { SidebarContext } from "./Sidebar";

export type SidebarSubMenuProps = {
  itemKey: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
};
export const SidebarSubMenu = ({
  itemKey,
  icon,
  title,
  children,
}: SidebarSubMenuProps) => {
  const { callapsed } = useContext(SidebarContext);
  const [openKeyList, setOpenKeyList] = useState<string[]>([]);

  const handleElemHover = (key: string) => {
    if (callapsed && !openKeyList.some((k) => k === key)) {
      setOpenKeyList([...openKeyList, key]);
    }
  };

  return (
    <Accordion.Root
      type="multiple"
      value={openKeyList}
      onValueChange={setOpenKeyList}
    >
      <Accordion.Item
        value={itemKey}
        className="group relative"
        onMouseEnter={() => handleElemHover(itemKey)}
      >
        <Accordion.Trigger
          className={cn(
            "w-full flex gap-5 px-2 py-3 justify-center hover:bg-primary-1 rounded-md",
            callapsed ? "" : ""
          )}
        >
          <div className="flex w-[50px] justify-center">{icon}</div>
          <span className={cn("flex-1 text-left", callapsed ? "hidden" : "")}>
            {title}
          </span>
          <ChevronDown
            className={cn(
              "transition-all [[data-state=open]>&]:rotate-180",
              callapsed ? "hidden" : ""
            )}
          />
        </Accordion.Trigger>
        <Accordion.Content
          className={cn(
            "flex flex-col gap-2 pt-2",
            callapsed
              ? "absolute top-0 min-w-32 left-[100%] border border-dark-1 shadow-md rounded-md invisible group-hover:visible hover:visible"
              : ""
          )}
        >
          <li className={cn(callapsed ? "block" : "hidden")}>
            <div
              className={cn(
                "flex gap-5 px-[78px]  py-3 hover:bg-primary-1 justify-center rounded-md",
                callapsed ? "gap-2 px-2 py-2" : ""
              )}
            >
              <span className="flex-1">{title}</span>
            </div>
          </li>
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

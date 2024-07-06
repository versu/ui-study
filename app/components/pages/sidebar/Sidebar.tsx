import { ChevronFirst } from "lucide-react";
import { cn } from "~/components/lib/utils";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const SidebarContext = createContext<{
  callapsed: boolean;
  setCallapsed: Dispatch<SetStateAction<boolean>>;
}>({
  callapsed: false,
  setCallapsed: () => {},
});

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const [callapsed, setCallapsed] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ callapsed, setCallapsed }}>
      <nav
        className={cn(
          "w-[260px] bg-white p-6 border border-r-dark-1 transition-all",
          callapsed ? "w-[102px]" : ""
        )}
      >
        {/* logo */}
        <div className={cn("flex items-center justify-center gap-5 h-12")}>
          <img
            src="https://www.cdnlogo.com/logos/p/56/polygon.svg"
            width={50}
            alt=""
            className={cn(callapsed ? "hidden" : "")}
          />
          <span className={cn("flex-1", callapsed ? "hidden" : "")}>Title</span>
          <ChevronFirst
            className={cn(
              "cursor-pointer transition-all",
              callapsed ? "rotate-180" : ""
            )}
            onClick={() => setCallapsed(!callapsed)}
          />
        </div>
        {/* menu */}
        <ul className="space-y-2 pt-5">{children}</ul>
      </nav>
    </SidebarContext.Provider>
  );
};

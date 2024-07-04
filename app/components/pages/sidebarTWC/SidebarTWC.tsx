import { Link } from "@remix-run/react";
import { ChevronFirst, CalendarCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "~/components/lib/utils";

export const SidebarTWC = () => {
  const [callapsed, setCallapsed] = useState<boolean>(false);
  return (
    <div className="flex h-screen w-full">
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
        <ul className="space-y-2 pt-5">
          {/* menu item */}
          <li>
            <Link
              to=""
              className={cn(
                "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all"
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span
                className={cn(
                  "flex-1",
                  callapsed
                    ? "invisible absolute top-0 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
                    : ""
                )}
              >
                Home
              </span>
            </Link>
          </li>
          {/* menu item */}
          <li>
            <Link
              to=""
              className={cn(
                "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all"
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span
                className={cn(
                  "flex-1",
                  callapsed
                    ? "invisible absolute top-0 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
                    : ""
                )}
              >
                Home
              </span>
            </Link>
          </li>
          {/* sub menu */}
          <li className="relative">
            <Link
              to=""
              className={cn(
                "peer relative flex gap-5 px-2 py-3 justify-center hover:bg-primary-1",
                callapsed ? "" : ""
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span className={cn("flex-1", callapsed ? "hidden" : "")}>
                Home
              </span>
              <ChevronDown className={cn(callapsed ? "hidden" : "")} />
            </Link>
            {/* sub menu items */}
            <ul
              className={cn(
                "flex flex-col gap-2 pt-2",
                callapsed
                  ? "absolute top-0 left-[100%] border border-dark-1 shadow-md rounded-md invisible peer-hover:visible hover:visible"
                  : ""
              )}
            >
              <li className={cn(callapsed ? "block" : "hidden")}>
                <Link
                  to=""
                  className={cn(
                    "flex gap-5 px-6 py-3 hover:bg-primary-1 justify-center",
                    callapsed ? "gap-2 px-2 py-2" : ""
                  )}
                >
                  <CalendarCheck width={50} overflow={"visible"} />
                  <span className="flex-1 opacity-60">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={cn(
                    "flex gap-5 px-6 py-3 hover:bg-primary-1",
                    callapsed ? "gap-2 px-2 py-2" : ""
                  )}
                >
                  <CalendarCheck width={50} overflow={"visible"} />
                  <span className="flex-1 opacity-60">Sub1</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className={cn(
                    "flex gap-5 px-6 py-3 hover:bg-primary-1",
                    callapsed ? "gap-2 px-2 py-2" : ""
                  )}
                >
                  <CalendarCheck width={50} overflow={"visible"} />
                  <span className="flex-1 opacity-60">Sub2</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* menu item */}
          <li>
            <Link
              to=""
              className={cn(
                "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all"
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span
                className={cn(
                  "flex-1",
                  callapsed
                    ? "invisible absolute top-0 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
                    : ""
                )}
              >
                Home
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1">
        <div>contents</div>
      </main>
    </div>
  );
};

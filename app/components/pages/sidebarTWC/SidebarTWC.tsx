import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@remix-run/react";
import { ChevronFirst, CalendarCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "~/components/lib/utils";

export const SidebarTWC = () => {
  const [callapsed, setCallapsed] = useState<boolean>(false);

  const [openKeyList, setOpenKeyList] = useState<string[]>([]);

  const handleElemHover = (key: string) => {
    if (callapsed && !openKeyList.some((k) => k === key)) {
      setOpenKeyList([...openKeyList, key]);
    }
  };
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
                "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all rounded-md"
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span
                className={cn(
                  "flex-1",
                  callapsed
                    ? "invisible absolute top-0 min-w-32 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
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
                "relative flex justify-center gap-5 px-2 py-3 hover:bg-primary-1 group transition-all rounded-md"
              )}
            >
              <CalendarCheck width={50} overflow={"visible"} />
              <span
                className={cn(
                  "flex-1",
                  callapsed
                    ? "invisible absolute top-0 min-w-32 left-[100%] border border-dark-1 shadow-md bg-white pointer-events-none rounded-md px-2 py-2 group-hover:visible"
                    : ""
                )}
              >
                Home
              </span>
            </Link>
          </li>
          {/* sub menu radix*/}
          <Accordion.Root
            type="multiple"
            value={openKeyList}
            onValueChange={setOpenKeyList}
            // collapsible
          >
            <Accordion.Item
              value="item1"
              className="group relative"
              onMouseEnter={() => handleElemHover("item1")}
            >
              <Accordion.Trigger
                className={cn(
                  "w-full flex gap-5 px-2 py-3 justify-center hover:bg-primary-1 rounded-md",
                  callapsed ? "" : ""
                )}
              >
                <CalendarCheck width={50} overflow={"visible"} />
                <span
                  className={cn("flex-1 text-left", callapsed ? "hidden" : "")}
                >
                  Home
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
                    <span className="flex-1">Home</span>
                  </div>
                </li>
                <li>
                  <Link
                    to=""
                    className={cn(
                      "flex gap-5 px-[78px] py-1 hover:bg-primary-1 rounded-md",
                      callapsed ? "gap-2 px-2 py-2" : ""
                    )}
                  >
                    <span className="flex-1 opacity-60">Sub1</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className={cn(
                      "flex gap-5 px-[78px] py-1 hover:bg-primary-1 rounded-md",
                      callapsed ? "gap-2 px-2 py-2" : ""
                    )}
                  >
                    <span className="flex-1 opacity-60">Sub2</span>
                  </Link>
                </li>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
          {/* sub menu radix*/}
          <Accordion.Root
            type="multiple"
            value={openKeyList}
            onValueChange={setOpenKeyList}
            // collapsible
          >
            <Accordion.Item
              value="item2"
              className="group relative"
              onMouseEnter={() => handleElemHover("item2")}
            >
              <Accordion.Trigger
                className={cn(
                  "w-full flex gap-5 px-2 py-3 justify-center hover:bg-primary-1 rounded-md",
                  callapsed ? "" : ""
                )}
              >
                <CalendarCheck width={50} overflow={"visible"} />
                <span
                  className={cn("flex-1 text-left", callapsed ? "hidden" : "")}
                >
                  Home
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
                    <span className="flex-1">Home</span>
                  </div>
                </li>
                <li>
                  <Link
                    to=""
                    className={cn(
                      "flex gap-5 px-[78px] py-1 hover:bg-primary-1 rounded-md",
                      callapsed ? "gap-2 px-2 py-2" : ""
                    )}
                  >
                    <span className="flex-1 opacity-60">Sub1</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className={cn(
                      "flex gap-5 px-[78px] py-1 hover:bg-primary-1 rounded-md",
                      callapsed ? "gap-2 px-2 py-2" : ""
                    )}
                  >
                    <span className="flex-1 opacity-60">Sub2</span>
                  </Link>
                </li>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </ul>
      </nav>
      <main className="flex-1">
        <div>contents</div>
      </main>
    </div>
  );
};

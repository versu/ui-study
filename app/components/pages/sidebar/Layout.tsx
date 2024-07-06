import { Sidebar } from "./Sidebar";
import { SidebarItem } from "./SidebarItem";
import { SidebarSubMenu } from "./SidebarSubMenu";
import { CalendarCheck } from "lucide-react";
import { SidebarSubItem } from "./SidebarSubItem";

export const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar>
        <SidebarItem icon={<CalendarCheck />} path="" title="Home" />
        <SidebarSubMenu icon={<CalendarCheck />} itemKey="item1" title="Home">
          <SidebarSubItem key="item1-1" title="Home" path="" />
          <SidebarSubItem key="item1-2" title="Home" path="" />
        </SidebarSubMenu>
        <SidebarItem icon={<CalendarCheck />} path="" title="Home" />
        <SidebarSubMenu icon={<CalendarCheck />} itemKey="item2" title="Home">
          <SidebarSubItem key="item2-1" title="Home" path="" />
          <SidebarSubItem key="item2-2" title="Home" path="" />
        </SidebarSubMenu>
      </Sidebar>
      <main className="flex-1">
        <div>contents</div>
      </main>
    </div>
  );
};

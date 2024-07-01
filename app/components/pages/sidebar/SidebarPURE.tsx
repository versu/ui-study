import "~/components/styles/globals.css";
import s from "./SidebarPURE.module.css";
import { cn } from "~/components/lib/utils";
import { useState } from "react";

export const SidebarPURE = () => {
  const [selectedItem, setSelectedItem] = useState<string>("1");
  return (
    <div className={s.sidebar}>
      {/* logo */}
      <a href="#" className={s.logo_box}>
        <i className="bx bxl-xing"></i>
        <div className={s.logo_name}>your Logo</div>
      </a>

      {/* sidebar items */}
      <ul className={s.sidebar_list}>
        {/* non dropdown item */}
        <li
          className={cn(selectedItem === "1" ? s.active : "")}
          onClick={() => setSelectedItem("1")}
        >
          <div className={s.title}>
            <a href="#" className={s.link}>
              <i className="bx bx-grid-alt"></i>
              <span className={s.name}>Dashboard</span>
            </a>
          </div>
          <div className={s.submenu}>
            {/* // submenu_title */}
            <a href="#" className={cn(s.title, s.submenu_title)}>
              Dashboard
            </a>
          </div>
        </li>
        {/* dropdown item */}
        <li
          className={cn(s.dropdown, selectedItem === "2" ? s.active : "")}
          onClick={() => setSelectedItem("2")}
        >
          <div className={s.title}>
            <a href="#" className={s.link}>
              <i className="bx bx-grid-alt"></i>
              <span className={s.name}>Category</span>
            </a>
            <i className="bx bxs-chevron-down" />
          </div>
          <div className={s.submenu}>
            <a href="#" className={cn(s.link, s.submenu_title)}>
              Category
            </a>
            <a href="#" className={s.link}>
              Hoge
            </a>
            <a href="#" className={s.link}>
              Fuga
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

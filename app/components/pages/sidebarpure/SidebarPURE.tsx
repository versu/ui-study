import "~/components/styles/globals.css";
import s from "./SidebarPURE.module.css";
import { cn } from "~/components/lib/utils";
import { useState } from "react";

export const SidebarPURE = () => {
  const [selectedItem, setSelectedItem] = useState<string>("1");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);

  const handleToggleButtonClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <>
      <div className={cn(s.sidebar, isSideMenuOpen ? "" : s.close)}>
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
          {/* non dropdown item */}
          <li
            className={cn(selectedItem === "3" ? s.active : "3")}
            onClick={() => setSelectedItem("3")}
          >
            <div className={s.title}>
              <a href="#" className={s.link}>
                <i className="bx bx-grid-alt"></i>
                <span className={s.name}>Dashboard2</span>
              </a>
            </div>
            <div className={s.submenu}>
              {/* // submenu_title */}
              <a href="#" className={cn(s.title, s.submenu_title)}>
                Dashboard2
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* contents section */}
      <section className={s.home}>
        <div
          className={s.toggle_sidebar}
          onClick={() => handleToggleButtonClick()}
        >
          <i className="bx bx-menu"></i>
          <div className={s.text}>Toggle</div>
        </div>
      </section>
    </>
  );
};

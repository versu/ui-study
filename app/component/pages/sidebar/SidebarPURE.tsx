import "~/component/styles/globals.css";
import s from "./SidebarPURE.module.css";

export const SidebarPURE = () => {
  return (
    <div className={s.sidebar}>
      {/* logo */}
      <a href="#" className={s.logo_box}>
        <i className="bx bxl-xing"></i>
        <div className="logo-name">your Logo</div>
      </a>
    </div>
  );
};

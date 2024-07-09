import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <li>
        <Link to="/temp">Temp</Link>
      </li>
      <li>
        <Link to="/sidebarpure">SidebarPURE</Link>
      </li>
      <li>
        <Link to="/sidebarTWC">SidebarTWC</Link>
      </li>
      <li>
        <Link to="/sidebar">Sidebar</Link>
      </li>
      <li>
        <Link to="/toast">Toast</Link>
      </li>
    </div>
  );
}

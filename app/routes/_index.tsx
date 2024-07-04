import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <li>
        <Link to="/sidebarpure">SidebarPURE</Link>
      </li>
      <li>
        <Link to="/sidebarTWC">SidebarTWC</Link>
      </li>
    </div>
  );
}

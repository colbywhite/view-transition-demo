import { NavLink, useLocation } from "@remix-run/react";

function ActiveNavMarker() {
  return (
    <div
      id="active-marker"
      className="relative mt-1 h-[2px] w-full bg-primary p-0"
    ></div>
  );
}

const NAV_LINK_CLASSES = "w-fit flex justify-center";
const ACTIVE_NAV_LINK_CLASSES = `${NAV_LINK_CLASSES} text-primary-focus`;

export function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <nav>
        <ul className="menu menu-horizontal w-full justify-center gap-2">
          <li className="">
            <NavLink
              to="/"
              prefetch="render"
              className={({ isActive }) =>
                isActive ? ACTIVE_NAV_LINK_CLASSES : NAV_LINK_CLASSES
              }
            >
              Home
            </NavLink>
            {pathname === "/" && <ActiveNavMarker />}
          </li>
          <li>
            <NavLink
              to="/about"
              prefetch="render"
              className={({ isActive }) =>
                isActive ? ACTIVE_NAV_LINK_CLASSES : NAV_LINK_CLASSES
              }
            >
              About
            </NavLink>
            {pathname === "/about" && <ActiveNavMarker />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

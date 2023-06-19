import AnimatedNavLink from "~/components/AnimatedNavLink";

const NAV_LINK_CLASSES = "w-fit flex justify-center";
const ACTIVE_NAV_LINK_CLASSES = `${NAV_LINK_CLASSES} text-primary-focus`;

export function Header() {
  return (
    <header>
      <nav>
        <ul className="menu menu-horizontal w-full justify-center gap-2">
          <li className="">
            <AnimatedNavLink
              to="/"
              prefetch="render"
              className={({ isActive }) =>
                isActive ? ACTIVE_NAV_LINK_CLASSES : NAV_LINK_CLASSES
              }
            >
              Home
            </AnimatedNavLink>
          </li>
          <li>
            <AnimatedNavLink
              to="/about"
              prefetch="render"
              className={({ isActive }) =>
                isActive ? ACTIVE_NAV_LINK_CLASSES : NAV_LINK_CLASSES
              }
            >
              About
            </AnimatedNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

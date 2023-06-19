import { useNavigate } from "react-router";
import { NavLink, useLocation } from "@remix-run/react";
import type { ComponentProps } from "react";

function startViewTransition(callback: () => void) {
  // @ts-ignore
  if (document.startViewTransition) {
    // @ts-ignore
    document.startViewTransition(callback);
  } else {
    callback();
  }
}

function ActiveNavMarker() {
  return (
    <div
      id="active-marker"
      className="relative mt-1 h-[2px] w-full bg-primary p-0"
    ></div>
  );
}

export default function AnimatedNavLink({
  children,
  to,
  ...rest
}: ComponentProps<typeof NavLink>) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        {...rest}
        to={to}
        onClick={(event) => {
          event.preventDefault();
          startViewTransition(() => navigate(to));
        }}
      >
        {typeof children === "function"
          ? ({ ...props }) => children(props)
          : children}
      </NavLink>
      {pathname === to && <ActiveNavMarker />}
    </>
  );
}

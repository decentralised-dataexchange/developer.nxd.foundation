import React from "react";
import clsx from "clsx";

export default function NavbarMobileSidebarLayout({ header, primaryMenu }) {
  return (
    <div className={clsx("navbar-sidebar", "mobile-sidebar")}>
      {header}
      <div className="navbar-sidebar__items">
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
      </div>
    </div>
  );
}

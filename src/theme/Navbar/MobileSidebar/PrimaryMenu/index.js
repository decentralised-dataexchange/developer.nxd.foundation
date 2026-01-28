import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";

// Only show Getting Started and Developer APIs - no language selector, no accordions
const menuItems = [
  {
    label: "Getting Started",
    to: "/docs/getting-started",
  },
  {
    label: "Developer APIs",
    to: "/docs/developer-apis",
  },
];

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <ul className="menu__list mobile-menu__list">
      {menuItems.map((item, i) => (
        <li key={i} className="menu__list-item">
          <Link
            to={item.to}
            className="menu__link mobile-menu__link"
            onClick={() => mobileSidebar.toggle()}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

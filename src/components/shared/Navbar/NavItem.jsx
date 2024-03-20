import { navMenu } from "@/data";
import Link from "next/link";

const NavItem = () => {
  return (
    <>
      {navMenu?.map((name) => {
        return name?.submenu ? (
          <li key={name.id}>
            <details>
              <summary>{name?.name}</summary>
              <ul>
                {name?.submenu?.map((submenuItem) => {
                  return (
                    <li key={submenuItem.path}>
                      <Link href={submenuItem.path} className="text-nowrap">
                        {submenuItem?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        ) : (
          <li key={name.path} className="text-nowrap">
            <Link href={name.path}>{name.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;

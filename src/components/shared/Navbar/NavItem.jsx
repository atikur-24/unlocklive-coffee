import { navMenu } from "@/data";
import Link from "next/link";

const NavItem = () => {
  return (
    <>
      {navMenu?.map((item) => {
        return item?.submenu ? (
          <li key={item.id}>
            <details>
              <summary>{item?.name}</summary>
              <ul>
                {item?.submenu?.map((submenuItem) => {
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
          <li key={item.path} className="text-nowrap">
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;

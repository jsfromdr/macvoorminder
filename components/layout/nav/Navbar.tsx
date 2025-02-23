import { Darkmode, NavbarLink } from "@/lib/types";

import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { LogoBlack, LogoWhite } from "@/components/icons/logo";
import { getHeaderMenu } from "@/lib/fragments/menu";
import Link from "next/link";

// Menu
const menudata = await getHeaderMenu();
const { menu } = menudata;

export default async function Navbar({ dark }: { dark: Darkmode }) {
  return (
    <header
      className={`absolute left-0 right-0 top-0 flex items-center justify-between px-4 ${dark}`}
    >
      {dark ? <LogoBlack /> : <LogoWhite />}
      {dark ? <HeaderMenuBlack /> : <HeaderMenuWhite />}
      <div className="flex items-center gap-8">
        <HeaderActionAccount dark={dark} />
        <HeaderActionCart dark={dark} />
      </div>
    </header>
  );
}

/*
 * Header White
 */

function HeaderMenuWhite() {
  return (
    <ul className="relative flex items-center gap-8">
      {menu.items.map((node) => (
        <li
          key={node.key}
          className="group relative h-fit w-fit cursor-pointer border-t-[6px] border-t-transparent py-6 font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-t-green-600"
        >
          <Link href={node.url}>{node.title}</Link>
          {node.items && node.items.length > 0 && (
            <ul className="absolute left-0 top-14 mt-2 hidden h-fit w-fit translate-y-2 transform flex-col overflow-hidden rounded bg-white text-black shadow-md transition-all duration-150 group-hover:flex">
              {node.items.map((child) => (
                <li key={child.id} className="p-4 hover:bg-gray-100">
                  <Link className="text-nowrap" href={child.url}>
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

/*
 * Header Black
 */

function HeaderMenuBlack() {
  return (
    <ul className="flex items-center gap-8">
      {menu.items.map((node: NavbarLink) => (
        <li
          key={node.key}
          className="cursor-pointer border-t-[6px] border-t-transparent py-6 font-medium text-black transition-all duration-300 hover:-translate-y-[2px] hover:border-t-green-600"
        >
          <Link href={`${node.href}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  );
}

/*
 * Account
 */

function HeaderActionAccount({ dark }: { dark: Darkmode }) {
  return (
    <div className="flex items-center gap-1">
      {dark ? (
        <UserIcon className="text-black" height={20} />
      ) : (
        <UserIcon className="text-white" height={20} />
      )}
      <span
        className={`${dark ? "text-black" : "text-white"} cursor-pointer font-medium transition-all duration-300 hover:translate-y-[-2px]`}
      >
        Account
      </span>
    </div>
  );
}

/*
 * Cart
 */

function HeaderActionCart({ dark }: { dark: Darkmode }) {
  return (
    <div className="flex items-center gap-1">
      {dark ? (
        <ShoppingCartIcon className="text-black" height={20} />
      ) : (
        <ShoppingCartIcon className="text-white" height={20} />
      )}
      {dark ? (
        <ChevronDownIcon className="text-black" height={20} />
      ) : (
        <ChevronDownIcon className="text-white" height={20} />
      )}
    </div>
  );
}

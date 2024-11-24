"use client";

import { ZgLogo } from "@/components/icons/ZgLogo";
import { LanguageMenu } from "@/components/LanguageMenu";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/UserMenu";
import { PersonStanding } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Naslovnica" },
  { href: "/dogadanja", label: "Događanja" },
  { href: "/otkrij", label: "Otkrij" },
  { href: "#", label: "Kontakt" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-navigation text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <ZgLogo />
        </div>

        <div className="flex">
          <ul className="flex space-x-4">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Button
                    variant={isActive ? "default" : "link"}
                    asChild
                    className={
                      isActive
                        ? "bg-neutral-100 text-black hover:bg-neutral-200 hover:text-black"
                        : "text-white"
                    }
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>

          <div className="gap-x-4 hidden md:flex">
            <Button variant="ghost" size="icon" className="[&_svg]:size-6">
              <PersonStanding size={32} />
            </Button>
            <LanguageMenu />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

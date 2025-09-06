"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  url: string;
}

interface NavbarProps {
  logo?: {
    title: string;
    src: string;
    alt: string;
    url: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    title: "siwisdem",
    src: "/images/siwisdem.png",
    alt: "siwisdem",
    url: "/",
  },
  menu = [
    { title: "BERANDA", url: "/" },
    { title: "PROFIL DESA", url: "/profil" },
    { title: "DESTINASI WISATA", url: "/destinasi" },
    { title: "PILIHAN PAKET", url: "/paket" },
    { title: "INFO TERKINI", url: "/info" },
  ],
}: NavbarProps) => {
  const pathname = usePathname();

  const itemClass = (url: string) =>
    [
      "inline-flex items-center justify-center whitespace-nowrap",
      "font-sans text-sm md:text-base tracking-wide transition-colors duration-200",
      // state normal
      pathname === url
        ? // STATE AKTIF
          "px-4 py-1 rounded-full font-bold bg-green-700 text-white"
        : // STATE NON-AKTIF
          "px-2 py-1 font-normal rounded-3xl hover:bg-green-100",
      "transition-colors",
    ].join(" ");

  return (
    <section className="py-2 fixed lg:fixed z-50 left-0 right-0 bg-white shadow-lg">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden w-full justify-between lg:flex">
          <div className="flex w-full justify-between items-center gap-12">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2 ml-30">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="h-8 w-auto"
                />
              ) : null}
            </Link>

            {/* Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-10">
                {menu.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.url} className={itemClass(item.url)}>
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden  mr-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2 ml-3">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : null}
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={150}
                        height={32}
                        className="h-8 w-auto"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 px-4 pb-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col"
                  >
                    {menu.map((item) => (
                      <AccordionItem
                        key={item.title}
                        value={item.title}
                        className="border-b-0 mb-4"
                      >
                        {/* <AccordionTrigger className="py-1 hover:no-underline">
                          <Link href={item.url} className={itemClass(item.url)}>
                            {item.title}
                          </Link>
                        </AccordionTrigger>
                        <AccordionContent /> */}

                        <Link href={item.url} className={itemClass(item.url)}>
                          {item.title}
                        </Link>

                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };

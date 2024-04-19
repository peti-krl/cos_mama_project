import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import './styles.scss';
import Logo from "./Logo.jsx"
import { FaUser } from 'react-icons/fa';

export default () => (
  <NavigationMenu className="relative z-[1] flex w-screen justify-center">
    <NavigationMenuList className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
      <NavigationMenuItem>
      <Logo />
      </NavigationMenuItem>
      <NavigationMenuItem className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        <NavigationMenuLink href="/">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        <NavigationMenuLink href="/about">About us</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        <NavigationMenuLink href="/events">Events</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
      <NavigationMenuLink href="/register">
        <button
        className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
      >
        <FaUser /> Register
      </button>
      </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
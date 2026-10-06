// src/components/Navbar.tsx

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router"

const NAV_ITEMS = [
  { to: "/home", label: "Home" },
  { to: "/study-room", label: "StudyRoom" },
  { to: "/materias", label: "Materias" },
  { to: "/perfil", label: "Perfil" },
  { to: "/configuracion", label: "Configuración" }
]

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <NavigationMenu className="h-14 max-h-14 items-stretch max-w-none bg-navbar text-navbar-foreground">
      <NavigationMenuList className="flex items-stretch justify-center">
        {NAV_ITEMS.map(({ to, label }) => {
          const isActive = pathname.startsWith(to);

          return (
            <NavigationMenuItem className="flex" key={to}>
              <NavigationMenuLink
                render={<Link to={to} />}
                className={cn(
                  "flex items-center w-30 justify-center rounded-none px-4 text-navbar-foreground",
                  "hover:bg-navbar-active hover:text-navbar-foreground focus:bg-navbar-active focus:text-navbar-foreground transition-colors duration-250",
                  isActive && "border-b-2 border-border bg-navbar-active"
                )}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
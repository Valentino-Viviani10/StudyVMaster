// src/components/Navbar.tsx

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

export const Navbar = () => {
  return (
    <NavigationMenu className="flex items-center justify-between w-full max-w-none bg-blue-500 text-white p-2">
      <NavigationMenuList>
        <NavigationMenuItem className="hover:text-black">
          <NavigationMenuLink render={<Link to="/home" />}>Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-black">
          <NavigationMenuLink render={<Link to="/study-room" />}>StudyRoom</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-black">
          <NavigationMenuLink render={<Link to="/materias" />}>Materias</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-black">
          <NavigationMenuLink render={<Link to="/perfil" />}>Perfil</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-black">
          <NavigationMenuLink render={<Link to="/configuracion" />}>Configuración</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
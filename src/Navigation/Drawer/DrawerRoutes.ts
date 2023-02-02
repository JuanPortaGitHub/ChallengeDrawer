import { Cart } from "../../Screens/Cart";
import { Favourites } from "../../Screens/Favourites";
import { Orders } from "../../Screens/Orders";
import { SignOut } from "../../Screens/SignOut";
import Tabs from "../Tab/Tabs";

interface DrawerRoutesInterface  {
    name: string,
    text: string,
    component: any,
    navigate: string
}

export interface DrawerScreensProps {
    route: { name: string };
    navigation: { toggleDrawer: () => void };
  }

export type DrawerList = {
    Start: undefined;
    Cart: undefined;
    Favourites: undefined;
    Orders: undefined;
    SignOut: undefined;
  };

export const DrawerRoutes: DrawerRoutesInterface[] = [
    {name: 'Start', text: 'Start', component: Tabs, navigate: 'Home'},
    {name: 'Cart', text: 'Cart', component: Cart, navigate: 'Cart'},
    {name: 'Favourites', text: 'Favourites', component: Favourites, navigate: 'Favourites'},
    {name: 'Orders', text: 'Your Orders', component: Orders, navigate: 'Orders'},
    {name: 'SignOut', text: 'SignOut', component: SignOut, navigate: 'SignOut'},
]
import { pages } from "../constants";
import { IRoutes } from "./types";
import { DetailProduct, Main,Profile, Dashboard, Categories, Signin, Signup, Orders } from "../pages";

export const routes: IRoutes[] = [
   {
      link: pages.MAIN,
      title: 'main',
      roles: ['user', 'admin', 'superAdmin'],
      component: <Main />
   },
   {
      link: pages.PROFILE,
      title: 'profile',
      roles: ['user', 'admin', 'superAdmin'],
      component: <Profile />
   },
   {
      link: pages.DASHBOARD,
      title: 'dashboard',
      roles: ['admin', 'superAdmin'],
      component: <Dashboard />
   },
   {
      link: pages.ORDERS,
      title: 'orders',
      roles: ['user', 'admin', 'superAdmin'],
      component: <Orders />
   },
   {
      link: pages.CATEGORIES,
      title: 'categories',
      roles: ['user', 'admin', 'superAdmin'],
      component: <Categories />
   },
   {
      link :pages.PRODUCT_DETAIL,
      title: 'product detail',
      roles: ['user', 'admin' ,'superAdmin'],
      component: <DetailProduct />
   }
]

export const authRoutes: Omit<IRoutes, "roles">[] = [
   {
      title: 'login',
      link: pages.SIGN_IN,
      component: <Signin />
   },
   {
      title: 'registration',
      link: pages.SIGN_UP,
      component: <Signup />
   }
];
import { Iroles } from "../types";

export interface IRoutes {
   link: string;
   title: string;
   roles: Iroles[];
   component: React.ReactElement;
}
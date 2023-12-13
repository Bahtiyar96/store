import React, { ReactNode } from 'react'
import { IUser, Iroles } from '../types';

interface IPrivateRouteProps {
   children: ReactNode,
   roles: Iroles[];
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children, roles }) => {
   const user: IUser = JSON.parse(localStorage.getItem('user')!);
   if (!user) {
      return <>404</>
   }
   return roles.includes(user.role) ? children : <>404</>;
}

import React from 'react';

export interface SideBarNavItemProps {
  id: string;
  name: string;
  path: string;
  Icon: React.ComponentType;
}

export type ParentSideNavItemProps = SideBarNavItemProps & {
  NavItems?: SideBarNavItemProps[];
};

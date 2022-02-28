export interface MenuParams {
  title?: String;
  icon?: string;
  isClick?: boolean;
}

export interface MenuItemParams extends MenuParams {
  children?: MenuParams[];
}

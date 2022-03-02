import { RouteRecordName } from "vue-router";

export interface MenuParams {
  title?: String;
  icon?: string;
  isClick?: boolean;
}

export interface HistoryTab extends MenuParams {
  name: RouteRecordName | null | undefined;
}

export interface MenuItemParams extends MenuParams {
  children?: MenuParams[];
}

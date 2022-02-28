import { RouteRecordName } from "vue-router";

export interface MenuParams {
  title?: String;
  icon?: string;
  isClick?: boolean;
}

export interface HistoryTab {
  title: string;
  name: RouteRecordName | null | undefined;
}

export interface MenuItemParams extends MenuParams {
  children?: MenuParams[];
}

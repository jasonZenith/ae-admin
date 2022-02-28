import { HistoryTab } from "#/menu";
import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";

export const historyTabStore = defineStore("historyTab", {
  state: () => {
    return {
      historyTabs: [] as HistoryTab[],
    };
  },

  actions: {
    addHistoryTab(route: RouteLocationNormalized) {
      const tabs: HistoryTab = { name: route.name, title: route.meta.title };
      const isExist = this.historyTabs.some(
        (tab) => tab.title === route.meta.title
      );
      if (!isExist) {
        this.historyTabs.push(tabs);
      }
    },
  },
});

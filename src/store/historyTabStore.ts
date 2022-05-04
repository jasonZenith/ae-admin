import { HistoryTab } from "#/menu";
import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";
import { router } from "@/router";

export const historyTabStore = defineStore("historyTab", {
  state: () => {
    return {
      historyTabs: [{ name: "admin.user", title: "分析页", isClick: true }] as HistoryTab[],
    };
  },

  actions: {
    addHistoryTab(route: RouteLocationNormalized) {
      const tabs: HistoryTab = {
        name: route.name,
        title: route.meta.title,
        isClick: route.meta.isClick,
      };
      const isExist = this.historyTabs.some(tab => tab.title === route.meta.title);
      if (!isExist && route.meta.title) {
        this.historyTabs.push(tabs);
      }
    },

    removeHistoryTab(historyTab: HistoryTab) {
      const removeTabIndex = this.historyTabs.indexOf(historyTab); // 选择删除的索引
      this.historyTabs.splice(removeTabIndex, 1); // 删除该索引下的tab
      router.push({
        name: this.historyTabs[removeTabIndex - 1].name as string,
      });
    },
  },
});

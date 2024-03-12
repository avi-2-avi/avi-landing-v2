import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    selectedItem: null as string | null,
  }),
  actions: {
    selectItem(item: string) {
      this.selectedItem = item;
    },
  },
});

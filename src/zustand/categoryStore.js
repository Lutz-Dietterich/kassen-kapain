import { create } from "zustand";
import axios from "axios";

const useCategoryStore = create((set, get) => ({
  categoryList: [],
  setCategoryList: (newList) => set({ categoryList: newList }),

  fetchCategoryList: async () => {
    try {
      const categoryList = await axios.get(
        "http://localhost:3000/api/category"
      );
      get().setCategoryList(categoryList.data.categoryList);
    } catch (error) {
      console.error("felhler beim fetchen der categorylist", error);
    }
  },

  sendNewCategory: async (newCategory) => {
    try {
      await axios.post("http://localhost:3000/api/category", {
        category: newCategory,
      });
    } catch (error) {
      console.error("felhler meim senden der neuen Kategorie", error);
    }
  },
}));

export default useCategoryStore;

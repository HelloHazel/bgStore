// store.js

import {create} from "zustand";


const useStore = create((set) => ({
  items: [],
  isLoading: false,
  totalCount:0,
  allPrice:0, 
  loadItems: async () => {
    try {
      set({isLoading:true});

      //로딩 창 구현 검증 위한 3초 딜레이
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch("http://localhost:3001/items");
      if (!response.ok) {
        throw new Error("Failed to load items");
      }
      const data = await response.json();
      const jsonDataWithCount = data.map((item) => ({
        ...item,
        count: 0,
        totalPrice:0,
      }));
      set({ items: jsonDataWithCount });
      set({isLoading:false});
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, count: Math.min(item.count + 1, 999), totalPrice: Math.min(item.count + 1, 999) * item.price } : item
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count - 1, 0),totalPrice: Math.max(item.count - 1, 0) * item.price }
          : item
      ),
    })),
    getAllCountAndPrice: () =>
      set((state) => ({
        totalCount : state.items.reduce((sum,item)=>sum + item.count, 0),
        allPrice : state.items.reduce((sum,item)=>sum + item.totalPrice,0),
      })),
}));

export { useStore };

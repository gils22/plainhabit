import { defineStore } from 'pinia'

export interface WishlistItem {
  id: number
  name: string
  price: number
  color: string
  size: string
  image: string
}

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [] as WishlistItem[],
  }),
  persist: true,

  actions: {
    addItem(item: WishlistItem) {
      const existing = this.items.find((i) => i.id === item.id)
      if (!existing) {
        this.items.push(item)
      }
    },
    removeItem(item: WishlistItem) {
      this.items = this.items.filter((i) => i.id !== item.id)
    },
  },
})

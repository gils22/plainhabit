import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  price: number
  color: string
  size: string
  qty: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  persist: true,

  getters: {
    subtotal(state): number {
      return state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    tax(): number {
      return this.subtotal * 0.1
    },
    total(): number {
      return this.subtotal + this.tax
    },
  },

  actions: {
    addItem(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id && i.size === item.size)
      if (existing) {
        existing.qty += item.qty
      } else {
        this.items.push(item)
      }
    },
    increaseQty(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id && i.size === item.size)
      if (existing) existing.qty++
    },
    decreaseQty(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id && i.size === item.size)
      if (existing && existing.qty > 1) existing.qty--
    },
    removeItem(item: CartItem) {
      this.items = this.items.filter((i) => !(i.id === item.id && i.size === item.size))
    },
    clearCart() {
      this.items = []
    },
  },
})

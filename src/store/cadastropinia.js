import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', {
  state: () => ({ usuarios:[]}),

  getters: {
    /**
     * @returns {Array<{ name: string; amount: number }>}
     */
    items: (state) =>
      state.rawItems.reduce((items, item) => {
        const existingItem = items.find((it) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        return items
      }, []),
  },
 
})

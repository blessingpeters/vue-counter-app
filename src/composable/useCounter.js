import { reactive } from 'vue'

const state = reactive({
  count: 0
})

export const useCounter = () => {
  const increment = () => {
    state.count++
  }

  const decrement = () => {
    state.count--
  }

  const reset = () => {
    state.count = 0
  }

  const setValue = (value) => {
    state.count = value
  }

  return {
    state,
    increment,
    decrement,
    reset,
    setValue
  }
}

<template>
    <main>
        <div class="counter">
            <h1>Counter</h1>
            <div class="flex">
                <button @click="increment">+</button>
                <p>{{ state.count }}</p>
                <button @click="decrement">-</button>
            </div>


            <button class="reset" @click="reset">Reset</button>
            <div class="setvalue">
                <input type="number" v-model="value" />
                <button @click="setValue(value); clearInput()">Set Value</button>
            </div>
        </div>
    </main>

  </template>

<script>
  import { useCounter } from '@/composable/useCounter'
  import { ref } from 'vue'

  export default {
    setup() {
      const { state, increment, decrement, reset, setValue } = useCounter()
      const value = ref("")
  
      const clearInput = () => {
      value.value = ''
    }

        return {
        state,
        increment,
        decrement,
        reset,
        setValue,
        value,
        clearInput
        }
    }
  }
</script>
<style scoped>
    .counter {
        text-align: center;
        padding: 0 15%;
    }
    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 3rem;

    }
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1.5rem 0;
    }
    .reset{
        margin: 1.5rem 0;
    }
    button {
        font-size: 1.5rem;
        padding: 10px 40px;
        background-color: hsla(160, 100%, 37%, 1);
        border: none;
        color: #fff;
        border-radius: 5px;

    }
    input {
        font-size: 1.5rem;
        padding: 10px;
        border: none;
        border-radius: 5px;

    }
</style>

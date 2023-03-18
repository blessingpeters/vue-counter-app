<template>
  <NavBar />
  <div class="counter">
    <h1>Counter</h1>
    <div class="flex">
        <button @click="decrement">-</button>
        <p>{{ state.count }}</p>
        <button @click="increment">+</button>
    </div>
    <div><button class="reset" @click="reset">Reset</button></div>

    <div class="setvalue">
      <input type="number" v-model="value" />
                <button class="setvalue-btn" @click="setValue(value); clearInput()">Set Value</button>
            </div>
        </div>
</template>

<script>
import { useCounter } from '@/composable/useCounter'
import { ref } from 'vue'

export default {
  setup() {
    const { state, increment, decrement, reset, setValue } = useCounter()
    const value = ref('')

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
  padding: 5%;
  border-radius: 12px;
  background: #f5f5f5;
  box-shadow: 5px 5px 11px #dfdfdf, -5px -5px 11px #ffffff;
}
p {
  font-size: 2rem;
  padding: 1.5rem;
  margin: 3%;
  box-shadow: inset 9.91px 9.91px 15px #DfDfDf, inset -9.91px -9.91px 15px #FFFFFF;
}
.flex {
  display: flex;
  justify-content: space-between;
align-items: center;
  width: 100%;
  flex-wrap: wrap;
}
.counter div {
  margin: 2rem 0;
}

input {
  width: 100%;
  font-size: 1.5rem;
  padding-left: 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  box-shadow: inset 9.91px 9.91px 15px #DfDfDf, inset -9.91px -9.91px 15px #FFFFFF;
}
input:focus {
  outline: none;
}
.setvalue {
  display: flex;
}
.reset {
  background-color: rgb(207, 120, 120);
}
.setvalue-btn{
    padding: 10px 40px;
    border-radius: 0 10px 10px 0;
}

@media (max-width: 400px) {
  .counter {
    width: 100%;
  }
  .flex{
    flex-direction: column;
    align-items: normal;
  }
  p{
    width: 90%;
    margin: 5%;
  }
}


</style>

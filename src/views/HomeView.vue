<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <main>
    <NavBar />
    <div>
      <h1>Vue Counter Application <span>Let’s go</span></h1>
      <button>Counter</button>
    </div>
  </main>
</template>

<style scoped>
  div{
    text-align: center;
    padding: 0 15%;
  }
  h1{
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  button{
    font-size: 1.5rem;
    padding: 10px 40px;
    background-color: hsla(160, 100%, 37%, 1);
    border: none;
    color: #fff;
    border-radius: 5px;
  }
  span{
    color: rgb(52, 123, 99);
    display: block;

  }

</style>

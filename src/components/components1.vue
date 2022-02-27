<template>
  <div>
  <p>資料單向綁定</p>
  <p>{{ data }}</p>

  <p>資料雙向綁定</p>
  <input type="text" v-model="text" />
  <p>{{ text }}</p>
  </div>
</template>

<script setup>
 import { ref } from 'vue'
const data = "Hello Vue"
const text =  ref("ss")
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
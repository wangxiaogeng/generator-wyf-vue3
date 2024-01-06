<script setup lang="ts">
import {counterStore} from '@/store/counterStore'
const counterSlice = counterStore()

const handleChange=()=>{
  // counterSlice.$patch()
  // 直接修改，不通过actions，不会留下时间旅行历史记录
  counterSlice.counter++
  //    通过actions修改
}
const handleActionChange = ()=>{
  counterSlice.addCounter(2)
}
</script>

<template>
  <h1>Hellow world route</h1>
  <h2>{{ counterSlice.counter }}</h2>
  <button @click="handleChange">直接修改change Store</button>
  <button @click="handleActionChange">通过actions change Store</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
